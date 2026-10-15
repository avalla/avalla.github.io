#!/usr/bin/env node
// Generates an ATS-friendly PDF from the same data used by the Gatsby website.
// No third-party PDF package or browser is required.
const fs = require('fs');
const path = require('path');
const resume = require('../src/data/resume');

const W = 595.28, H = 841.89, LEFT = 43, RIGHT = 43, TOP = 43, BOTTOM = 44;
const maxWidth = W - LEFT - RIGHT;
const pages = [];
let commands = [], y = H - TOP;

const ascii = value => String(value ?? '')
  .normalize('NFKD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[\u2010-\u2015]/g, '-')
  .replace(/[\u2018\u2019]/g, "'")
  .replace(/[\u201c\u201d]/g, '"')
  .replace(/[^\x20-\x7e]/g, ' ');
const escape = value => ascii(value).replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
const textWidth = (str, size) => ascii(str).split('').reduce((sum, c) => {
  if ('il.:,;!| '.includes(c)) return sum + size * .25;
  if ('mwMW@'.includes(c)) return sum + size * .83;
  return sum + size * .51;
}, 0);
function wrap(str, size, width = maxWidth) {
  const result = [];
  for (const paragraph of ascii(str).split('\n')) {
    let line = '';
    for (const word of paragraph.split(/\s+/).filter(Boolean)) {
      const next = line ? line + ' ' + word : word;
      if (textWidth(next, size) > width && line) {
        result.push(line);
        line = word;
      } else line = next;
    }
    if (line) result.push(line);
  }
  return result.length ? result : [''];
}
function page() {
  if (commands.length) pages.push(commands.join('\n'));
  commands = []; y = H - TOP;
}
function ensure(height) { if (y - height < BOTTOM) page(); }
function drawText(str, size = 9.3, bold = false, indent = 0, color = '0.16 0.22 0.30') {
  commands.push(color + ' rg', 'BT', '/' + (bold ? 'F2' : 'F1') + ' ' + size + ' Tf',
    '1 0 0 1 ' + (LEFT + indent).toFixed(2) + ' ' + y.toFixed(2) + ' Tm',
    '(' + escape(str) + ') Tj', 'ET');
}
function lines(str, size = 9.2, leading = 13.1, opts = {}) {
  const wrapped = wrap(str, size, maxWidth - (opts.indent || 0));
  ensure(wrapped.length * leading + 1);
  for (const line of wrapped) {
    drawText(line, size, !!opts.bold, opts.indent || 0, opts.color);
    y -= leading;
  }
}
function section(name) {
  ensure(29);
  y -= 10;
  commands.push('0.77 0.81 0.87 RG', '0.6 w', LEFT + ' ' + (y + 7).toFixed(2) + ' m ' + (W - RIGHT) + ' ' + (y + 7).toFixed(2) + ' l S');
  lines(name.toUpperCase(), 11, 16, { bold: true, color: '0.10 0.27 0.45' });
  y -= 2;
}
function bullet(value) {
  const wrapped = wrap(value, 9.1, maxWidth - 20);
  ensure(wrapped.length * 12.5 + 3);
  drawText('-', 9.1, true, 3);
  for (const line of wrapped) {
    drawText(line, 9.1, false, 15);
    y -= 12.5;
  }
  y -= 3;
}
function entry(title, subtitle, bullets, tech) {
  ensure(42);
  lines(title, 10.1, 14, { bold: true });
  if (subtitle) lines(subtitle, 8.7, 12, { color: '0.35 0.42 0.49' });
  y -= 2;
  for (const item of bullets || []) bullet(item);
  if (tech?.length) lines('Technologies: ' + tech.join(', '), 8.4, 12, { color: '0.35 0.42 0.49' });
  y -= 8;
}

lines(resume.profile.name, 18, 24, { bold: true, color: '0.10 0.27 0.45' });
lines(resume.profile.headline, 10, 14, { bold: true });
lines([resume.profile.location, resume.profile.email, resume.profile.phone].filter(Boolean).join(' | '), 8.6, 12);
lines([resume.profile.website, resume.profile.social?.github, resume.profile.social?.linkedin].filter(Boolean).join(' | '), 8.2, 12);
y -= 5;

section('Professional summary');
for (const item of resume.summary) lines(item, 9.3, 13.5);
section('Professional experience');
for (const e of resume.experience) {
  entry(e.role + ' | ' + e.company,
    [e.dates, e.location].filter(Boolean).join(' | '),
    e.highlights, e.technologies);
}
section('Selected projects');
for (const p of resume.selectedProjects) {
  entry(p.name + ' | ' + p.role, [p.dates, p.url].filter(Boolean).join(' | '), p.highlights, p.technologies);
}
section('Technical skills');
for (const group of resume.technologies) {
  lines(group.category + ': ' + group.items.join(', '), 8.9, 12.5);
}
section('Languages');
lines(resume.languages.map(l => l.name + ' (' + l.level + ')').join(' | '), 9.1, 13);
page();

// Minimal PDF 1.4 writer: vector text, embedded standard fonts, extractable text.
const objects = [null];
const add = x => { objects.push(x); return objects.length - 1; };
const font1 = add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>');
const font2 = add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>');
const catalog = add('');
const pageTree = add('');
const refs = [];
for (const content of pages) {
  const stream = add('<< /Length ' + Buffer.byteLength(content, 'ascii') + ' >>\nstream\n' + content + '\nendstream');
  const p = add('<< /Type /Page /Parent ' + pageTree + ' 0 R /MediaBox [0 0 ' + W + ' ' + H + '] /Resources << /Font << /F1 ' + font1 + ' 0 R /F2 ' + font2 + ' 0 R >> >> /Contents ' + stream + ' 0 R >>');
  refs.push(p + ' 0 R');
}
objects[catalog] = '<< /Type /Catalog /Pages ' + pageTree + ' 0 R >>';
objects[pageTree] = '<< /Type /Pages /Kids [' + refs.join(' ') + '] /Count ' + refs.length + ' >>';
let pdf = '%PDF-1.4\n';
const offsets = [0];
for (let i = 1; i < objects.length; i++) {
  offsets.push(Buffer.byteLength(pdf, 'ascii'));
  pdf += i + ' 0 obj\n' + objects[i] + '\nendobj\n';
}
const start = Buffer.byteLength(pdf, 'ascii');
pdf += 'xref\n0 ' + objects.length + '\n0000000000 65535 f \n';
for (let i = 1; i < objects.length; i++) pdf += String(offsets[i]).padStart(10, '0') + ' 00000 n \n';
pdf += 'trailer\n<< /Size ' + objects.length + ' /Root ' + catalog + ' 0 R >>\nstartxref\n' + start + '\n%%EOF\n';
const output = path.join(__dirname, '..', 'static', 'resume.pdf');
fs.writeFileSync(output, pdf, 'ascii');
console.log('Generated ' + output + ' (' + pages.length + ' pages)');

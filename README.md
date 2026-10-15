# [Andrea Valla Resume](https://avalla.github.io)

[![Build and deploy](https://github.com/avalla/avalla.github.io/actions/workflows/main.yml/badge.svg)](https://github.com/avalla/avalla.github.io)
[![GitHub top language](https://img.shields.io/github/languages/top/avalla/avalla.github.io)](https://github.com/avalla/avalla.github.io)
[![GitHub](https://img.shields.io/github/license/avalla/avalla.github.io)](https://github.com/avalla/avalla.github.io)
[![Visitors](https://visitor-badge.glitch.me/badge?page_id=avalla.avalla.github.io.visitor-badge)](https://github.com/avalla/avalla.github.io)

Hello, this is just a simple website with my resume :)

Check the built website on: [https://avalla.github.io](https://avalla.github.io)

## Libraries

- Gatsby
- React
- Bulma
- Styled components

## Resume content and PDF

`src/data/resume.js` is the shared content source for the website, console, and metadata.
The print layout uses one column, standard section headings, visible contact URLs,
and Arial/Helvetica with body text at 9.5 pt and supporting text at 9 pt.

The build automatically generates `static/resume.pdf` from `src/data/resume.js` using
`scripts/generate-resume-pdf.js`. The PDF is an ATS-friendly text document,
independent of browser rendering. No manual PDF export is necessary.

To regenerate locally, run `node scripts/generate-resume-pdf.js` or `yarn build`.
After content changes, inspect the generated PDF and ensure all sections and
links remain readable. The published PDF is regenerated on every build.

Pull requests run the build; only pushes to `main` deploy to GitHub Pages.

## Thanks

Thanks to opensource community for awesome libraries!

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

After changing content or print styles:

1. Run `yarn build` and `yarn serve`.
2. Open the local site in Chrome/Chromium and print to PDF at A4, 100% scale,
   using the CSS page margins and disabling browser headers and footers.
3. Replace `static/resume.pdf` with that export. Check all pages visually and
   verify that copying or extracting the text preserves section and experience order.
4. Rebuild so `public/resume.pdf` contains the updated download.

Pull requests run the build; only pushes to `main` deploy to GitHub Pages.

## Thanks

Thanks to opensource community for awesome libraries!

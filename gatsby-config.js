const resume = require('./src/data/resume');

module.exports = {
  siteMetadata: {
    title: resume.profile.name,
    description: resume.seoDescription,
    author: `@avalla`,
    sources: 'https://github.com/avalla/avalla.github.io',
    contacts: {
      phone: resume.profile.phone,
      email: resume.profile.email,
      website: resume.profile.website,
    },
    social: resume.profile.social,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `avalla-resume`,
        short_name: `avalla-resume`,
        start_url: `/`,
        background_color: `#2979ff`,
        theme_color: `#2979ff`,
        display: `minimal-ui`,
        icon: `src/images/portfolio.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat`],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-MKCWNDK',
        includeInDevelopment: false,
        defaultDataLayer: { platform: 'gatsby' },
      },
    },
  ],
};

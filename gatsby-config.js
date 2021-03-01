module.exports = {
  siteMetadata: {
    title: `Andrea Valla`,
    description: `Andrea Valla - Full Stack Developer`,
    author: `@avalla`,
    contacts: {
      phone: "+39 335 82 30 421",
      email: "valla.andrea@gmail.com",
      website: "https://avalla.github.io",
    },
    social: {
      github: "https://github.com/avalla",
      linkedin: "https://linkedin.com/in/avalla",
      stackoverflow: "https://stackoverflow.com/users/876314",
    },
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
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-MKCWNDK",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
  ],
}

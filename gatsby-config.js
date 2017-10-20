module.exports = {
  siteMetadata: {
    title: "Stephen Richter",
    description: "I build software and love marketing.",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts/`
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `ovo\: 300,400,700`,
          `muli\: 300,400,400i,700`
        ]
      }
    }
  ]
}

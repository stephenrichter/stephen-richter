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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-115823020-1",
        // Puts tracking script in the head instead of the body
        head: false
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Ovo`,
          `Muli\:200,300,400,600,700`,
          `Source Sans Pro\:300,400,400i,700`
        ]
      }
    }
  ]
}

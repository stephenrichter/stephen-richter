import React from "react"
import {CenteredLayout} from '../components/centered-layout'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <CenteredLayout>
      <h1>
        {post.frontmatter.title}
      </h1>
      <h3>{post.frontmatter.date}</h3>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </CenteredLayout>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title,
        date
      }
    }
  }
`
import React from "react"
import CenteredLayout from '../components/centered-layout'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <CenteredLayout name="blogpost"
                    title={post.frontmatter.title}
                    desc="A blog post."
                    type="website"
                    image="https://cldup.com/go95bqT7sK.jpg">
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
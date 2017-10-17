import React, {Component} from "react"
import {Row, Column} from '../components/grid'
import {CenteredLayout} from '../components/centered-layout'
import Link from 'gatsby-link'

export default class Journal extends Component {
  render () {
    const posts = this.props.data.allMarkdownRemark.edges

    return (
      <CenteredLayout>
        <Row>
          <div>
            <h1>Journal</h1>
            <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
          </div>
        </Row>
        <Column>
          {posts.map((post, i) => this.renderArticle(post.node, i))}
        </Column>
      </CenteredLayout>
    )
  }

  renderArticle (post, index) {
    return (
      <div key={index}>
        <div className="date">{post.frontmatter.date}</div>
        <div className="title">
          <Link to={post.fields.slug}>
            {post.frontmatter.title}
          </Link>
        </div>
        <div className="excerpt">
          <p>{post.excerpt}</p>
        </div>
      </div> 
    ) 
  }
}

export const query = graphql`
  query MyPosts {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          },
          excerpt,
          timeToRead,
          fields {
            slug
          }
        }
      }
    }
  }
`

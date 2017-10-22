import React, {Component} from "react"
import styled from 'styled-components'
import Link from 'gatsby-link'
import {Row, Column} from '../components/grid'
import CenteredLayout from '../components/centered-layout'

const Post = styled.article`
  display: grid;
  grid-template-columns: 150px auto;
  grid-gap: 0.5rem;
`

const PostDate = styled.div`
  color: #999;
  font-size: 1.6rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 2.0 !important;
`

const PostTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 700 !important;
  line-height: 1.5 !important;
`

const Excerpt = styled.div`
  grid-column-start: 2;
`

export default class Journal extends Component {
  render () {
    const posts = this.props.data.allMarkdownRemark.edges

    return (
      <CenteredLayout name="journal"
                      title={`Journal - ${this.props.data.site.siteMetadata.title}`}
                      desc="Technology, marketing, and productivity"
                      type="website"
                      image="https://cldup.com/go95bqT7sK.jpg">
        <Row>
          <div>
            <h1>Journal</h1>
            <p>Technology, marketing, and productivity.</p>
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
      <Post key={index}>
        <PostDate>
          {post.frontmatter.date}
        </PostDate>
        <PostTitle>
          <Link to={post.fields.slug}>
            {post.frontmatter.title}
          </Link>
        </PostTitle>
        <Excerpt>
          <p>{post.excerpt}</p>
        </Excerpt>
      </Post> 
    ) 
  }
}

export const query = graphql`
  query JournalQuery {
    site {
      siteMetadata {
        title,
        description
      }
    }

    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMM DD, YYYY")
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

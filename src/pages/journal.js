import React, {Component} from "react"
import styled from 'styled-components'
import Link from 'gatsby-link'
import {Row, Column} from '../components/grid'
import {CenteredLayout} from '../components/centered-layout'

const Post = styled.article`
  display: grid;
  grid-template-columns: 150px auto;
  grid-gap: 0.5rem;
`

const PostDate = styled.div`
  color: #999;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 32px;
`

const PostTitle = styled.h4`
  font-weight: 700;
  line-height: 32px;
`

const Excerpt = styled.div`
  grid-column-start: 2;
`

export default class Journal extends Component {
  render () {
    const posts = this.props.data.allMarkdownRemark.edges

    return (
      <CenteredLayout>
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
    console.log(post.frontmatter.date);
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
  query MyPosts {
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

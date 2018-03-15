import React, {Component} from "react"
import styled from 'styled-components'
import Link from 'gatsby-link'
import {Row, Column} from '../components/grid'
import CenteredLayout from '../components/centered-layout'

const Subtitle = styled.h2`
  margin-top: 1rem !important;
  margin-bottom: 2rem;
  font-family: 'Muli', 'Source Sans Pro', sans-serif;
  font-size: 2.2rem;
  font-weight: 200;
  line-height: normal;

  & strong {
    font-weight: 500;
  }
  @media (max-width: 700px) {
    text-align: center;
  }
`

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
            <Subtitle>Technology, marketing, and productivity.</Subtitle>
          </div>
        </Row>
        <Column>
          <p>Coming Soon...</p>
          {/* posts.map((post, i) => this.renderArticle(post.node, i)) */}
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

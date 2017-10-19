import React, {Component} from "react"
import {Row, Column} from '../components/grid'
import CenteredLayout from '../components/centered-layout'

export default class Photography extends Component {
  render () {
    return (
      <CenteredLayout name="photography"
                      title={`Photography - ${this.props.data.site.siteMetadata.title}`}
                      desc="A few of my favourite photographs"
                      type="website"
                      image="https://cldup.com/go95bqT7sK.jpg">
        <Row>
        <div>
          <h1>Photography</h1>
          <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
        </div>
        </Row>
      </CenteredLayout>
    )
  }
}

export const query = graphql`
  query PhotographyQuery {
    site {
      siteMetadata {
        title,
        description
      }
    }
  }
`

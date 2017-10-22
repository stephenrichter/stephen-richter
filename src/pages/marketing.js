import React, {Component} from "react"
import {Row, Column} from '../components/grid'
import CenteredLayout from '../components/centered-layout'

export default class Marketing extends Component {
  render () {
    return (
      <CenteredLayout name="marketing"
                      title={`Marketing - ${this.props.data.site.siteMetadata.title}`}
                      desc="I enjoy marketing"
                      type="website"
                      image="https://cldup.com/go95bqT7sK.jpg">
        <Row>
        <div>
          <h1>Marketing</h1>
          <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
        </div>
        </Row>
      </CenteredLayout>
    )
  }
}

export const query = graphql`
  query SoftwareQuery {
    site {
      siteMetadata {
        title,
        description
      }
    }
  }
`

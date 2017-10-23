import React, {Component} from "react"
import {Row, Column} from '../components/grid'
import CenteredLayout from '../components/centered-layout'

export default class Projects extends Component {
  render () {
    return (
      <CenteredLayout name="projects"
                      title={`Projects - ${this.props.data.site.siteMetadata.title}`}
                      desc="Here are some things I'm working on."
                      type="website"
                      image="https://cldup.com/go95bqT7sK.jpg">
        <Row>
        <div>
          <h1>Projects</h1>
          <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
        </div>
        </Row>
      </CenteredLayout>
    )
  }
}

export const query = graphql`
  query ProjectsQuery {
    site {
      siteMetadata {
        title,
        description
      }
    }
  }
`

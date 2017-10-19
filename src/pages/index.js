import React, {Component} from 'react'
import styled from 'styled-components'
import {Row, Column} from '../components/grid'
import CenteredLayout from '../components/centered-layout'

import Intro from '../components/intro'
import Photo from '../assets/stephen-richter.jpg'

const Avatar = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
`

export default class Homepage extends Component {
  render() {
    return (
      <CenteredLayout name="index"
                      title={this.props.data.site.siteMetadata.title}
                      desc={this.props.data.site.siteMetadata.description}
                      type="website"
                      image="https://cldup.com/go95bqT7sK.jpg">
        <Row>
          {this.renderIntro()}
          {this.renderPhoto()}
        </Row>
      </CenteredLayout>
    )
  }

  renderIntro () {
    return (
      <Column colspan="3">
        <h1 className="title">
          I build software.
        </h1>
        <h2>
          My name is <strong>Stephen Richter</strong>. I recently founded <a href="http://getkozmos.com">Kozmos</a>, a better bookmarking service for everyone.
        </h2>
        <Intro />
        <a href="mailto:stephenrichter15@gmail.com">Let's work together</a>
      </Column>
    )
  }

  renderPhoto () {
    return (
      <Column colspan="1" last>
        <Avatar src={Photo} alt="stephen richter profile" />
      </Column>
    )
  }
}

export const query = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title,
        description
      }
    }
  }
`


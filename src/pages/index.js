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

const Title = styled.h1`
  margin-bottom: 0.5rem;
  font-size: 4.2rem !important;
  font-weight: 700;
  letter-spacing: 2px;
`

const Subtitle = styled.h2`
  margin-top: 0 !important;
  margin-bottom: 2rem;
  font: 300 26px Open Sans,sans-serif;
  color: #000;
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
        <Title>
          I build software.
        </Title>
        <Subtitle>
          My name is <strong>Stephen Richter</strong>. I recently founded <a href="http://getkozmos.com">Kozmos</a>, a better bookmarking service for everyone.
        </Subtitle>
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


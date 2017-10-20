import React, {Component} from 'react'
import {Helmet} from 'react-helmet'
import styled from 'styled-components'

import favicon from '../assets/stephen-richter-favicon.jpg'

const Container = styled.div`
  h1 {
    font-family: 'ovo', 'Times New Roman', serif;
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  h2 {
    font-family: 'muli', 'Open Sans', sans-serif;
    font-size: 26px;
    font-weight: 300;
    margin-bottom: 0.5rem;
  }
  p {
    margin-bottom: 1.25rem;
    color: #666;
  }
`

const Center = styled.div`
  width: 80%;
  height: calc(100% - 120px);
  margin: 120px auto 0;
`

export default class CenteredLayout extends Component {
  render () {
    return (
      <Container>
        <Helmet title={this.props.title}>
          <meta name="description" content={this.props.desc} />
          <meta property="og:type" content={this.props.type} />
          <meta property="og:title" content={this.props.title} />
          <meta property="og:url" content={this.props.url || "http://stephenrichter.ca"} />
          <meta property="og:description" content={this.props.desc} />
          <meta property="og:image" content={this.props.image} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@stephen_richter" />
          <meta name="twitter:creator" content="@stephen_richter" />
          <meta name="twitter:title" content={this.props.title} />
          <meta name="twitter:description" content={this.props.desc} />
          <meta name="twitter:image" content={this.props.image} />
          <link rel="canonical" href={this.props.url || "http://stephenrichter.ca"} />
          <link rel="icon" type="image/png" href={favicon} />
        </Helmet>
        <Center>
          {this.props.children}
        </Center>
      </Container>
    )
  }
}

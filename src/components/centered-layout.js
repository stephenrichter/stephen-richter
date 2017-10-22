import React, {Component} from 'react'
import {Helmet} from 'react-helmet'
import styled from 'styled-components'

import favicon from '../assets/stephen-richter-favicon.jpg'

const Container = styled.div`
  h1 {
    font-family: Ovo, 'Times New Roman', serif;
    font-size: 4.8rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1.6rem;
    line-height: 1.75;
    font-weight: 300;
    margin-bottom: 1.25rem;
    color: #666;
  }
  a {
    color: #111;
    font-weight: 400;
    line-height: 1.75;
    text-decoration: none;
    border-bottom: 3px solid #E73840;
    transition: all 0.5s ease;

    &:hover {
      border-bottom: 3px solid transparent;
    }
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

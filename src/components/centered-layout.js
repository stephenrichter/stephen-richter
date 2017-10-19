import React, {Component} from 'react'
import {Helmet} from 'react-helmet'
import styled from 'styled-components'

const Center = styled.div`
  width: 80%;
  height: calc(100% - 120px);
  margin: 120px auto 0;
`

export default class CenteredLayout extends Component {
  render () {
    return (
      <div>
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
          <link rel="icon" type="image/png" href="https://c1.staticflickr.com/5/4353/37319896181_52a796bcc7_s.jpg" />
        </Helmet>
        <Center>
          {this.props.children}
        </Center>
      </div>
    )
  }
}

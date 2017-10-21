import React, {Component} from "react"
import {Row, Column} from '../components/grid'
import CenteredLayout from '../components/centered-layout'
import MasonryGrid from '../components/masonry-grid'

export default class Photography extends Component {
  render () {
    return (
      <MasonryGrid />
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

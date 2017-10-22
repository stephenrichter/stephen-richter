import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 6rem;
`

export default class Intro extends Component {
  render() {
    return (
      <Container>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo blandit tempor. Proin auctor aliquam lacus a finibus. Praesent eros nulla, consectetur quis velit vel, fringilla tristique velit.</p>
        <p>Ut semper quam nec sapien facilisis dictum. Ut nec cursus nisi, non ornare elit. Pellentesque pulvinar nulla eu erat lacinia venenatis. Aliquam eget euismod est. Nulla at nulla elementum, iaculis justo maximus, imperdiet lorem. Duis efficitur convallis mi, non commodo magna dignissim eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
      </Container>
    )
  }
}

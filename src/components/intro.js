import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 4rem;

  @media (min-width: 1500px) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 2rem;
  }
`

const Strikeout = styled.span`
  text-decoration: line-through;
`

export default class Intro extends Component {
  render() {
    return (
      <Container>
        <p>I'm Stephen Richter, a full stack web developer and marketer from Victoria, Canada.
          I love to help businesses achieve success through design-thinking and digital business strategy.</p>
        
        <p>I’m super passionate about design, development, and business.
          From a technical standpoint, I spend most of my time working with JavaScript, CSS3, and HTML5.</p>
          
        <p>I graduated from Camosun College where I obtained my Bachelor of Business Admin in marketing and communications.
          My talent is digital business strategy (I really know how technology and business can work best together).</p>
        
        <p>When not creating websites or apps, I love to spend my time with my beautiful <Strikeout>girlfriend</Strikeout> fiance Caleigh.
          I fancy myself as a decent photographer, and each year I try to take my camera on a trip somewhere new.</p>
          
        <p>If you want to learn more or discuss how you're business could benefit from a digital strategy...</p>
      </Container>
    )
  }
}

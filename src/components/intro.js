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
          From a technical standpoint, I spend most of my time working in HTML5/CSS3, JavaScript, and Adobe Creative Suite.</p>
          
        <p>I graduated from Camosun College where I obtained my Bachelor of Business Admin in marketing and communications.
          My talent is in digital business strategy (I really know how technology and business work best together).</p>
        
        <p>When not designing or coding, I love to spend my time with my beautiful <Strikeout>girlfriend</Strikeout> fiancée Caleigh.
          I fancy myself as a decent photographer, and each year I try to take my camera on a trip somewhere new.</p>
      </Container>
    )
  }
}

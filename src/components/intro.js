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
          I love to help businesses achieve success through design-thinking and digital business strategy.
          I've been creating on the web for around 9 years and have become pretty good at it.
          I hang out on Twitter and would love to meet you!</p>
        
        <p>I’m super passionate about design, development, and business.
          I’ve been very fortunate to be able to do all three as a career.
          From a technical standpoint, I spend most of my time working with JavaScript, CSS3, HTML5. 
          New and open source web technologies make me super excited and I can’t wait to see what is to
           come of the web in the next few years.</p>
        
        <p>I learn from the community and love to share what I have learned back.
          I regularly have speaking events on everything from Front End Dev to ServerSide JavaScript.
          I’m a lead instructor at HackerYou where we teach full time, part time and single day classes.
          I’m also part of the amazing Ladies Learning Code where I instruct the WordPress courses.</p>
          
        <p>I graduated from Camosun College where I obtained my Bachelor of Business Admin in marketing and communications.
          Its a fancy way of saying that I really know how technology and business should work together.</p>
        
        <p>When not creating websites or apps, I love to spend my time with my beautiful <Strikeout>girlfriend</Strikeout> fiance Caleigh.
          I like to fancy myself as a decent photographer, and each year I try to take my camera on a trip somewhere new.</p>
          
        <p>If you want to learn more or discuss how you're business could benefit from a digital strategy...</p>
      </Container>
    )
  }
}

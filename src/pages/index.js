import React, {Component} from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import {Row, Column} from '../components/grid'
import CenteredLayout from '../components/centered-layout'

import Intro from '../components/intro'
import Photo from '../assets/stephen-richter.jpg'

const Avatar = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;

  @media (max-width: 700px) {
    display: none;
  }
`

const Title = styled.h1`
  margin-bottom: 0.5rem;
  font-size: 6.4rem !important;
  font-weight: 700;
  letter-spacing: 1px;

  @media (max-width: 700px) {
    text-align: center;
  }
`

const Subtitle = styled.h2`
  margin-top: 0 !important;
  margin-bottom: 2rem;
  font-family: 'Muli', 'Source Sans Pro', sans-serif;
  font-size: 2.8rem;
  font-weight: 200;
  line-height: normal;

  & strong {
    font-weight: 500;
  }
  @media (max-width: 700px) {
    text-align: center;
  }
`

const titles = [
  'I build software',
  'I design things',
  'I develop brands'
]

export default class Homepage extends Component {
  constructor(props){
    super(props);
    this.state = { title: titles[0] };
  }

  componentDidMount() {

    let i = 0;

    this.titleCounter = setInterval(() => {

      // reset if it reaches the end of the titles, otherwise increment
      if(i >= (titles.length-1)) {
        i = 0;
      } else {
        i++;
      }

      // set the new state
      this.setState({ 
        title: titles[i]
      });      
    }, 2500);
  }

  componentWillUnmount () {
    clearInterval(this.titleCounter);
  }

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
      <Column colspan="8">
        <Title>{this.state.title}</Title>
        <Subtitle>
          My name is <strong>Stephen Richter</strong>, and I'm obsessed with <Link to="/journal">digital business strategy</Link> and <Link to="/marketing">marketing</Link>.
        </Subtitle>
        <Intro />
        <p><a href="mailto:stephenrichter15@gmail.com">Let's work together</a></p>
      </Column>
    )
  }

  renderPhoto () {
    return (
      <Column colspan="4" last>
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

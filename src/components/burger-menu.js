import React, { Component } from 'react'
import Link from 'gatsby-link'
import SocialIcons from './social-icons'
import links from './menu-links.json'
import styled from 'styled-components'

import Photo from '../assets/stephen-richter.jpg'

const Menu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 3px 20px 5px 20px;
  width: calc(100% - 40px);
  height: 40px;
  background: #fff;
  overflow: hidden;
  z-index: 9999;
  display: none;

  @media (max-width: 900px) {
    display: block;
  }

  &.active {
    height: calc(100vh)
  }
`

const Header = styled.div`
  margin-top: 1rem;
  
  & h1 {
    font: 300 1.6rem "Muli", sans-serif;
    line-height: 1.5;
    padding-left: 38px;
    margin-bottom: 50px;
  }
  & a {
    color: #222;
    text-decoration: none;
  }
`

const Avatar = styled.img`
  width: 24px;
  height: 24px;
  height: auto;
  border-radius: 50%;
  position: absolute;
  border-radius: 50%;
  width: auto;
  height: 25px;
  margin: -1px 0 0 -33px;
`

const Hamburger = styled.div`
  position: absolute;
  top: 18px;
  right: 20px;
  display: block;
  width: 23px;
  height: 20px;
  background: #fff;
  cursor: pointer;

  &.active {
    &:before {
      transform: rotate(-45deg);
      margin: -6px 0 0 -3px;
    }
    &:after {
      border-bottom: 0;
      transform: rotate(45deg);
      margin: 7px 0 0 -5px;
      height: 6px;
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 12px;
    left: 0px;
    width: 100%;
    border-top: 2px solid #000;
  
  
    -webkit-transition: transform 0.1s ease-in, margin 0.1s ease-in;
    -moz-transition: transform 0.1s ease-in, margin 0.1s ease-in;
    -o-transition: transform 0.1s ease-in, margin 0.1s ease-in;
    transition: transform 0.1s ease-in, margin 0.1s ease-in;
  }

  &:after {
    content: "";
    position: absolute;
    top: -2px;
    left: 0px;
    width: 100%;
    height: 5px;
    border-bottom: 2px solid #000;
    border-top: 2px solid #000;
  
    -webkit-transition: transform 0.1s ease-in, margin 0.1s ease-in, border-bottom 0.2s ease-in;
    -moz-transition: transform 0.1s ease-in, margin 0.1s ease-in, border-bottom 0.2s ease-in;
    -o-transition: transform 0.1s ease-in, margin 0.1s ease-in, border-bottom 0.2s ease-in;
    transition: transform 0.1s ease-in, margin 0.1s ease-in, border-bottom 0.2s ease-in;
  }
`

const BurgerContent = styled.div`
  display: none;
  margin: 0 auto;
  height: 0;

  &.active {
    display: block;
    height: 100%;
  }

  & h2 {
    font: 1.4rem "Ovo", sans-serif;
    text-transform: uppercase;
    color: #666;
    padding-left: 3rem;
  }
`

const Button = styled.div`
  display: block;
  border: 0;
  margin: 10px 0 10px 30px;
  font: 1.6rem "Muli", sans-serif;
  color: #222;
  text-decoration: none;

  & a {
    color: #222;
    text-decoration: none;
  }
`

const emojiStyle = {
  width: 20,
  height: 20
}

export default class BurgerMenu extends Component {
  constructor (props) {
    super(props)
    this.state = {open: false}
  }

  toggle() {
    this.setState({
      open: !(this.state && this.state.open)
    })
  }

  render() {
    const classes = ['burger-menu']
    if (this.state && this.state.open) classes.push('open')

    return (
      <Menu className={this.state.open ? 'active' : ''}>
        <Hamburger onClick={() => this.toggle()} className={this.state.open ? 'active' : ''}></Hamburger>
          <Header>
            <h1>
              <Avatar src={Photo} alt="stephen richter profile" />
              <a href="/">Stephen Richter</a>
            </h1>
          </Header>

        <BurgerContent className={this.state.open ? 'active' : ''}>
          <h2>Menu</h2>
          {links.map(l => this.renderLink(l))}

          <SocialIcons />
        </BurgerContent>
      </Menu>
    )
  }

  renderLink(l) {
    if (l.className === 'footer-link') return

    return (
      <Button>
        <Link to={l.to} onClick={() => this.toggle()}>{l.title}</Link>
      </Button>
    )
  }
}
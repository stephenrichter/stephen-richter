import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import links from './menu-links.json'
import logo from '../assets/richter-logo.svg'

const SideMenu = styled.header`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  overflow: hidden;
  padding: 2rem;

  @media (min-width: 700px) {
    flex-direction: column;
    border-right: 1px solid #eaeaea;
    height: 100vh;
  }
`

const MenuLink = styled.div`
  text-decoration: none;
  color: #42ab79;
  font: 600 12px 'open sans', helvetica, arial;
  margin-right: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
  position: relative;
  padding: 0.5rem;

  &:hover {
    color: #111;
  }
  &:hover .emoji {
    opacity: 1
  }
`

const Emoji = styled.span`
  position: absolute;
  left: calc(100% + 8px);
  opacity: 0;
  -webkit-transition: all 0.3s ease-in;
  -moz-transition: all 0.3s ease-in;
  -o-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
  font-size: 18px;
`

export default class Menu extends Component {
  render () {
    return (
      <SideMenu>
        {this.renderLogo()}
        {links.map((l, i) => this.renderLink(l, i))}
      </SideMenu>
    )
  }

  renderLink (l, i) {
    return (
      <MenuLink key={i}>
        <Link to={l.to} style={{ 'all': 'inherit' }}>
          {l.title}
          <Emoji className="emoji">{l.emoji}</Emoji>
        </Link>
      </MenuLink>
    )
  }

  renderLogo () {
    return (
      <a className="logo" href="/">
        <img src={logo} alt="Stephen Richter Logo" />
      </a>
    )
  }
}

import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import links from './menu-links.json'
import logo from '../assets/richter-logo.svg'
import SocialIcons from './social-icons'

const SideMenu = styled.nav`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  overflow: hidden;
  padding: 2rem;
  flex-direction: column;
  border-right: 1px solid #eaeaea;
  height: calc(100vh - 4rem);

  @media (max-width: 900px) {
    display: none;
  }
`

const MenuLink = styled.div`
  text-decoration: none;
  color: #42ab79;
  font: 400 12px/32px 'muli', 'open sans', helvetica, arial;
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

const Logo = styled.img`
  margin: 24px 0;
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

const Social = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`
const SocialLink = styled.a`
  border-radius: 50%;
  display: -moz-inline-stack;
  display: inline-block;
  vertical-align: middle;
  zoom: 1;
  margin: 0 8px 15px;
  transition: .3s;
  text-align: center;
  color: #fff;
  opacity: .7;
  width: 28px;
  height: 28px;
  line-height: 26px;
`
const GithubLink = SocialLink.extend`
  background: #afb6ca;
  border: 1px solid #afb6ca;
`
const TwitterLink = SocialLink.extend`
  background: #1DA1F2;
  border: 1px solid #1DA1F2;
`

export default class Menu extends Component {
  render () {
    return (
      <SideMenu>
        {this.renderLogo()}
        {links.map((l, i) => this.renderLink(l, i))}
        <SocialIcons />
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
        <Logo src={logo} alt="Stephen Richter Logo" />
      </a>
    )
  }
}

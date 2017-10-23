import React, { Component }  from 'react'
import styled, { injectGlobal } from 'styled-components'

import resetCSS from './reset'
import Menu from '../components/menu'
import BurgerMenu from '../components/burger-menu'

injectGlobal`
  ${resetCSS}
  html {
    font: 10px 'Muli', sans-serif;
  }
  p {
    line-height: 1.75
  }
`

const Wrapper = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100vh;

  @media (min-width: 700px) {
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
  }
`

const Content = styled.section`
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  overflow: auto;
`

const Container = ({ children, data }) => {
  return (
    <Wrapper>
      <BurgerMenu />
      <Menu />
      <Content>
        {children()}
      </Content>
    </Wrapper>
  )
}

export const query = graphql`
query LayoutQuery {
  site {
    siteMetadata {
      title
    }
  }
}
`

export default Container

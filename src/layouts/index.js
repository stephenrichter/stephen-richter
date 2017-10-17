import React, { Component }  from 'react'
import styled from 'styled-components'
import './reset.css'
import './base.css'

import Menu from '../components/menu'

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

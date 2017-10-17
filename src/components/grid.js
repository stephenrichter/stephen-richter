import styled from 'styled-components'

export const Row = styled.div`
  display: inline-block;
  width: 100%;

  @media (min-width: 700px) {
    display: flex;
  }
`

export const Column = styled.div`
  display: inline-block;
  margin-bottom: 2rem;
  margin-right: 0;
  width: 100%;

  @media (min-width: 700px) {
    margin-right: ${(props) => props.last ? '0' : '2rem'};
    flex: ${(props) => props.colspan};
  }
`
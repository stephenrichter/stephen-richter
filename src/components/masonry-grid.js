import React, {Component} from 'react'
import styled from 'styled-components'
import debounce from 'debounce-fn'

const Masonry = styled.div`
  display: flex;
  flex-flow: column wrap;
  max-height: ${props => props.height ? props.height : '200vh'};
  margin-left: -8px; /* Adjustment for the gutter */
`

const Brick = styled.div`
  margin: 0 8px 8px 0; /* Some gutter */
  width: ${props => props.width ? props.width : '33%'};
`

const MasonryImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  filter: brightness(50%);
`

export default class MasonryGrid extends Component {
  constructor(props) {
    super(props)
    this.onResize = debounce(this.onResize.bind(this), 500)
  }

  componentWillMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.onResize)
    }

    this.setState({
      selected: null,
      columns: this.findColumnCount(),
      gridHeight: this.calculateGridHeight()
    })
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize)
    }
  }

  onResize () {
    this.setState({
      selected: null,
      columns: this.findColumnCount(),
      gridHeight: this.calculateGridHeight()
    })
  }

  findColumnCount() {
    if (typeof window === 'undefined') return 3

    const width = window.innerWidth

    if (width < 500) return 1
    if (width < 900) return 2
    if (width < 1700) return 3
    return 4
  }

  calculateGridHeight() {
    return '200vh';
  }

  render () {
    return (
      <Masonry height={this.state.gridHeight}>
        {jsonPhotos.map((img, index) => this.renderBricks(img, index))}
      </Masonry>
    )
  }

  renderBricks (img, i) {
    const w = (100 / this.state.columns) + '%'

    return (
      <Brick key={i} width={w}>
        <MasonryImage src={img} />
      </Brick>
    )
  }
}

const jsonPhotos = [
  'https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/13738188_10153999400707655_1039559919179010143_o.jpg?oh=a8eaad9e86292a873a7187eec4f3affc&oe=5A837DE9',
  'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/19224905_10154733362547379_8332822341831943532_n.jpg?oh=c73f6031b69744d0db20264862422992&oe=5A7A4C83',
  'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/13533362_10153937254302655_9002080066554220272_n.jpg?oh=75c5de29bc3b8bcca8c4347f45b95504&oe=5A8604DA',
  'https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/1492311_10151957180447655_1652033405_o.jpg?oh=4375b2d765ccbafd933ce36263f6f683&oe=5A84CD24'
]

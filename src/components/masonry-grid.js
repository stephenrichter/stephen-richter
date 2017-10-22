import React, {Component} from 'react'
import styled from 'styled-components'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const MasonryImage = styled.img`
  filter: brightness(80%);
  -webkit-filter: brightness(80%);
  transition: all 1s ease;
  -webkit-transition: all 1s ease;

  &:hover {
    filter: brightness(120%);
    -webkit-filter: brightness(120%);
  }
`

export default class MasonryGrid extends Component {
  
  render() {
    return (
      <ResponsiveMasonry columnsCountBreakPoints={{300: 1, 700: 2, 900: 3}}>
        <Masonry>
          {jsonPhotos.map((image, i) =>
            <MasonryImage key={i} src={image} style={{width: "100%", display: "block"}} />
          )}
        </Masonry>
    	</ResponsiveMasonry>
    )
  }
}

const jsonPhotos = [
  'https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/13738188_10153999400707655_1039559919179010143_o.jpg?oh=a8eaad9e86292a873a7187eec4f3affc&oe=5A837DE9',
  'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/19224905_10154733362547379_8332822341831943532_n.jpg?oh=c73f6031b69744d0db20264862422992&oe=5A7A4C83',
  'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/13533362_10153937254302655_9002080066554220272_n.jpg?oh=75c5de29bc3b8bcca8c4347f45b95504&oe=5A8604DA',
  'https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/1492311_10151957180447655_1652033405_o.jpg?oh=4375b2d765ccbafd933ce36263f6f683&oe=5A84CD24'
]

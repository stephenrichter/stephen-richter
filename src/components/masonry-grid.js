import React, {Component} from 'react'
import styled from 'styled-components'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const MasonryImage = styled.img`
  filter: brightness(100%);
  -webkit-filter: brightness(100%);
  transition: all 1s ease;
  -webkit-transition: all 1s ease;

  &:hover {
    filter: brightness(125%);
    -webkit-filter: brightness(125%);
  }
`

export default class MasonryGrid extends Component {
  
  render() {
    return (
      <ResponsiveMasonry columnsCountBreakPoints={{300: 1, 700: 2, 900: 3}}>
        <Masonry gutter='0.3rem'>
          {jsonPhotos.map((image, i) =>
            <MasonryImage key={i} src={image} style={{width: "100%", display: "block"}} />
          )}
        </Masonry>
    	</ResponsiveMasonry>
    )
  }
}

const jsonPhotos = [
  'https://scontent-sea1-1.cdninstagram.com/t51.2885-15/e35/22637728_1966032170324643_6590881646495399936_n.jpg',
  'https://scontent-sea1-1.cdninstagram.com/t51.2885-15/e35/17932459_2465875876973204_7808470197345452032_n.jpg',
  'https://scontent-sea1-1.cdninstagram.com/t51.2885-15/e35/16583388_1646063452356587_3226091077240881152_n.jpg',
  'https://scontent-sea1-1.cdninstagram.com/t51.2885-15/e35/16230894_2214899622067580_3530281229741981696_n.jpg',
  'https://scontent-sea1-1.cdninstagram.com/t51.2885-15/e35/15876014_1725038054478814_7399568901081661440_n.jpg',
  'https://scontent-sea1-1.cdninstagram.com/t51.2885-15/e35/15802996_1705614032994442_7546892816274685952_n.jpg'
]

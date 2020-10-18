import React from 'react'
import { ImageBackground } from 'react-native'

import { Container, Text } from './styles'

const ItemListCategory = ({ url_img, category }) => {
  return (
    <Container>
      <ImageBackground
        source={{ uri: url_img.trim() }}
        style={{ width: '100%', height: '100%' }}
      >
        <Text>{category}</Text>
      </ImageBackground>
    </Container>
  )
}

export default ItemListCategory

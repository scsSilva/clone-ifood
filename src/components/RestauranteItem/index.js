import React from 'react'
import { Text } from 'react-native'

import { AntDesign } from '@expo/vector-icons'

import { RestauranteView, RestauranteFoto, RestauranteInfo } from './styles'

const RestauranteItem = ({
  foto,
  nome,
  key,
  nota,
  categoria,
  distancia,
  valorFrete,
  tempoEntrega
}) => {
  return (
    <RestauranteView key={key}>
      <RestauranteFoto
        source={{
          uri: foto.trim(),
          width: 50,
          height: 50,
          resizeMode: 'cover'
        }}
      />
      <RestauranteInfo>
        <Text>{nome}</Text>
        <Text>
          <AntDesign name="star" size={12} color="#f9a825" />
          {nota} - {categoria}
        </Text>
        <Text>
          {tempoEntrega} * R${valorFrete}
        </Text>
        <Text>{}</Text>
      </RestauranteInfo>
    </RestauranteView>
  )
}

export default RestauranteItem

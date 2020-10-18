import React from 'react'

import { SafeAreaView, Image, TextPrincipal, TextSecundario } from './styles'

import banner from '../../assets/img/not_found.png'

const Pedidos = () => {
  return (
    <SafeAreaView>
      <Image source={banner} />
      <TextPrincipal>Você ainda não pediu</TextPrincipal>
      <TextSecundario>
        Selecione início pra conhecer as melhores opções perto de você
      </TextSecundario>
    </SafeAreaView>
  )
}

export default Pedidos

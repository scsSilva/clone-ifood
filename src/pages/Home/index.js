import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { Text } from 'react-native'

import { SafeAreaView, Image, View, ButtonContainer } from './styles'

import banner from '../../assets/img/banner.png'

import Button from '../../components/Button'

const Home = () => {
  const navigation = useNavigation()

  return (
    <>
      <StatusBar style="dark" />

      <SafeAreaView>
        <View>
          <Text>Pedir comida nunca foi tão fácil</Text>
          <Image source={banner} />
          <Text>Permitir localização</Text>
          <Text>Para descobrir restaurantes que entregam em sua região</Text>
        </View>

        <ButtonContainer>
          <Button
            text="PULAR"
            onPress={() => {
              navigation.navigate('Main')
            }}
          />
          <Button theme="primary" text="ENTRAR" onPress={() => {}} />
        </ButtonContainer>
      </SafeAreaView>
    </>
  )
}

export default Home

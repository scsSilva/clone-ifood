import React from 'react'
import Feather from '@expo/vector-icons/Feather'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Principal from '../Principal'
import Pesquisar from '../Pesquisar'
import Pedidos from '../Pedidos'

const BottomTabs = createBottomTabNavigator()

const Main = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === 'Principal') {
            iconName = 'home'
          } else if (route.name === 'Pesquisar') {
            iconName = 'search'
          } else if (route.name === 'Pedidos') {
            iconName = 'list'
          }

          return <Feather name={iconName} size={size} color={color} />
        }
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray'
      }}
    >
      <BottomTabs.Screen name="Principal" component={Principal} />
      <BottomTabs.Screen name="Pesquisar" component={Pesquisar} />
      <BottomTabs.Screen name="Pedidos" component={Pedidos} />
    </BottomTabs.Navigator>
  )
}

export default Main

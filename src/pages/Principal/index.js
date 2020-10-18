import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Alert, Text } from 'react-native'

import {
  SafeAreaView,
  ViewActivity,
  CategoriaView,
  BannerView,
  ViewPrincipal,
  ViewRestaurantes,
  TítuloRestaurantes,
  ButtonTipoSelect,
  TextTipoSelect,
  SelectTipo
} from './styles'

import BannerItem from '../../components/BannerItem'
import RestauranteItem from '../../components/RestauranteItem'
import CategoriaItem from '../../components/CategoriaItem'

const Principal = () => {
  const [banners, setBanners] = useState([])
  const [categories, setCategories] = useState([])
  const [restaurant, setRestaurants] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [tipo, setTipo] = useState('Entrega')

  useEffect(() => {
    async function searchData() {
      try {
        const response = await fetch(
          'http://my-json-server.typicode.com/pablohdev/app-ifood-clone/db'
        )

        const data = await response.json()

        setIsLoaded(true)

        setBanners(data.banner_principal)
        setCategories(data.categorias)
        setRestaurants(data.restaurantes)
      } catch (err) {
        Alert.alert(`Erro ao consultar ${err}`)
      }
    }

    searchData()
  }, [])

  const ViewHome = (props) => {
    return (
      <ViewPrincipal>
        <SelectTipo>
          <ButtonTipoSelect
            onPress={() => {
              setTipo('Entrega')
            }}
          >
            <TextTipoSelect selected={tipo === 'Entrega'}>
              Entrega
            </TextTipoSelect>
          </ButtonTipoSelect>
          <ButtonTipoSelect
            onPress={() => {
              setTipo('Retirada')
            }}
          >
            <TextTipoSelect selected={tipo === 'Retirada'}>
              Retirada
            </TextTipoSelect>
          </ButtonTipoSelect>
        </SelectTipo>
        <CategoriaView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((categoria) => (
            <CategoriaItem
              key={categoria.id}
              foto={categoria.img_url}
              texto={categoria.nome}
            />
          ))}
        </CategoriaView>
        <BannerView horizontal showsHorizontalScrollIndicator={false}>
          {banners.map((banner) => (
            <BannerItem key={banner.id} foto={banner.banner_img_url} />
          ))}
        </BannerView>
        <TítuloRestaurantes>Restaurantes</TítuloRestaurantes>
        <ViewRestaurantes>
          {restaurant.map((item) => (
            <RestauranteItem
              key={item.id}
              foto={item.url_img}
              nome={item.nome}
              nota={item.nota}
              categoria={item.categoria}
              distancia={item.distancia}
              valorFrete={item.valor_frete}
              tempoEntrega={item.tempo_entrega}
            />
          ))}
        </ViewRestaurantes>
      </ViewPrincipal>
    )
  }

  return (
    <SafeAreaView>
      {isLoaded ? (
        <ViewHome />
      ) : (
        <ViewActivity>
          <ActivityIndicator color="#f0001a" size="large" />
        </ViewActivity>
      )}
    </SafeAreaView>
  )
}

export default Principal

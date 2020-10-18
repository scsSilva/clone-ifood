import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import Feather from '@expo/vector-icons/Feather'

import { SafeAreaView, SearchView, Content, ListCategory } from './styles'

import ItemListCategory from '../../components/ItemListCategory'

const Pesquisar = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function searchData() {
      try {
        const response = await fetch(
          'http://my-json-server.typicode.com/pablohdev/app-ifood-clone/db'
        )

        const data = await response.json()

        setCategories(data.categorias)
      } catch (err) {
        Alert.alert(`Erro ao consultar ${err}`)
      }
    }

    searchData()
  }, [])

  return (
    <SafeAreaView>
      <Content>
        <SearchView>
          <Feather name="search" color="tomato" size={20} />
          <Text style={{ color: 'grey', marginLeft: 7, fontSize: 17 }}>
            Item ou loja
          </Text>
        </SearchView>

        <Text>Categorias</Text>
        <ListCategory>
          {categories.map((item) => (
            <ItemListCategory
              key={item.id}
              url_img={item.img_url}
              category={item.nome}
            />
          ))}
        </ListCategory>
      </Content>
    </SafeAreaView>
  )
}

export default Pesquisar

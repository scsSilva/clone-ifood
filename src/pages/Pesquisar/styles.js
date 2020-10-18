import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  padding-top: 40px;
  background-color: #ffffff;
`

export const Content = styled.ScrollView`
  width: ${Dimensions.get('window').width - 50}px;
`

export const SearchView = styled.View`
  height: 45px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #ecf0f1;
  padding: 0 15px;
  border-radius: 5px;
  margin-bottom: 60px;
`

export const ListCategory = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
`

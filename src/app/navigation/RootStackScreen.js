import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MainStackScreen from './MainStackScreen'

import CartaoCreate from '../components/CartaoCreate'
import CartaoEdit from '../components/CartaoEdit'
import FaturaCreate from '../components/FaturaCreate'
import FaturaEdit from '../components/FaturaEdit'

const RootStack = createStackNavigator()


export default function RootStackScreen() {

  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Main"
        component={MainStackScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="CartaoCreate"
        component={CartaoCreate}
        options={{ title: 'Novo cartão' }}
      />
      <RootStack.Screen
        name="CartaoEdit"
        component={CartaoEdit}
        options={{ title: 'Editar cartão' }}

      />
      <RootStack.Screen
        name="FaturaCreate"
        component={FaturaCreate}
        options={{ title: 'Nova fatura' }}

      />
      <RootStack.Screen
        name="FaturaEdit"
        component={FaturaEdit}
        options={{ title: 'Editar fatura' }}

      />
    </RootStack.Navigator>
  )
}
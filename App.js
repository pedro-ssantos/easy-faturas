import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';

import Login from './src/app/containers/Login'
import Register from './src/app/containers/Register'
import Dashboard from './src/app/containers/Dashboard'

import CartaoCreate from './src/app/components/CartaoCreate'
import CartaoEdit from './src/app/components/CartaoEdit'
import FaturaCreate from './src/app/components/FaturaCreate'
import FaturaEdit from './src/app/components/FaturaEdit'

const MainStack = createStackNavigator()
const RootStack = createStackNavigator()

function MainStackScreen() {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="dashboard" component={Dashboard} />
      <MainStack.Screen name="login" component={Login} />
      <MainStack.Screen name="register" component={Register} />
    </MainStack.Navigator>
  )
}

function RootStackScreen() {
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

export default function App() {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
}
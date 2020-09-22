import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../containers/Login'
import Register from '../containers/Register'
import Dashboard from '../containers/Dashboard'

const MainStack = createStackNavigator()

export default function MainStackScreen() {

  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="dashboard" component={Dashboard} />
      <MainStack.Screen name="login" component={Login} />
      <MainStack.Screen name="register" component={Register} />
    </MainStack.Navigator>
  )
}
import * as React from 'react';
import { Appbar, BottomNavigation, Card, Divider, Text, Title, Paragraph, } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { ScrollView, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from '../components/Home'
import FaturaList from '../components/FaturaList'
import CartaoList from '../components/CartaoList'

const Tab = createMaterialBottomTabNavigator();

export default function Dashboard({ navigation }) {

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title='Pedro' />
        <Appbar.Action icon="exit-to-app" onPress={() => { }} />
      </Appbar.Header>

      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#dadada"
        barStyle={{ backgroundColor: '#6202EE' }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: 'home'
          }}
        />
        <Tab.Screen
          name="Fatuas"
          component={FaturaList}
          options={{
            tabBarLabel: 'Faturas',
            tabBarIcon: 'mailbox-outline'
          }}
        />
        <Tab.Screen
          name="Cartoes"
          component={CartaoList}
          options={{
            tabBarLabel: 'Cartoes',
            tabBarIcon: 'credit-card-outline'
          }}
        />
      </Tab.Navigator>

    </>
  )
}
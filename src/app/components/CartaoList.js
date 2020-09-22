import React, { useContext } from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Appbar, BottomNavigation, Card, List, FAB, Text, Title, Paragraph, } from 'react-native-paper';

import AppState from '../contexts/StateContext'

const HomeRoute = () => <Text>Music</Text>;

const FaturaRoute = () => <Text>Albums</Text>;

const CartaoRoute = () => <Text>Recents</Text>;

export default function CartaoList({ navigation }) {

  const appState = useContext(AppState)

  const [index, setIndex] = React.useState(2);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'fatura', title: 'Fatura', icon: 'list-alt' },
    { key: 'cartao', title: 'Cartão', icon: 'credit-card-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    fatura: FaturaRoute,
    cartao: CartaoRoute,
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    fab: {
      position: 'absolute',
      margin: 16,
      bottom: 0,
    },
    ContainerFAB: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      height: 40,
      width: 40,
      margin: 8,
    },
  })

  return (
    <>
      <ScrollView style={[styles.container]}>
        <List.Section>
          {appState.cartoes.map((cartao) => (<TouchableOpacity onPress={() => navigation.navigate('CartaoEdit',
            {
              numero: cartao.numero,
              validade: cartao.validade,
              cv: cartao.cv,
              nome: cartao.nome
            })}>
            <List.Item
              left={props => <List.Icon {...props} icon="credit-card-outline" />}
              title={cartao.numero}
              key={cartao.numero}
            />
          </TouchableOpacity>))}
        </List.Section>
      </ScrollView>
      <View style={styles.ContainerFAB}>
        <FAB
          style={styles.fab}
          label="Adicionar Cartão"
          onPress={() => navigation.navigate('CartaoCreate')}
        />
      </View>
    </>
  )
}
import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Appbar, BottomNavigation, Card, List, FAB, Text, Title, Paragraph, } from 'react-native-paper';

const HomeRoute = () => <Text>Music</Text>;

const FaturaRoute = () => <Text>Albums</Text>;

const CartaoRoute = () => <Text>Recents</Text>;

export default function CartaoList({ navigation }) {

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
          <List.Item
            left={props => <List.Icon {...props} icon="credit-card-outline" />}
            title="Cartão 1"
          />
          <List.Item
            left={props => <List.Icon {...props} icon="credit-card-outline" />}
            title="Cartão 2"
          />
          <List.Item
            title="Cartão 3"
            left={props => <List.Icon {...props} icon="credit-card-outline" />}
          />
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
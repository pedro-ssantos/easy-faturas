import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Appbar, BottomNavigation, Card, Divider, FAB, Text, Title, Paragraph, } from 'react-native-paper';

const HomeRoute = () => <Text>Music</Text>;

const FaturaRoute = () => <Text>Albums</Text>;

const CartaoRoute = () => <Text>Recents</Text>;

export default function FaturaList({ navigation }) {

  const [index, setIndex] = React.useState(1);
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
    fab: {
      position: 'absolute',
      margin: 16,
      bottom: 0,
    },
    ContainerFAB: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  })

  return (
    <>
      <ScrollView >
        <Card>
          <Card.Title
            title="Fatura 1"
            subtitle="Venc: dd/mm"
            right={(props) => (<Card.Content>
              <Title>R$ 888.88</Title>
            </Card.Content>)}
          />
          <Card.Title
            title="Fatura 2"
            subtitle="Venc: dd/mm"
            right={(props) => (<Card.Content>
              <Title>R$ 888.88</Title>
            </Card.Content>)}
          />
          <Card.Title
            title="Fatura 3"
            subtitle="Venc: dd/mm"
            right={(props) => (<Card.Content>
              <Title>R$ 888.88</Title>
            </Card.Content>)}
          />
          <Card.Title
            title="Fatura 4"
            subtitle="Venc: dd/mm"
            right={(props) => (<Card.Content>
              <Title>R$ 888.88</Title>
            </Card.Content>)}
          />
          <Card.Title
            title="Fatura 5"
            subtitle="Venc: dd/mm"
            right={(props) => (<Card.Content>
              <Title>R$ 888.88</Title>
            </Card.Content>)}
          />
          <Card.Title
            title="Fatura 1"
            subtitle="Venc: dd/mm"
            right={(props) => (<Card.Content>
              <Title>R$ 888.88</Title>
            </Card.Content>)}
          />
          <Card.Title
            title="Fatura 2"
            subtitle="Venc: dd/mm"
            right={(props) => (<Card.Content>
              <Title>R$ 888.88</Title>
            </Card.Content>)}
          />
          <Card.Title
            title="Fatura 3"
            subtitle="Venc: dd/mm"
            right={(props) => (<Card.Content>
              <Title>R$ 888.88</Title>
            </Card.Content>)}
          />
          <Card.Title
            title="Fatura 4"
            subtitle="Venc: dd/mm"
            right={(props) => (<Card.Content>
              <Title>R$ 888.88</Title>
            </Card.Content>)}
          />
          <Card.Title
            title="Fatura 5"
            subtitle="Venc: dd/mm"
            right={(props) => (<Card.Content>
              <Title>R$ 888.88</Title>
            </Card.Content>)}
          />
        </Card>
      </ScrollView>
      <View style={styles.ContainerFAB}>
        <FAB
          style={styles.fab}
          label="Adicionar Fatura"
          onPress={() => navigation.navigate('FaturaCreate')}
        />
      </View>

    </>
  )
}
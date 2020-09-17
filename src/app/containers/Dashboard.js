import * as React from 'react';
import { Appbar, BottomNavigation, Card, Divider, Text, Title, Paragraph, } from 'react-native-paper';
import { ScrollView, View } from 'react-native';

const HomeRoute = () => <Text>Music</Text>;

const FaturaRoute = () => <Text>Albums</Text>;

const CartaoRoute = () => <Text>Recents</Text>;

export default function Dashboard() {

  const [index, setIndex] = React.useState(0);
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

  return (
    <>
      <View>
        <Appbar>
          <Appbar.Content title='Pedro' />
          <Appbar.Action icon="exit-to-app" onPress={() => { }} />
        </Appbar>
      </View>
      <View>
        <Card>
          <Card.Title
            title="70"
            subtitle="Faturas"
            right={(props) => (<Card.Content>
              <Title>R$ 888.88</Title>
              <Paragraph>Debito Total</Paragraph>
            </Card.Content>)}
          />
        </Card>
        <Card>
          <Card.Title
            title="30"
            subtitle="Faturas Pagas"
            right={(props) => (<Card.Content>
              <Title>R$ 888.88</Title>
              <Paragraph>Total</Paragraph>
            </Card.Content>)}
          />
        </Card>
        <Card>
          <Card.Title
            title="40"
            subtitle="Faturas Pedentes"
            right={(props) => (<Card.Content>
              <Title>R$ 888.88</Title>
              <Paragraph>Total</Paragraph>
            </Card.Content>)}
          />
        </Card>
      </View>
      <Divider />
      <ScrollView>
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
        </Card>
      </ScrollView>
      <View>
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
          sceneAnimationEnabled={false}
        />
      </View>
    </>
  )
}
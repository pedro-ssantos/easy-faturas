import * as React from 'react';
import { Appbar, BottomNavigation, Card, Divider, Text, Title, Paragraph, } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { ScrollView, View } from 'react-native';

export default function Home() {
  return (
    <>
      <ScrollView>
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
        <Divider />
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
            title="Fatura 5"
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
            title="Fatura 5"
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
    </>
  )
}
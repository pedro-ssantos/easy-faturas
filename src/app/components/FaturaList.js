import React, { useContext } from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Card, FAB, Title, } from 'react-native-paper';

import AppState from '../contexts/StateContext'

export default function FaturaList({ navigation }) {
  const appState = useContext(AppState)

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
          {appState.faturas.map(fatura => {
            <TouchableOpacity onPress={() => navigation.navigate('FaturaEdit',
              {
                vencimento: fatura.vencimento,
                id: fatura.id,
                paga: fatura.paga,
                valor: fatura.valor
              })}>
              <Card.Title
                title={fatura.cartao}
                subtitle={fatura.vencimento}
                right={(props) => (<Card.Content>
                  <Title>{fatura.valor}</Title>
                </Card.Content>)}
              />
            </TouchableOpacity>
          })}
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
import * as React from 'react'
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Appbar, Button, TextInput } from 'react-native-paper'
import apiAuth from '../api/apiAuth'

import apiService from '../api/apiAuth'

export default function Register({ navigation }) {

  /**
   * Cadastro 
   * POST /api/projeto/cadastro 
   *  ● Nome 
   *  ● Cel 
   *  ● Email 
   *  ● Senha 
   *  ● CPF 
   */
  async function handleSignUp() {
    const response = await apiAuth.post('/api/projeto/cadastro', {

    })
  }

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Novo Usuário" />
      </Appbar.Header>
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.container}>
          <TextInput
            mode="outlined"
            style={styles.inputContainerStyle}
            label="Nome"
            placeholder="Seu Nome"
            onChangeText={() => { }}
          />
          <TextInput
            mode="outlined"
            style={styles.inputContainerStyle}
            label="Celular"
            placeholder="(XX)1234-1234"
            onChangeText={() => { }}
          />
          <TextInput
            mode="outlined"
            style={styles.inputContainerStyle}
            label="Email"
            placeholder="usuario@email.com"
            onChangeText={() => { }}
          />
          <TextInput
            mode="outlined"
            style={styles.inputContainerStyle}
            label="CPF"
            placeholder="123.123.123-12"
            onChangeText={() => { }}
          />
          <TextInput
            mode="outlined"
            style={styles.inputContainerStyle}
            label="Senha"
            placeholder="*******"
            onChangeText={() => { }}
          />
          <Button mode="contained" onPress={() => { }} style={styles.button}>
            Registrar
          </Button>

        </View>
      </KeyboardAvoidingView>
    </>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,

    width: '90%',
  },
  inputContainerStyle: {
    margin: 8,
  },
  button: {
    margin: 8,
  },
})
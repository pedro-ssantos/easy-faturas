import React, { useState, useContext } from 'react'
import { Image, View, StyleSheet, KeyboardAvoidingView, Text } from 'react-native'
import { Appbar, Button, TextInput } from 'react-native-paper'

import AppDispatch from '../contexts/DispatchContext'

const initialState = {
  cartao: '',
  vencimento: '',
  valor: '',
  paga: false
}

export default function Register() {
  const [fatura, setFatura] = useState(initialState)
  const appDispatch = useContext(AppDispatch)

  const cartaoHandler = (value) => setFatura(prevState => ({ ...fatura, cartao: value }))
  const vencimentoHandler = (value) => setFatura(prevState => ({ ...fatura, vencimento: value }))
  const valorHandler = (value) => setFatura(prevState => ({ ...fatura, valor: value }))

  const saveHandler = () => {
    appDispatch({
      type: 'addFatura',
      value: fatura
    })
    navigation.goBack()
  }

  return (
    <>
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.container}>
          <TextInput
            mode="outlined"
            style={styles.inputContainerStyle}
            label="Cartão"
            placeholder="Operadora"
            onChangeText={cartaoHandler}
          />
          <TextInput
            mode="outlined"
            style={styles.inputContainerStyle}
            label="Vencimento"
            placeholder="dd/mm/aaaa"
            onChangeText={vencimentoHandler}
          />
          <TextInput
            mode="outlined"
            style={styles.inputContainerStyle}
            label="Valor"
            placeholder="R$ 000,00"
            onChangeText={valorHandler}
          />
          <Button mode="contained" onPress={saveHandler} style={styles.button}>
            SALVAR
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
import React, { useState, useContext } from 'react'
import { Image, View, StyleSheet, KeyboardAvoidingView, Text } from 'react-native'
import { Appbar, Button, TextInput } from 'react-native-paper'
import DispatchContext from '../contexts/DispatchContext'

const initialState = {
  numero: '',
  validade: '',
  cv: '',
  nome: ''
}

export default function CartaoCreate({ navigation }) {
  const [cartao, setCartao] = useState(initialState)
  const appDispatch = useContext(DispatchContext)

  const numeroHandler = (value) => setCartao(prevState => ({ ...prevState, numero: value }))
  const validadeHandler = (value) => setCartao(prevState => ({ ...prevState, validade: value }))
  const cvHandler = (value) => setCartao(prevState => ({ ...prevState, cv: value }))
  const nomeHandler = (value) => setCartao(prevState => ({ ...prevState, nome: value }))

  const handleSave = () => {
    appDispatch({
      type: 'addCartao',
      value: cartao
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
            label="Numero"
            placeholder="1234 1234 1234 1234"
            onChangeText={numeroHandler}
            value={cartao.numero}
          />
          <TextInput
            mode="outlined"
            style={styles.inputContainerStyle}
            label="Validade"
            placeholder="dd/mm/aaaa"
            onChangeText={validadeHandler}
            value={cartao.validade}
          />
          <TextInput
            mode="outlined"
            style={styles.inputContainerStyle}
            label="CV"
            placeholder="000"
            onChangeText={cvHandler}
            value={cartao.cv}
          />
          <TextInput
            mode="outlined"
            style={styles.inputContainerStyle}
            label="Nome do Titular"
            placeholder="Nome"
            onChangeText={nomeHandler}
            value={cartao.nome}
          />
          <Button mode="contained" onPress={handleSave} style={styles.button}>
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
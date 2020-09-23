import React, { useContext, useState, useEffect } from 'react'
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Button, Checkbox, Paragraph, TextInput, TouchableRipple } from 'react-native-paper'

import AppDispatch from '../contexts/DispatchContext'

const initialState = {
  cartao: '',
  vencimento: '',
  valor: '',
  paga: false
}

export default function Register({ route }) {
  const [fatura, setFatura] = useState(initialState)
  const appDispatch = useContext(AppDispatch)

  const vencimentoHandler = (value) => setFatura(prevState => ({ ...prevState, vencimento: value }))
  const pagaHandler = () => setFatura(prevState => ({ ...prevState, paga: !prevState.paga }))

  const handleSave = () => {
    appDispatch({
      type: 'editFatura',
      value: fatura
    })
    navigation.goBack()
  }

  const handleDelete = () => {
    appDispatch({
      type: 'deleteFatura',
      value: fatura
    })
    navigation.goBack()
  }

  useEffect(() => {
    const { id, vencimento, paga, valor } = route.params
    setFatura(prevState => ({ ...prevState, vencimento: vencimento, id: id, paga: paga, valor: valor }))
  }, [])

  return (
    <>
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.container}>
          <TouchableRipple onPress={() => setCheckedNormal(!checkedNormal)}>
            <View style={styles.row}>
              <Paragraph>Pagar Fatura</Paragraph>
              <View pointerEvents="none">
                <Checkbox status={paga ? 'checked' : 'unchecked'} onValueChange={pagaHandler} />
              </View>
            </View>
          </TouchableRipple>
          <TextInput
            mode="outlined"
            style={styles.inputContainerStyle}
            label="Vencimento"
            placeholder="dd/mm/aaaa"
            onChangeText={vencimentoHandler}
            value={fatura.vencimento}
          />
          <Button mode="contained" onPress={handleSave} style={styles.button}>
            Salvar
          </Button>
          <Button mode="contained" onPress={handleDelete} style={styles.button} color="#B00020">
            Excluir
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
  containercheckbox: {
    flex: 1,
    paddingVertical: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
})
import * as React from 'react'
import { Image, View, StyleSheet, KeyboardAvoidingView, Text } from 'react-native'
import { Appbar, Button, TextInput } from 'react-native-paper'

export default function Register() {

  return (
    <>
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.container}>
          <TextInput
            mode="outlined"
            style={styles.inputContainerStyle}
            label="Cartão"
            placeholder="Operadora"
            onChangeText={() => { }}
          />
          <TextInput
            mode="outlined"
            style={styles.inputContainerStyle}
            label="Vencimento"
            placeholder="dd/mm/aaaa"
            onChangeText={() => { }}
          />
          <TextInput
            mode="outlined"
            style={styles.inputContainerStyle}
            label="Valor"
            placeholder="R$ 000,00"
            onChangeText={() => { }}
          />
          <Button mode="contained" onPress={() => { }} style={styles.button}>
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
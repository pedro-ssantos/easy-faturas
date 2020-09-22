import * as React from 'react'
import { Image, View, StyleSheet, KeyboardAvoidingView, Text } from 'react-native'
import { Appbar, Button, TextInput } from 'react-native-paper'

export default function CartaoCreate() {

  return (
    <>
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.container}>
          <TextInput
            mode="outlined"
            style={styles.inputContainerStyle}
            label="Numero"
            placeholder="1234 1234 1234 1234"
            onChangeText={() => { }}
          />
          <TextInput
            mode="outlined"
            style={styles.inputContainerStyle}
            label="Validade"
            placeholder="dd/mm/aaaa"
            onChangeText={() => { }}
          />
          <TextInput
            mode="outlined"
            style={styles.inputContainerStyle}
            label="CV"
            placeholder="000"
            onChangeText={() => { }}
          />
          <TextInput
            mode="outlined"
            style={styles.inputContainerStyle}
            label="Nome do Titular"
            placeholder="Nome"
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
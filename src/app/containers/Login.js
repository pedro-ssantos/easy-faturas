import * as React from 'react'
import { Image, View, StyleSheet, KeyboardAvoidingView, Text } from 'react-native'
import { Button, TextInput } from 'react-native-paper'

const initialState = {
  text: '',
  maxLengthName: '',
}

export default function Login() {

  return (
    <>
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.containerLogo}>
          <Image
            source={require('../assets/logo.png')}
          />
        </View>
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
            label="Senha"
            placeholder="*******"
            onChangeText={() => { }}
          />
          <Button mode="contained" onPress={() => { }} style={styles.button}>
            Entrar
        </Button>
          <Button onPress={() => { }} style={styles.button}>
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
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
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
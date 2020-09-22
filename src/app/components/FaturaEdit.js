import * as React from 'react'
import { Image, View, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Appbar, Button, Checkbox, Paragraph, TextInput, TouchableRipple } from 'react-native-paper'

export default function Register() {

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Nova Fatura" />
      </Appbar.Header>
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.container}>
          <TouchableRipple onPress={() => setCheckedNormal(!checkedNormal)}>
            <View style={styles.row}>
              <Paragraph>Pagar Fatura</Paragraph>
              <View pointerEvents="none">
                <Checkbox status={'unchecked'} />
              </View>
            </View>
          </TouchableRipple>
          <TextInput
            mode="outlined"
            style={styles.inputContainerStyle}
            label="Vencimento"
            placeholder="dd/mm/aaaa"
            onChangeText={() => { }}
          />
          <Button mode="contained" onPress={() => { }} style={styles.button}>
            Salvar
          </Button>
          <Button mode="contained" onPress={() => { }} style={styles.button} color="#B00020">
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
import * as React from 'react';
import { Appbar } from 'react-native-paper';


export default function Topbar({ navigation }) {
  return (<Appbar>
    <Appbar.Content title='Pedro' />
    <Appbar.Action icon="exit-to-app" onPress={() => { }} />
  </Appbar>)
}
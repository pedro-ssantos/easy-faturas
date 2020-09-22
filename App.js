import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useImmerReducer } from 'use-immer'

import RootStackScreen from './src/app/navigation/RootStackScreen'

import StateContext from './src/app/contexts/StateContext'
import DispatchContext from './src/app/contexts/DispatchContext'

const initialState = {
  faturas: [],
  cartoes: [],
}

function ourReducer(draft, action) {

}

export default function App() {

  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <NavigationContainer>
          <RootStackScreen />
        </NavigationContainer>
      </DispatchContext.Provider>
    </StateContext.Provider>

  );
}
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useImmerReducer } from 'use-immer'

import RootStackScreen from './src/app/navigation/RootStackScreen'

import StateContext from './src/app/contexts/StateContext'
import DispatchContext from './src/app/contexts/DispatchContext'

const initialState = {
  faturas: [],
  cartoes: [],
  nextId: 0,
}

function ourReducer(draft, action) {
  switch (action.type) {
    case 'addCartao':
      draft.cartoes.push(action.value)
      return
    case 'editCartao':
      draft.cartoes.map(el => (el.numero === action.value.numero) ? action.value : el)
      return
    case 'deleteCartao':
      draft.cartoes.filter(el => el.numero !== action.value.numero)
      return
    case 'addFatura':
      const fatura = action.value
      fatura.id = draft.nextId
      nextId++
      draft.faturas.push(fatura)
      return
    case 'editFatura':
      draft.faturas.map(el => (el.id === action.value.id) ? action.value : el)
      return
    case 'deleteFatura':
      draft.faturas.filter(el => el.id !== action.value.id)
      return
  }
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
  )
}
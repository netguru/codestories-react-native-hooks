import React from 'react'
import { createAppContainer } from 'react-navigation'

import AppStack from 'screens/App/App.stack'
import { AppProvider } from 'contexts/app.context'

const AppContainer = createAppContainer(AppStack)

export default function App() {
  return (
    <AppProvider>
      <AppContainer />
    </AppProvider>
  )
}

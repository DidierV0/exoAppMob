import { View, Text } from 'react-native'
import React from 'react'
import Home from './bike/Home'
import { PaperProvider } from 'react-native-paper'

const App = () => {
  return (
    <PaperProvider>
      <Home/>
    </PaperProvider>
  )
}

export default App
import React from 'react';
import { StatusBar } from 'react-native'
import MainScreen from './src'
import colors from './util/colors';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={colors.primary} barStyle='light-content' />
      <MainScreen />
    </>
  )
}

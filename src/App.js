import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native'
import SplashScreen from './components/SplashScreen'
import TheRestOfTheApp from './components/TheRestOfTheApp'
import { useState } from 'react'

import { TasksContextProvider } from './store/TasksContext'

export default function App() {
  const [loading, setLoading] = useState(false)

  return (
    < TasksContextProvider>
      <View style={{ flex: 1, backgroundColor: 'lightblue' }}>
        {
          loading
            ?
            <SplashScreen />

            :
            <TheRestOfTheApp />
        }
      </View>
    </ TasksContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


});

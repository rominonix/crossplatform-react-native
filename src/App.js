import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SplashScreen from './components/SplashScreen'
import MyComponent from './components/MyComponent'
import TheRestOfTheApp from './components/TheRestOfTheApp'
import { useState } from 'react'

export default function App() {
  const [loading, setLoading] = useState(false)

  return (


    <View style={{flex: 1, backgroundColor: 'lightblue'}}>
      {
        loading
          ?
          <SplashScreen />
          
          :
          <TheRestOfTheApp/>
      }
    </View>

    
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

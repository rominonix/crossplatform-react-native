import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  SplashScreen  from './components/SplashScreen'
import  TheRestOfTheApp  from './components/TheRestOfTheApp'
import {useState} from 'react'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <React.Fragment>
      {
        loading
        ?
          <SplashScreen />
        :
          <TheRestOfTheApp />
      }
    </React.Fragment>
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

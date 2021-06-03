import {NavigationContainer} from '@react-navigation/native'
import MainStack from '../navigators/MainStack'

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TheRestOfApp() {
  return (

    <NavigationContainer>
      <MainStack />
    </NavigationContainer>

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
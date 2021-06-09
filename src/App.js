import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ImageBackground, StyleSheet, Text, View, Image} from 'react-native'
import SplashScreen from './components/SplashScreen'
import TheRestOfTheApp from './components/TheRestOfTheApp'
import { useState } from 'react'

export default function App() {
  const [loading, setLoading] = useState(false)
  
  return (


    <View>
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
      flexDirection: "column"
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    }
  
});

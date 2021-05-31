import React from 'react'
import { SafeAreaView, Text, Button } from 'react-native'

const HomeScreen = props => {

   const pressHandler = () => {
      props.navigation.navigate('UserProfile')
      }
   return (
      <SafeAreaView style={{ flex: 1}}>
         <Text>Home Screen!</Text>
         <Button onPress={pressHandler} title="Go to profile"></Button>
      </SafeAreaView>
   )
}
export default HomeScreen
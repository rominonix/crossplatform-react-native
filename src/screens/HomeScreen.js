import React from 'react'
import Login from '../components/Login'
import { LoginContextProvider } from '../store/LoginContext'
import {SafeAreaView} from 'react-native'

const HomeScreen = props => {
   return (
      <SafeAreaView style={{ flex: 1 }}>
         < LoginContextProvider>
            <Login navigation={props.navigation} />
         </ LoginContextProvider>
      </SafeAreaView>
   )
}
export default HomeScreen


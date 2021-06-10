import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView, Text, Button, View, StyleSheet, TextInput, ImageBackground, TouchableOpacity } from 'react-native'

import { LoginContext } from '../store/LoginContext'






const Login = props => {
   const loginContext = useContext(LoginContext)
   const loginHandler = async () => {
      const success = await loginContext.login()
      props.navigation.navigate('UserProfile')
   }

   const bgrImage = require('../assets/background-login1.png')

   return (

      <ImageBackground source={bgrImage} style={styles.bgrImage}>
         <View style={styles.wrapper}>

            <View style={styles.container}>
               <Text style={styles.emailLabel}>Email</Text>
               <TextInput underlineColorAndroid='transparent' style={styles.input} autoCapitalize='none'
                  onChangeText={loginContext.setEmail}
                  value={loginContext.email}
               >
               </TextInput>
               <Text style={styles.passwordLabel}>Password</Text>
               <TextInput secureTextEntry={true} underlineColorAndroid='transparent' style={styles.input}
                  onChangeText={loginContext.setPassword}
                  value={loginContext.password}
               >
               </TextInput>
               <TouchableOpacity style={styles.buttonContainer} onPress={loginHandler} onHover={{ backgroundColor: 'blue' }}>
                  <Text style={{ color: '#F5F5F5', margin: 5 }}>SIGN IN</Text>
               </TouchableOpacity>
            </View>
            <Text style={styles.title}>INGG BRA BYGG</Text>
         </View>
      </ImageBackground>

   )
}


const styles = StyleSheet.create({
   wrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   bgrImage: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   container: {
      flex: 1,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      position: 'absolute',
      left: 0,
      top: 0,
      elevation: 9,
      marginTop: 180,
      marginBottom: 180,
      // marginLeft: 80,
      // marginRight: 80,
      alignItems: 'center',
      backgroundColor: '#CFDEEC',
      justifyContent: 'center',
      borderRadius: 10
   },
   emailLabel: {
      color: '#5A5454',
      alignSelf: 'flex-start',
      marginLeft: 25,
      marginBottom: 5,
      marginTop: 30
   },
   passwordLabel: {
      color: '#5A5454',
      alignSelf: 'flex-start',
      marginLeft: 25,
      marginTop: 5,
      marginBottom: 5
   },
   input: {
      borderRadius: 10,
      padding: 10,
      width: 200,
      marginTop: 5,
      marginLeft: 20,
      marginRight: 20,
      backgroundColor: '#F5F5F5'
   },
   buttonContainer: {
      margin: 10,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      //borderStyle: 'dotted',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 20,
      marginTop: 20,
      backgroundColor: '#5A5454'
   },
   title: {
      //zIndex:'auto',
      // alignItems:'flex-end',
      //   elevation: 3,
      //    alignItems:'flex-end',
      //position:'absolute',

      fontSize: 30,

      marginTop: 400,
      color: '#5A5454'

      //    justifyContent:'center',


      //    marginTop: -30,
      //    marginLeft: -10,
   }
})

export default Login

import React, { useContext, useEffect } from 'react'
import { Text, View, TextInput, ImageBackground, TouchableOpacity } from 'react-native'
import { LoginContext } from '../store/LoginContext'
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import styles from '../styles/index';


const Login = props => {
   const loginContext = useContext(LoginContext)
   const loginHandler = async () => {
      try {
         const success = await loginContext.login() 
         await AsyncStorage.setItem('email', JSON.stringify(loginContext.email))
         await AsyncStorage.setItem('password', JSON.stringify(loginContext.password))
         props.navigation.navigate('Details')
      } catch (err) {
         console.log(err)
      }
   }
   const getStorageData = async () => {
      try {
         let userEmail = JSON.parse(await AsyncStorage.getItem('email'))
         let userPass = JSON.parse(await AsyncStorage.getItem('password')) 
         if (userEmail != null) {
            userEmail = loginContext.setEmail(userEmail)
            userPass =loginContext.setPassword(userPass)
         }
      } catch (err) {
         console.log(err)
      }
   }
   useEffect(() => {
      return () => {
         getStorageData()
      }
   })



   const bgrImage = require('../assets/android4.png')

   return (

      <ImageBackground source={bgrImage} style={styles.bgrImageLogin}>
         <View style={styles.wrapperLogin}>

            <View style={styles.containerLogin}>
               <Text style={styles.labelLogin}>Email</Text>
               <TextInput underlineColorAndroid='transparent' style={styles.inputLogin} autoCapitalize='none'
                  onChangeText={loginContext.setEmail}
                  value={loginContext.email}
               >
               </TextInput>
               <Text style={styles.labelLogin}>Password</Text>
               <TextInput secureTextEntry={true} underlineColorAndroid='transparent' style={styles.inputLogin}
                  onChangeText={loginContext.setPassword}
                  value={loginContext.password}
               >
               </TextInput>
               <TouchableOpacity style={styles.buttonContainerLogin} onPress={loginHandler} onHover={{ backgroundColor: 'blue' }}>
                  {/* <Text style={{ color: '#F5F5F5', margin: 5 }}>SIGN IN</Text> */}
                  <Text style={styles.titleLogin}>SIGN IN</Text>
               </TouchableOpacity>
            </View>
         </View>
      </ImageBackground>
   )
}

export default Login

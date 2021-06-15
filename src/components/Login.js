import React, { useContext } from 'react'
import { Text, View, StyleSheet, TextInput, ImageBackground, TouchableOpacity } from 'react-native'
import { LoginContext } from '../store/LoginContext'


const Login = props => {
   const loginContext = useContext(LoginContext)
   const loginHandler = async () => {
      const success = await loginContext.login()
      props.navigation.navigate('Details')
   }

   const bgrImage = require('../assets/android4.png')

   return (

      <ImageBackground source={bgrImage} style={styles.bgrImage}>
         
         <View style={styles.container}>
            <Text style={styles.label}>Email</Text>
            <TextInput underlineColorAndroid='transparent' style={styles.input} autoCapitalize='none'
               onChangeText={loginContext.setEmail}
               value={loginContext.email}
            >
            </TextInput>
            <Text style={styles.label}>Password</Text>
            <TextInput secureTextEntry={true} underlineColorAndroid='transparent' style={styles.input}
               onChangeText={loginContext.setPassword}
               value={loginContext.password}
            >
            </TextInput>
            <TouchableOpacity style={styles.buttonContainer} onPress={loginHandler} onHover={{ backgroundColor: 'blue' }}>
               <Text style={{ color: '#F5F5F5', margin: 5 }}>SIGN IN</Text>
            </TouchableOpacity>
         {/* <Text style={styles.title}>INGE BRA BYGG</Text> */}
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
      width:300,
      elevation: 9,
      marginTop: 180,
      paddingTop:50,
      marginBottom: 180,
      alignItems: 'center',
      backgroundColor: '#CFDEEC',
      borderRadius: 10
   },
   label: {
      color: '#5A5454',
      alignSelf: 'flex-start',
      marginLeft: 50,
      marginBottom: 5,
      marginTop: 30
   },

   input: {
      borderRadius: 10,
      padding: 10,
      width: 230,
      marginTop: 5,
      marginLeft: 20,
      marginRight: 20,
      backgroundColor: '#F5F5F5'
   },
   buttonContainer: {
      width:120,
      height:50,
      justifyContent: 'center',
      alignItems: 'center', 
      borderRadius: 10,
      marginTop: 40,
      backgroundColor: '#5A5454'
   },
   title: {
      fontSize: 30,
      marginTop: 150,
      color: '#5A5454'
   }
})

export default Login

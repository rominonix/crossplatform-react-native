import React, { useContext, useEffect, useState} from 'react'
import { SafeAreaView, Text, Button, View, StyleSheet, TextInput } from 'react-native'
import { LoginContext} from '../store/LoginContext'



const Login = props => {

   const loginContext = useContext(LoginContext)
   useEffect(() => {loginContext.login()
      .then(() => props.navigation.navigate('UserProfile'))
      , []})
   // let userName = loginContext.username
   // console.log(loginContext.username)
   // let setUsername = loginContext.setUsername
   
   return (
      <SafeAreaView style={{ flex: 1 }}>
         <View style={styles.container}>
            <View style={styles.content}>
               <Text style={styles.emailLabel}>Email</Text>
               <TextInput underlineColorAndroid='transparent' style={styles.input} placeholder="Your username"
                  onChangeText={loginContext.setEmail}
                  value={loginContext.email}
               >
               </TextInput>
               <Text style={styles.passwordLabel}>Password</Text>
               <TextInput secureTextEntry={true} underlineColorAndroid='transparent' style={styles.input} placeholder="Password"
                  onChangeText={loginContext.setPassword}
                  value={loginContext.password}
               >
               </TextInput>
               <Button title="Sign in" style={styles.buttonContainer}></Button>
            </View>
         </View>
      </SafeAreaView>
   )
}

   // props => {

   //    const loginContext = useContext(LoginContext)
   //    useEffect = () => {
   //       loginContext.login()
   //          .then(() => {
   //             props.navigation.navigate('UserProfile')
   //          }, [])

   //       return (
   //          <SafeAreaView style={{ flex: 1 }}>
   //             <View style={styles.container}>
   //                <View style={styles.content}>
   //                   <Text style={styles.emailLabel}>Email</Text>
   //                   <TextInput underlineColorAndroid='transparent' style={styles.input} placeholder="username"
   //                      onChangeText={setUserName}
   //                      value={username}
   //                   >
   //                   </TextInput>
   //                   <Text style={styles.passwordLabel}>Password</Text>
   //                   <TextInput secureTextEntry={true} underlineColorAndroid='transparent' style={styles.input} placeholder="Password"
   //                      onChangeText={setPassword}
   //                      value={password}
   //                   >
   //                   </TextInput>
   //                   <Button onPress={loginContext.login} title="Sign in" style={styles.buttonContainer}></Button>
   //                </View>
   //             </View>

   //          </SafeAreaView>
   //       );
   //    }
   // }


const styles = StyleSheet.create({
   container: {
      flex: 1,

   },
   content: {
      opacity: 0.9,
      backgroundColor: 'white',
      borderWidth: 2,
      margin: 10,
      alignItems: 'center',
   },
   emailLabel: {
      color: 'blue',
   },
   input: {
      borderRadius: 10,
      padding: 10,
      color: 'black',
      borderWidth: 2,
      borderColor: 'lightgray',
      width: 200,
      margin: 5
   },
   buttonContainer: {
      margin: 10,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
   }
})

export default Login

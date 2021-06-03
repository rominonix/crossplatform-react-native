import React, { useContext, useEffect } from 'react'
import { SafeAreaView, Text, Button, View, StyleSheet, TextInput } from 'react-native'
import { LoginContext } from '../store/LoginContext'

const Login = props => {
   const loginContext = useContext(LoginContext)
   useEffect = () => {
      loginContext.fetchLatestPosts()
         .then(() => {
            props.navigation.navigate('UserProfile')
         }, [])
   }

   return (
      <SafeAreaView style={{ flex: 1 }}>
         <View style={styles.container}>
            <View style={styles.content}>
               <Text style={styles.emailLabel}>Email</Text>
               <TextInput underlineColorAndroid='transparent' style={styles.input} placeholder="username"
                  onChangeText={setUsername}
                  value={username}
               >
               </TextInput>
               <Text style={styles.passwordLabel}>Password</Text>
               <TextInput secureTextEntry={true} underlineColorAndroid='transparent' style={styles.input} placeholder="Password"
                  onChangeText={setPassword}
                  value={password}
               >
               </TextInput>
               <Button onPress={loginContext.fetchLatestPosts} title="Sign in" style={styles.buttonContainer}></Button>
            </View>
         </View>

      </SafeAreaView>
   )

}

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
   },
});
export default Login
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView, Text, Button, View, StyleSheet, TextInput, ImageBackground } from 'react-native'
import { TasksContext } from '../store/TasksContext'
import BackgroundImg from '../assets/inside-background.png'
const Tasks = props => {
    const taskContext = useContext(TasksContext)
    // const loginHandler = async () => { 
    //    const success = await loginContext.login()
    //    props.navigation.navigate('TasksScreen')}


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>


                {/* <View style={styles.content}> */}
                {/* <Text style={styles.emailLabel}>Email</Text>
                   <TextInput underlineColorAndroid='transparent' style={styles.input} autoCapitalize='none' placeholder="Your username"
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
                   <Button title="Sign in" style={styles.buttonContainer} onPress={loginHandler}></Button> */}
                {/* </View> */}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
        width: 'auto',
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 80,
        borderRadius: 30,
        shadowColor: '#545454',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.6,
    },


    //    emailLabel: {
    //       color: 'blue',
    //    },
    //    input: {
    //       borderRadius: 10,
    //       padding: 10,
    //       color: 'black',
    //       borderWidth: 2,
    //       borderColor: 'lightgray',
    //       width: 200,
    //       margin: 5,
    //    },
    //    buttonContainer: {
    //       margin: 10,
    //       padding: 10,
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //    }
})

export default Tasks
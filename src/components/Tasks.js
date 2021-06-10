import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView, Text, Button, View, StyleSheet, TextInput, ImageBackground, TouchableOpacity } from 'react-native'
import { TasksContext } from '../store/TasksContext'
import BackgroundImg from '../assets/inside-background.png'
const Tasks = props => {
    const taskContext = useContext(TasksContext)
    const taskHandler = async () => { 
       const success = await taskContext.login()
       props.navigation.navigate('UserProfile')}


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TextInput style={styles.input}>

                </TextInput>

                <TouchableOpacity 
                style={styles.taskButton} onPress={taskHandler}>
                    <Text style={styles.buttonTitle}>
                        Task title
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
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
    input:{
        borderWidth:0.5,
        width:'65%',
        height:30,
        marginTop:40,
        borderRadius:5,
        borderColor:'#545454',
    },

    taskButton:{
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor: '#545454',
        width:'80%',
        height:50,
        borderStyle:'dashed',
        margin:30,
        // strokeDasharray:"8, 3",
        borderRadius: 10,
    }, 

    buttonTitle:{
        color:'#545454',
        textTransform:'uppercase'
    }

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
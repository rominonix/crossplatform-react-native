import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, ImageBackground } from 'react-native'
import NewTask from '../components/NewTask'
import { TasksContextProvider } from '../store/TasksContext'
import BackgroundImg from '../assets/inside-background.png'
import styles from '../styles/index'

const CreateTask = props => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={BackgroundImg} style={styles.image}>
                <TasksContextProvider>
                    <NewTask />
                </TasksContextProvider>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default CreateTask
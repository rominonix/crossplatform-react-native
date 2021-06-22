import React from 'react'
import Tasks from '../components/Tasks'
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native'
import BackgroundImg from '../assets/inside-background.png'
import styles from '../styles/index'


const TasksScreen = props => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={BackgroundImg} style={styles.image}>
                <Tasks />
            </ImageBackground>
        </SafeAreaView>
    )
}

export default TasksScreen
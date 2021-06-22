import React from 'react'
import { SafeAreaView, Text, ImageBackground, StyleSheet } from 'react-native'
import EditTask from '../components/EditTask'
import BackgroundImg from '../assets/inside-background.png'
import styles from '../styles/index'

const UpdateTaskScreen = props => {
    return (
        <SafeAreaView style={{ flex: 1}}>
            <ImageBackground source={BackgroundImg} style={styles.image}>
            
                <EditTask />
               
            </ImageBackground>
        </SafeAreaView>
    )
}

export default UpdateTaskScreen
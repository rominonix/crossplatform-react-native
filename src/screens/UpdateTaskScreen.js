import React from 'react'
import { SafeAreaView, Text, ImageBackground, StyleSheet } from 'react-native'
import EditTask from '../components/EditTask'

import BackgroundImg from '../assets/inside-background.png'

const UpdateTaskScreen = props => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#CFDEEC' }}>
            <ImageBackground source={BackgroundImg} style={styles.image}>
            
                <EditTask />
               
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
    }
})
export default UpdateTaskScreen
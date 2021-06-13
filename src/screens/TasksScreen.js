import React from 'react'
import { TasksContextProvider } from '../store/TasksContext'
import Tasks from '../components/Tasks'
import { ImageBackground, SafeAreaView, Text, StyleSheet } from 'react-native'

// import image from '../assets/inside-background.png'
// import BackgroundImg from '../assets/inside-background.svg'

import BackgroundImg from '../assets/inside-background.png'

const TasksScreen = props => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={BackgroundImg} style={styles.image}>
                < TasksContextProvider>
                    <Tasks />
                </ TasksContextProvider>
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
export default TasksScreen
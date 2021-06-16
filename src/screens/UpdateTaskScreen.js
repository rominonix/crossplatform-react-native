import React from 'react'
import { TasksContextProvider } from '../store/TasksContext'
import { SafeAreaView, Text, ImageBackground, StyleSheet } from 'react-native'
import EditTask from '../components/EditTask'

import BackgroundImg from '../assets/inside-background.png'

const UpdateTaskScreen = props => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#CFDEEC' }}>
            <ImageBackground source={BackgroundImg} style={styles.image}>
                {/* < TasksContextProvider> */}
                <EditTask />
                {/* </ TasksContextProvider> */}
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
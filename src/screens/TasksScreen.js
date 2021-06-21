import React from 'react'
import TasksList from '../components/TasksList'
import UpdateTask from '../components/UpdateTask'
// import Tasks from '../components/Tasks'
import { ImageBackground, SafeAreaView, Text, StyleSheet, View } from 'react-native'
import BackgroundImg from '../assets/inside-background.png'
// import { TasksContextProvider } from '../store/TasksContext'

const TasksScreen = props => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={BackgroundImg} style={styles.image}>
                {/* < TasksContextProvider> */}
                    <TasksList />
                    <View>

                    <UpdateTask/>
                    </View>
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
export default TasksScreen
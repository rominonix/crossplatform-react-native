import React from 'react'
// import Login from '../components/Login'
import { TasksContextProvider } from '../store/TasksContext'
import { SafeAreaView, Text } from 'react-native'

const TasksScreen = props => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            < TasksContextProvider>
                <Text>
                    helooo
            </Text>
            </ TasksContextProvider>
        </SafeAreaView>
    )
}
export default TasksScreen
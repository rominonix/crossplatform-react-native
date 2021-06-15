import React from 'react'
import { TasksContextProvider } from '../store/TasksContext'
import { SafeAreaView, Text } from 'react-native'
import EditTask from '../components/EditTask'

const UpdateTaskScreen = props => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor:'#CFDEEC'}}>
            {/* < TasksContextProvider> */}
                <EditTask />
            {/* </ TasksContextProvider> */}
        </SafeAreaView>
    )
}
export default UpdateTaskScreen
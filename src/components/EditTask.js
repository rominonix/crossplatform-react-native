import React, { useContext, useEffect } from 'react'
import { SafeAreaView, View, TextInput, Text, TouchableOpacity} from 'react-native'
import { TasksContext } from '../store/TasksContext'
import { TapGestureHandler, State } from 'react-native-gesture-handler';
import styles from '../styles/index'

const EditTask = props => {

    const onSingleTapEvent = (event) => {
        if (event.nativeEvent.state === State.ACTIVE) {
            alert('Add the task name and the client ID to your task');
        }
    };
    
    const tasksContext = useContext(TasksContext)
    const update = async () => {
        tasksContext.updateTask()
        
    }
    let currentID = tasksContext.currentID

    useEffect(() => {
        tasksContext.getTask(currentID)
    }, [])

    let taskname = tasksContext.currentTaskName

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.containerEditTask}>
                <Text style={styles.itemTextEditTask}>Id: {currentID}</Text>
                <Text style={styles.itemTextEditTask}>Task name: {taskname}</Text>
                <Text style={styles.labelEditTask}>Update task name</Text>
                <TextInput
                    style={styles.inputEditTask}
                    onChangeText={tasksContext.setTaskName}
                    value={tasksContext.taskName}>
                </TextInput>

                <Text style={styles.labelEditTask}>Update client id</Text>
                <TextInput
                    style={styles.inputEditTask}
                    onChangeText={tasksContext.setClientId}
                    value={tasksContext.clientId}>
                </TextInput>
                <Text style={styles.labelEditTask}>Update task status</Text>
                <TextInput
                    style={styles.inputEditTask}
                    onChangeText={tasksContext.setTaskStatus}
                    value={tasksContext.taskStatus}>
                </TextInput>
                <TouchableOpacity style={styles.confirmButton}
                    
                    onPress={update}
                >
                    <Text style={styles.confirmTitle}>Confirm</Text>
                </TouchableOpacity>
                <TapGestureHandler
                    onHandlerStateChange={onSingleTapEvent}
                >
                    <Text>Help</Text>
                </TapGestureHandler>
            </View>
        </SafeAreaView>
    )
}

export default EditTask
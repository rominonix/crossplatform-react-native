import React, { useContext } from 'react'
import { SafeAreaView, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { TasksContext } from '../store/TasksContext'
import styles from '../styles/index'

const NewTask = props => {
       const addNewTask = useContext(TasksContext)
       console.log(addNewTask.currentID)
       const newTaskHandler = async () => {
          const success = await addNewTask.createNewTask() 
       }

    return (

        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.containerNewTask}>
                <Text style={styles.labelNewTask}>Task title: </Text>
                <TextInput style={styles.inputNewTask}
                 onChangeText={addNewTask.setTaskName}
                 value={addNewTask.taskName}>
                </TextInput>

                <Text style={styles.labelNewTask}>Client Id: </Text>
                <TextInput style={styles.inputNewTask}
                 onChangeText={addNewTask.setClientId}
                 value={addNewTask.clientId}>
                </TextInput>
                <TouchableOpacity 
                style={styles.addTaskButton}
                onPress={newTaskHandler}>
                    <Text style={styles.addTaskTitle}>Add task</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )

}

export default NewTask

import React, { useContext } from 'react'
import { SafeAreaView, Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'
import { TasksContext } from '../store/TasksContext'


const NewTask = props => {
       const addNewTask = useContext(TasksContext)
       console.log(addNewTask.currentID)
       const newTaskHandler = async () => {
          const success = await addNewTask.createNewTask() 
          //alert o algo para que el cliente sepa que agrego un nuevo task
       }

    return (

        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.label}>Task title: </Text>
                <TextInput style={styles.input}
                 onChangeText={addNewTask.setTaskName}
                 value={addNewTask.taskName}>
                </TextInput>

                <Text style={styles.label}>Client Id: </Text>
                <TextInput style={styles.input}
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
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
        width: 'auto',
        paddingTop:60,
        marginTop: 100,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 80,
        borderRadius: 30,
        shadowColor: '#545454',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.6,
    },

    input: {
        borderWidth: 0.5,
        width: '65%',
        height: 30,
        marginBottom: 40,
        marginTop:10,
        borderRadius: 5,
        borderColor: '#545454',
    },
    label: {
        color: '#545454',
        fontSize:18,
    },

    addTaskButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        width: '50%',
        height: 50,
        margin: 30,
        backgroundColor: '#545454',
        borderRadius: 8,
    },

    addTaskTitle: {
        color: 'whitesmoke',
        textTransform: 'uppercase'
    },
})
export default NewTask

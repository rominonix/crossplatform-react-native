import React, { useContext } from 'react'
import { SafeAreaView, Text, View, StyleSheet, TextInput, Button } from 'react-native'
import { TasksContext } from '../store/TasksContext'


const NewTask = props => {
       const addNewTask = useContext(TasksContext)
       const newTaskHandler = async () => {
          const success = await addNewTask.createNewTask() 
          //alert o algo para que el cliente sepa que agrego un nuevo task
       }

    return (

        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.label}>task title: </Text>
                <TextInput style={styles.input}
                 onChangeText={addNewTask.setTaskName}
                 value={addNewTask.taskName}>
                </TextInput>

                <Text style={styles.label}>client name / Id: </Text>
                <TextInput style={styles.input}
                 onChangeText={addNewTask.setClientId}
                 value={addNewTask.clientId}>
                </TextInput>
                <Button title='Add task'
                onPress={newTaskHandler}></Button>
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
        marginTop: 40,
        borderRadius: 5,
        borderColor: '#545454',
    },
    label: {
        color: '#545454',
    },
})
export default NewTask

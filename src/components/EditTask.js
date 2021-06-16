import React, { useContext, useEffect } from 'react'
import { SafeAreaView, View, StyleSheet, TextInput, Text, TouchableOpacity} from 'react-native'
// import { Button } from 'react-native-elements'
import { TasksContext } from '../store/TasksContext'
import { TapGestureHandler, State } from 'react-native-gesture-handler';

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
            <View style={styles.container}>
                <Text style={styles.itemText}>Id: {currentID}</Text>
                <Text style={styles.itemText}>Task name: {taskname}</Text>
                <Text style={styles.label}>Update task name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={tasksContext.setTaskName}
                    value={tasksContext.taskName}>
                </TextInput>

                <Text style={styles.label}>Update client id</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={tasksContext.setClientId}
                    value={tasksContext.clientId}>
                </TextInput>
                <Text style={styles.label}>Update task status</Text>
                <TextInput
                    style={styles.input}
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
                    // waitFor={doubleTapRef}
                >
                    <Text>Help</Text>
                </TapGestureHandler>
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
        paddingTop:40,
        marginTop: 40,
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
        marginTop:10,
        marginBottom: 30,
        borderRadius: 5,
        borderColor: '#545454',
    },

    confirmButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        width: '50%',
        height: 50,
        margin: 30,
        backgroundColor: '#545454',
        borderRadius: 8,
    },

    confirmTitle: {
        color: 'whitesmoke',
        textTransform: 'uppercase'
    },
    itemText: {
        color: '#747474',
        fontSize: 18,
        marginBottom:30,
    },

    label: {
        color: '#545454',
        fontSize:18,
    }
    
})

export default EditTask
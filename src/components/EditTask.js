import React, { useContext, useEffect } from 'react'
import { SafeAreaView, View, StyleSheet, TextInput, Text, TouchableOpacity} from 'react-native'
// import { Button } from 'react-native-elements'
import { TasksContext } from '../store/TasksContext'
import { TapGestureHandler, State } from 'react-native-gesture-handler';

const EditTask = props => {

    const onSingleTapEvent = (event) => {
        if (event.nativeEvent.state === State.ACTIVE) {
            console.log("ITS WORKING")
            alert('Add the task name and the client ID to your task');
        }
    };
    
    
    
    
    
    const tasksContext = useContext(TasksContext)
    const update = async () => {
        console.log('hpli');
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
                <Text>Update task name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={tasksContext.setTaskName}
                    value={tasksContext.taskName}>
                </TextInput>

                <Text>Update client id</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={tasksContext.setClientId}
                    value={tasksContext.clientId}>
                </TextInput>
                <Text>Update task status</Text>
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
        // marginTop: 40,
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
    //     createTask: {
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         borderWidth: 1,
    //         width: '50%',
    //         height: 50,
    //         margin: 30,
    //         backgroundColor: '#545454',
    //         borderRadius: 10,
    //     },

    //     createTaskTitle: {
    //         color: 'whitesmoke',
    //         textTransform: 'uppercase'
    //     },

    //     list: {
    //         width: '90%',
    //         marginTop: 15,
    //     },
    //     item: {
    //         marginTop: 30,
    //         marginLeft: 20,
    //         marginRight: 20,
    //         padding: 15,
    //         borderRadius: 10,
    //         borderWidth: 1,
    //         borderStyle: 'dashed',
    //         borderColor: '#545454',
    //         alignItems: 'center',
    //     },
    itemText: {
        color: '#545454',
        fontSize: 18
    },
    //     activeItem: {
    //         backgroundColor: '#CFDEEC',
    //         position: 'absolute',
    //         top: 0,
    //         left: 0,
    //         bottom: 0,
    //         right: 0,
    //         zIndex: 1,
    //         padding: 30,
    //         paddingTop: 60
    //     },
})

export default EditTask
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView, View, StyleSheet, TextInput, FlatList, Text, TouchableOpacity, Animated } from 'react-native'
import { TasksContext } from '../store/TasksContext'
import { useNavigation } from '@react-navigation/native';


const Tasks = props => {

    const tasksContext = useContext(TasksContext)
    let mytasks = tasksContext.tasks
    useEffect(() => {
        tasksContext.getLatestTasks()
    }, [])

    // const updateTaskScreen = () =>{
        // const updateSuccess = await tasksContext.updateTask(taskName, clientId)
        // let setTaskName;
        // let setClientId;    
    // }

    const deleteAtask = async () =>  {
        const deleteSuccess = await tasksContext.deleteTask(currentID)  
    }

    const ButtonCreateTask = () => {
        const navigation = useNavigation()
        return (
            <TouchableOpacity
                style={styles.createTask}
                onPress={() =>
                    navigation.navigate('CreateTask')}>
                <Text
                    style={styles.createTaskTitle}>
                    Create task
                </Text>
            </TouchableOpacity>
        )
    }

    const ButtonUpdateTask = () => {
        const navigation = useNavigation()
        return (
            <TouchableOpacity
                style={styles.createTask}
                onPress={() =>
                    navigation.navigate('UpdateScreen')}>
                <Text
                    style={styles.createTaskTitle}>
                    Update task
                </Text>
            </TouchableOpacity>
        )
    }

    const Item = ({ item, onPress }) => {
        return (
            <View>
                <TouchableOpacity style={styles.item} onPress={onPress}>
                    <Text style={styles.itemText}>{item.taskName}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    // const Update = ({ updateItem, onPress }) => {
    //     return (
    //         <View>
    //              <TouchableOpacity style={styles.item} onPress={onPress}>
    //                 <Text style={styles.itemText}>{updateItem.taskName}</Text>
    //                 <TextInput>

    //                 </TextInput>
    //             </TouchableOpacity>
    //         </View>
    //     )
    // }

    const ActiveItem = ({ setCurrentID, item }) => {
        const scale = new Animated.Value(0)

        useEffect(() => {
            Animated.timing(scale, {
                toValue: 1,
                duration: 150,
                useNativeDriver: true
            }).start()
        }, [])

        const hideItem = () => {
            Animated.timing(scale, {
                toValue: 0,
                duration: 150,
                useNativeDriver: true
            }).start(() => {
                setCurrentID(null)
            })
        }

        return (
            <Animated.View style={[styles.activeItem, { transform: [{ scale }] }]}>
                <TouchableOpacity style={styles.closeButton} onPress={hideItem}>
                    <Text style={styles.closeButtonText}>X</Text>
                </TouchableOpacity>
                <Text style={styles.itemText}>{item.taskName}</Text>
                <Text style={styles.activeItemHeading} >{item.id}</Text>

                <ButtonUpdateTask/>


                {/* <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText} onPress={deleteAtask}>DELETE</Text>
                </TouchableOpacity> */}
            </Animated.View>
        )

    }


    // const UpdateItem = ({ setCurrentID, updateItem }) => {
    //     const updateScreen = new Animated.Value(0)

    //     useEffect(() => {
    //         Animated.timing(updateScreen, {
    //             toValue: 1,
    //             duration: 150,
    //             useNativeDriver: true
    //         }).start()
    //     }, [])

    //     const hideItem = () => {
    //         Animated.timing(updateScreen, {
    //             toValue: 0,
    //             duration: 150,
    //             useNativeDriver: true
    //         }).start(() => {
    //             setCurrentID(null)
    //         })
    //     }

    //      return (
    //         <Animated.View>
    //             <TouchableOpacity style={styles.closeButton} onPress={hideItem}>
    //                 <Text style={styles.closeButtonText}>X</Text>
    //             </TouchableOpacity>
    //         </Animated.View>
    //     )
    // }


    const [currentID, setCurrentID] = useState(null)
    const currentItem = mytasks.find(item => item.id == currentID)
    // const updateItem = mytasks.find(item => item.id == currentID)

    return (
        <SafeAreaView style={{ flex: 1 }}>

            {
                currentItem && <ActiveItem item={currentItem} setCurrentID={setCurrentID} />
            }

            <View style={styles.container}>
                <ButtonCreateTask />
                <TextInput style={styles.input}>
                </TextInput>
                <FlatList style={styles.list}
                    data={mytasks}
                    keyExtractor={item => item.id}
                    renderItem={(props) => <Item item={props.item}
                        onPress={() => setCurrentID(props.item.id)} />} />
            </View>
        </SafeAreaView>
    )

    // return (

    //     <SafeAreaView style={{ flex: 1 }}>

    //     {
    //         updateItem && <UpdateItem item={updateItem} setCurrentID={setCurrentID} />
    //     }

    // </SafeAreaView>

    // )
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

    createTask: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        width: '50%',
        height: 50,
        margin: 30,
        backgroundColor: '#545454',
        borderRadius: 10,
    },

    createTaskTitle: {
        color: 'whitesmoke',
        textTransform: 'uppercase'
    },

    list: {
        width: '90%',
        marginTop: 15,
    },
    item: {
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#545454',
        alignItems: 'center',
    },
    itemText: {
        color: '#545454',
        fontSize: 18
    },
    activeItem: {
        backgroundColor: '#CFDEEC',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 1,
        padding: 30,
        paddingTop: 60
    },
})

export default Tasks
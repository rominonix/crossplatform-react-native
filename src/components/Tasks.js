import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView, View, StyleSheet, TextInput, FlatList, Text, TouchableOpacity, Animated } from 'react-native'
import { TasksContext } from '../store/TasksContext'
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import Swipeable from './Swipeable';


const Tasks = props => {

    const tasksContext = useContext(TasksContext)
    // const loginContext = useContext(LoginContext)
    let mytasks = tasksContext.tasks
    let setCurrentID = tasksContext.setCurrentID

    useEffect(() => {
        tasksContext.getLatestTasks()
    }, [])

    // const deleteAtask = async () =>  {
    //     const deleteSuccess = await tasksContext.deleteTask(currentID)  
    // }

    const currentItem = mytasks.find(item => item.id == tasksContext.currentID)

    const ButtonCreateTask = () => {
        const navigation = useNavigation()
        return (
            <TouchableOpacity
                style={styles.createTaskButton}
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
                style={styles.updateTaskButton}
                onPress={() =>
                    navigation.navigate('UpdateTaskScreen')}
            >
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
                    <MaterialCommunityIcons name='window-close' size={30} color={'#545454'}/>
                </TouchableOpacity>
                <View style={styles.contentActiveItem}>

                <Text style={styles.itemText}>Task Id: {item.id}</Text>
                <Text style={styles.itemText}>Task name: {item.taskName}</Text>
                </View>

                <ButtonUpdateTask />

                {/* <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText} onPress={deleteAtask}>DELETE</Text>
                </TouchableOpacity> */}
            </Animated.View>
        )

    }

    return (


        <SafeAreaView style={{ flex: 1 }}>

            {
                currentItem && <ActiveItem item={currentItem} setCurrentID={setCurrentID} />
            }

            <View style={styles.container}>
            <ButtonCreateTask />
                {/* <Text>
                    Hello: {loginContext.name}
                </Text> */}

                {/* <Swipeable
                swipeRight={action}>
                    <View style={[styles.box, {backgroundColor: colorFlag ? 'blue' : 'tomato'}]}/>

                  
                </Swipeable> */}

                <MaterialCommunityIcons name='magnify' size={30} color={'#545454'} />
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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
        width: 'auto',
        paddingTop:40,
        marginTop: 100,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 30,
        borderRadius: 20,
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

    createTaskButton: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        borderWidth: 1,
        width: '40%',
        height: 50,
        top: -20,
        right:30,
        backgroundColor: '#545454',
        borderRadius: 8,
        zIndex:0
    },

    updateTaskButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        width: '50%',
        height: 50,
        margin: 30,
        backgroundColor: '#545454',
        borderRadius: 8,
    },

    createTaskTitle: {
        color: 'whitesmoke',
        textTransform: 'uppercase'
    },

    closeButton: {
        alignSelf: 'flex-end',
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
        alignItems: 'center',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 1,
        padding: 30,
        paddingTop: 60
    },
    contentActiveItem:{
        flex: 1,
        alignItems:'baseline',
        backgroundColor: 'whitesmoke',
        width: 340,
        paddingTop:40,
        paddingLeft:30,
        marginTop: 20,
        borderRadius: 20,
        shadowColor: '#545454',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.6,
    }

    
})

export default Tasks
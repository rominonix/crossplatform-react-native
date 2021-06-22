import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView, View, StyleSheet, TextInput, FlatList, Text, TouchableOpacity, Animated, Image, CheckBox } from 'react-native'
import { TasksContext } from '../store/TasksContext'
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Icon } from 'react-native-elements'
// import Swipeable from './Swipeable';
import { Swipeable } from 'react-native-gesture-handler'




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


    const deleteItem = async (id) => {
        console.log("DeleteItem")
        console.log(id)
        // console.log(tasksContext.currentID)

        try {
           const success = await tasksContext.deleteTask(id) 
        } catch (err) {
           console.log(err)
        }
     }

     
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

    const Item = ({ handleDelete,item, onPress }) => {
        const leftSwipe = () => {
            
            return (
                <TouchableOpacity onPress={handleDelete}>
                    <View style={{ backgroundColor: 'red', justifyContent: 'center', width: 100, alignItems: 'center', height: 50, marginTop: 10, padding: 0, borderRadius: 10 }}>
                        <Text>Delete</Text>
                    </View>
                </TouchableOpacity>
            )
        }
        return (
            <Swipeable
                renderLeftActions={leftSwipe}>
                <View>
                    <TouchableOpacity style={styles.item} onPress={onPress}>
                        <Text style={styles.itemText}>{item.taskName}</Text>
                    </TouchableOpacity>
                </View>
            </Swipeable>
        )
    }

    const ActiveItem = ({ setCurrentID, item }) => {
        const scale = new Animated.Value(0)
        const [isNew, setNew] = useState(false);
        const [isInprograss, setInprograss] = useState(false)
        const [isDone, setDone] = useState(false)
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
                    <MaterialCommunityIcons name='window-close' size={30} color={'#545454'} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
                    <Text style={{ justifyContent: 'flex-start', flex: 1, fontSize: 18 }}>{item.taskName}</Text>
                    <TouchableOpacity style={{ justifyContent: 'flex-end' }}>
                        <Image style={{ width: 20, height: 20 }} source={require('../assets/update-icon1.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 30 }}>
                    <Text style={{ justifyContent: 'flex-start', flex: 1, fontSize: 18 }}>Client ID: </Text>
                    <Text style={styles.activeItemHeading} >{item.id}</Text>
                </View>
                <View style={{ marginTop: 30, flex: 1, justifyContent: 'flex-start', }}>
                    <Text style={{ fontSize: 18 }}>Task images:</Text>
                    <View style={{ width: 50, height: 50, borderWidth: 1, borderStyle: 'dashed', borderRadius: 1, marginTop: 10 }} />
                </View>
                <View style={{ flexDirection: 'row', marginTop: '30%' }}>
                    <Text style={{ justifyContent: 'flex-start', flex: 1, fontSize: 18 }}>Messages:</Text>
                    <View style={{ marginTop: 30, marginRight: '30%' }}>
                        <Text >Messages 1</Text>
                        <Text >Messages 2</Text>
                        <Text >Messages 3</Text>
                        <TouchableOpacity style={{ marginTop: 30, }}>
                            <Text >Load more +</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 30 }}>
                    <Text style={{ fontSize: 18, marginRight: 45 }}>Status:</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
                        <View style={{ margin: 0 }}>
                            <CheckBox value={isNew} onValueChange={setNew} style={styles.checkbox} />
                            <Text >New</Text>
                        </View>
                        <View>
                            <CheckBox value={isInprograss} onValueChange={setInprograss} style={styles.checkbox} />
                            <Text >In prograss</Text>
                        </View>
                        <View>
                            <CheckBox value={isDone} onValueChange={setDone} style={styles.checkbox} />
                            <Text >Done</Text>
                        </View>
                    </View>

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
                <View style={styles.inputContainer}>
                    <Icon
                        name='search'
                        type='font-awesome'
                        color='#545454'
                        style={{ marginTop: 20, marginRight: 20 }}
                    />
                    <TextInput style={styles.input} />
                </View>

                <FlatList style={styles.list}
                    data={mytasks}
                    keyExtractor={item => String(item.id)}
                    renderItem={(props) => <Item 
                        item={props.item}
                        onPress={() => setCurrentID(props.item.id)} 
                        handleDelete={()=>deleteItem(props.item.id)}

                         />} />
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
        paddingTop: 40,
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
        marginTop: 20,
        borderRadius: 5,
        borderColor: '#545454',
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
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
        right: 30,
        backgroundColor: '#545454',
        borderRadius: 8,
        zIndex: 0
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
        marginTop: 10,
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
        backgroundColor: 'whitesmoke',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        // top: 0,
        // left: 0,
        // bottom: 0,
        // right: 0,
        height: '85%',
        marginTop: 80,
        marginLeft: 20,
        marginRight: 20,
        width: '90%',
        borderRadius: 20,
        zIndex: 1,
        padding: 30,
        paddingTop: 40,
    },
    contentActiveItem: {
        flex: 1,
        alignItems: 'baseline',
        backgroundColor: 'whitesmoke',
        width: 340,
        paddingTop: 40,
        paddingLeft: 30,
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
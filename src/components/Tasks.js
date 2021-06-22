import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView, View, StyleSheet, TextInput, FlatList, Text, TouchableOpacity, Animated, Image, CheckBox } from 'react-native'
import { TasksContext } from '../store/TasksContext'
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Icon } from 'react-native-elements'
import { Swipeable } from 'react-native-gesture-handler'
import styles from '../styles/index';

const Tasks = props => {

    const tasksContext = useContext(TasksContext)
    let mytasks = tasksContext.tasks
    let setCurrentID = tasksContext.setCurrentID

    useEffect(() => {
        tasksContext.getLatestTasks()
    }, [])

    const currentItem = mytasks.find(item => item.id == tasksContext.currentID)

    const deleteItem = async (id) => {

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

    const Item = ({ handleDelete, item, onPress }) => {
        const leftSwipe = () => {
            return (
                <TouchableOpacity onPress={handleDelete}>
                    <View style={styles.leftSwipe}>
                        <MaterialCommunityIcons 
                        name='delete-outline' 
                        size={30} 
                        color={'#545454'}/>
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
        const [isInprogress, setInprogress] = useState(false)
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
                    <MaterialCommunityIcons 
                    name='window-close' 
                    size={30} 
                    color={'#545454'} />
                </TouchableOpacity>
                <View style={styles.gridTaskName}>
                    <Text style={styles.textTask}>{item.taskName}</Text>
                    <TouchableOpacity style={styles.iconUpdate}>
                        <Image style={styles.iconSize} 
                        source={require('../assets/update-icon1.png')}>   
                        </Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.gridClientId}>
                    <Text style={styles.textTask}>Client ID: </Text>
                    <Text style={styles.activeItemHeading} >{item.id}</Text>
                </View>
                <View style={styles.gridTaskImg}>
                    <Text style={styles.textImg}>Task images:</Text>
                    <View style={styles.imgBox} />
                </View>
                <View style={styles.gridMessages}>
                    <Text style={styles.textTask}>Messages:</Text>
                    <View style={styles.listMsg}>
                        <Text >Messages 1</Text>
                        <Text >Messages 2</Text>
                        <Text >Messages 3</Text>
                        <TouchableOpacity style={styles.loadMore}>
                            <Text >Load more +</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.gridStatus}>
                    <Text style={styles.textStatus}>Status:</Text>
                    <View style={styles.gridCheckbox}>
                        <View>
                            <CheckBox 
                            value={isNew} 
                            onValueChange={setNew} 
                            style={styles.checkbox} />
                            <Text >New</Text>
                        </View>
                        <View>
                            <CheckBox 
                            value={isInprogress} 
                            onValueChange={setInprogress} 
                            style={styles.checkbox} />
                            <Text>In progress</Text>
                        </View>
                        <View>
                            <CheckBox 
                            value={isDone} 
                            onValueChange={setDone} 
                            style={styles.checkbox} />
                            <Text >Done</Text>
                        </View>
                    </View>

                </View>

                <ButtonUpdateTask />

            </Animated.View>
        )
    }


    return (

        <SafeAreaView style={{ flex: 1 }}>

            {
                currentItem && <ActiveItem item={currentItem} setCurrentID={setCurrentID} />
            }

            <View style={styles.containerTask}>
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
                        handleDelete={() => deleteItem(props.item.id)}

                    />} />
            </View>
        </SafeAreaView>
    )
}

export default Tasks
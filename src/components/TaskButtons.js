import React, { useContext, useEffect, useState } from 'react'
import {Text, TouchableOpacity} from 'react-native'
// import { TasksContext } from '../store/TasksContext'
import { useNavigation } from '@react-navigation/native';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Icon } from 'react-native-elements'

const TasksButtons = () => {

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
}


export default { TasksButtons, ButtonUpdateTask, ButtonCreateTask}
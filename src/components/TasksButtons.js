import React, { useContext, useEffect, useState } from 'react'
import {Text, TouchableOpacity} from 'react-native'
import { TasksContext } from '../store/TasksContext'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import MainTaskStack from '../navigators/MainTaskStack';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Icon } from 'react-native-elements'

const TasksButtons = props => {

   

    const ButtonCreateTask = () => {
        const navigation = useNavigation()
        return (
            <TouchableOpacity
                // style={styles.createTaskButton}
                onPress={() =>
                    navigation.navigate('CreateTask')}>
                <Text
                    // style={styles.createTaskTitle}
                    >
                    Create task
                </Text>
            </TouchableOpacity>
        )
    }
    
    const ButtonUpdateTask = () => {
        // const navigation = useNavigation()
        // return (
        //     <TouchableOpacity
        //         // style={styles.updateTaskButton}
        //         onPress={() =>
        //             navigation.navigate('UpdateTask')}
        //     >
        //         <Text
        //             // style={styles.createTaskTitle}
        //             >
        //             Update task
        //         </Text>
        //     </TouchableOpacity>
        // )

        const navigation = useNavigation()
        const [showUpdateTask, setShowUpdateTask] = useState(false)
        return (
            <TouchableOpacity
                // style={styles.updateTaskButton}
                onPress={() =>
                    navigation.navigate('UpdateTask'),
                    setShowUpdateTask(!showUpdateTask)
                }
                    
            >
                <Text
                    // style={styles.createTaskTitle}
                    >
                    Update task
                </Text>
            </TouchableOpacity>
        )
    }

   return(
       <ButtonCreateTask/>,
       <ButtonUpdateTask/>
   )

}


export default TasksButtons
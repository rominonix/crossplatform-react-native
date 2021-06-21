import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Task from '../components/Tasks'
import NewTask from '../components/NewTask'
import UpdateTask from '../components/UpdateTask'
// import CreateTask from '../screens/CreateTask'
// import UpdateTaskScreen from '../screens/UpdateTaskScreen'

const Stack = createStackNavigator()
const MainTaskStack = (props) => {
    return (

        <Stack.Navigator>
            <Stack.Screen
                name="Task"
                component={Task}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='NewTask'
                component={NewTask}
                options={{ headerShown: false }} />

            <Stack.Screen
                name='UpdateTask'
                component={UpdateTask}
                options={{ headerShown: false }}
            />

            {/* <Stack.Screen
                name='CreateTask'
                component={CreateTask}
                options={{ 
                    headerShown: false,
                 }}
                options={{
                    tabBarVisible: true,
                  }}
            />

            <Stack.Screen
                name='UpdateTaskScreen'
                component={UpdateTaskScreen}
                options={{ headerShown: false }}
                options={{
                    tabBarVisible: true,
                  }}
            /> */}

        </Stack.Navigator>
    )
}
export default MainTaskStack
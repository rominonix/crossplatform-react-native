import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import Details from '../screens/Details'
import ProfileScreen from '../screens/ProfileScreen'
import TasksScreen from '../screens/TasksScreen'
// import CreateTask from '../components/CreateTask'
import CreateTask from '../screens/CreateTask'
import UpdateTaskScreen from '../screens/UpdateTaskScreen'

const Stack = createStackNavigator()
const MainStack = (props) => {
    return (

        <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='Details'
                component={Details}
                options={{ headerShown: false }} />

            <Stack.Screen
                name='TasksScreen'
                component={TasksScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='CreateTask'
                component={CreateTask}
                options={{ headerShown: false }}
                options={{
                    tabBarVisible: true,
                  }}
            />

            <Stack.Screen
                name='UpdateTaskScreen'
                component={UpdateTaskScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='ProfileScreen'
                component={ProfileScreen}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}
export default MainStack
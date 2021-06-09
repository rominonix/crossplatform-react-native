import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import UserProfile from '../screens/UserProfile'
import TasksScreen from '../screens/TasksScreen'

const Stack = createStackNavigator()
const MainStack = (props) => {
    return (

        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
            />

            <Stack.Screen
                name='TasksScreen'
                component={TasksScreen}
            />
            
            <Stack.Screen
                name='UserProfile'
                component={UserProfile}
            />

        </Stack.Navigator>
    )
}
export default MainStack
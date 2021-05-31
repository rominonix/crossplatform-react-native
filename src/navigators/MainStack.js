import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import UserProfile from '../screens/UserProfile'

const Stack = createStackNavigator()
const MainStack = (props) => {
    return (

        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Welcome' }}
            />

            <Stack.Screen
                name='UserProfile'
                component={UserProfile}
            />
        </Stack.Navigator>
    )
}
export default MainStack
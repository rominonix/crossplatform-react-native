import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import Details from '../screens/Details'

const Stack = createStackNavigator()
const MainStack = (props) => {
    return (

        <Stack.Navigator initialRouteName="Home"  >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                
                options={{headerShown: false}}
            />

            <Stack.Screen
                name='Details'
                component={Details}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}
export default MainStack
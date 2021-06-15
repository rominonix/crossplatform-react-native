import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TasksScreen from './TasksScreen'
import SettingsScreen from './SettingScreen'
import MessagesScreen from './MessageScreen'
import ProfileScreen from './ProfileScreen'


const Tab = createBottomTabNavigator();
const TabNavigator = props => {
   return (

      <Tab.Navigator initialRouteName='Tasks'>
         <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{ headerShown: false }}
         />
         <Tab.Screen name="Messages" component={MessagesScreen} options={{ headerShown: false }} />
         <Tab.Screen name="Tasks" component={TasksScreen} options={{ headerShown: false }} />
         <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      </Tab.Navigator>

   )
}
export default TabNavigator





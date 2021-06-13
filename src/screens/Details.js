import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from './SettingScreen'
import MessagesScreen from './MessageScreen'
import TasksScreen from './TasksScreen'
import ProfileScreen from './ProfileScreen'

const Tab = createBottomTabNavigator();
const TabNavigator = props => {
   return (
      <Tab.Navigator>
         <Tab.Screen name="Settings" component={SettingsScreen} options={{headerShown: false}}/>
         <Tab.Screen name="Messages" component={MessagesScreen} options={{headerShown: false}}/>
         <Tab.Screen name="Tasks" component={TasksScreen} options={{headerShown: false}}/>
         <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>
      </Tab.Navigator>
   )
}
export default TabNavigator




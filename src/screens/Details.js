import React from 'react'
// import { SafeAreaView, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TasksScreen from './TasksScreen'
import SettingsScreen from './SettingScreen'
import MessagesScreen from './MessageScreen'
import ProfileScreen from './ProfileScreen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const Tab = createBottomTabNavigator();
const TabNavigator = props => {
   return (

      <Tab.Navigator initialRouteName='Tasks' >
         <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{ headerShown: false }}
            
         />
         <Tab.Screen
            name="Messages"
            component={MessagesScreen}
            options={{
               headerShown: false,
               tabBarLabel: 'Messages',
               tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name='email-open-outline' color={color} size={size} />
               ),
            }} />
         <Tab.Screen
            name="Tasks"
            component={TasksScreen}
            options={{
               headerShown: false,
               tabBarLabel: 'Tasks',
               tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name='clipboard-check-outline' color={color} size={size} />
               ),
            }} />
         <Tab.Screen name="Profile" component={ProfileScreen} options={{
            headerShown: false,
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
               <MaterialCommunityIcons name='account-outline' color={color} size={size} />
            ),
         }} />
      </Tab.Navigator>

   )
}
export default TabNavigator





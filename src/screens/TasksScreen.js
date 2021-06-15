import React,{useEffect,useContext,useState} from 'react'

import {SafeAreaView ,Text} from 'react-native'

import { LoginContext } from '../store/LoginContext'
import { AsyncStorage } from 'react-native';



const TasksScreen = props => {
   const loginContext = useContext(LoginContext)
   const [user,setUser]=useState('')
   
   const getData=async()=>{
      try{
         //const tokenValue=await AsyncStorage.getItem('token')
         let userEmail=await AsyncStorage.getItem('email')
         if(userEmail != null){
           // userEmail = loginContext.setEmail(userEmail)
            setUser(userEmail)
            console.log(userEmail)
            
         }
      }catch(err){
         console.log(err)
      }
   }
   useEffect(()=>{
      getData()
   },[])
   return (
      <SafeAreaView style={{ flex: 1,justifycontent:'center' }}>
         <Text>{user}</Text>
      </SafeAreaView>
   )
}
export default TasksScreen
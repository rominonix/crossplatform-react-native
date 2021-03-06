import React,{useEffect,useContext,useState} from 'react'
import * as ImagePicker from 'expo-image-picker'
import { Text, TouchableOpacity, ImageBackground, View, Image} from 'react-native'
import picture from '../assets/portait.png'
import { ActionSheet, Root } from 'native-base'
import { LoginContext } from '../store/LoginContext'
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { TextInput } from 'react-native-gesture-handler'
import styles from '../styles/index'

const ProfileScreen = props => {
   const [image, setImage] = React.useState({ picture })
   const loginContext = useContext(LoginContext)
   const [user,setUser]=useState('')
   const [userPass,setUserPass]=useState('')
   

   const chooseImageFromLibrary = async () => {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (permissionResult.granted === false) {
         alert("You've refused to allow this appp to access your photos!");
         return;
      }
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
         setImage(result)
         console.log(result.uri);
      }
   }

   const takePhoto = async () => {
      const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
      if (permissionResult.granted === false) {
         alert("You've refused to allow this appp to access your camera!");
         return;
      }
      const result = await ImagePicker.launchCameraAsync();
      if (!result.cancelled) {
         setImage(result)
      }
   }

   const addImage = () => {

      const BUTTONS = ['Take Photo', 'Choose Photo', 'Cancel']
      ActionSheet.show(
         { options: BUTTONS, cancelButtonIndex: 2, title: 'Select a photo' },
         buttonIndex => {
            switch (buttonIndex) {
               case 0:
                  takePhoto()
                  break;
               case 1:
                  chooseImageFromLibrary()
                  break;
               default:
                  break;
            }
         }
      )
   }

   
   const getData=async()=>{
      try{
         const userEmail=JSON.parse(await AsyncStorage.getItem('email'))
         const userPass=JSON.parse(await AsyncStorage.getItem('password'))
         if(userEmail != null){
            setUser(userEmail) 
         }
         if(userPass != null){
            setUserPass(userPass)   
         }
      }catch(err){
         console.log(err)
      }
   }
   useEffect(()=>{
      getData()
   },[])

   const bgrImage = require('../assets/background-inside1.png')
   return (
      <Root>
         <ImageBackground source={bgrImage} style={styles.bgrImage}>
            <View style={styles.wrapper} >
               <TouchableOpacity onPress={addImage}>
                  <Image style={styles.editPictrue} source={require('../assets/camera.png')}></Image>
               </TouchableOpacity>
               {image && <Image source={{ uri: image.uri }} style={styles.imgProfile} />}
              
               <View style={styles.emailWrapper}>
                  <Text>E-mail</Text>
                  <Text style={styles.emailProfile}>{user}</Text>
                  <TouchableOpacity>
                     <Image style={styles.edit} source={require('../assets/update-icon1.png')}></Image>
                  </TouchableOpacity>
               </View>
               <View style={styles.passwordWrapper}>
                  <Text>Password</Text>
                  <TextInput secureTextEntry={true}>{userPass}</TextInput>
                  <TouchableOpacity>
                     <Image style={styles.edit} source={require('../assets/update-icon1.png')}></Image>
                  </TouchableOpacity>
               </View>
            </View>
         </ImageBackground>
      </Root>
   )
}


export default ProfileScreen

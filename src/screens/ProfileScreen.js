import React from 'react'
import * as ImagePicker from 'expo-image-picker'
import { SafeAreaView, Text, TouchableOpacity, ImageBackground, View, Image, StyleSheet, } from 'react-native'
import UserInfo from '../components/UserInfo'
import { UserContextProvider } from '../store/UserContext'
import picture from '../assets/portait.png'


const ProfileScreen = props => {
   //let portaitImage=require('../assets/portait.png')
   const [image, setImage] = React.useState({picture})

   React.useEffect(() => {
      ImagePicker.requestMediaLibraryPermissionsAsync()
         .then(response => {
            console.log(response);
         })
   }, [])

   const imageHandler = async () => {
      const result = await ImagePicker.launchImageLibraryAsync({})
      setImage(result)
   }

   const bgrImage = require('../assets/background-inside1.png')
   return (
      <ImageBackground source={bgrImage} style={styles.bgrImage}>
         <View style={styles.wrapper} >
            {image && <Image source={{ uri: image.uri }}  style={{ width: 200, height: 200, borderRadius: 50 ,borderWidth:2}}/>}
            
            <TouchableOpacity onPress={imageHandler}>
               <Image style={styles.editPictrue} source={require('../assets/camera.png')}></Image>
            </TouchableOpacity>
            < UserContextProvider>
               <UserInfo />
            </ UserContextProvider>
         </View>
      </ImageBackground>
   )
}


const styles = StyleSheet.create({
   bgrImage: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   wrapper: {
      backgroundColor: '#F5F5F5',
      padding: 50,
      borderRadius: 10
   },
   editPictrue:{
      width:50,
      height:50
   }


})
export default ProfileScreen

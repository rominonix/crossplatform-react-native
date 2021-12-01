import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView, Text, Button, View, StyleSheet, TextInput, ImageBackground, TouchableOpacity ,Image} from 'react-native'

import { UserContext } from '../store/UserContext'






const UserInfo = props => {
    const userContext = useContext(UserContext)

    useEffect(()=>{
        userContext.UserProfile()
    },[])
    

    return (

        <View style={styles.infoWrapper}>
            <View style={styles.nameWrapper}>
                <Text>Name</Text>
                <Text>{userContext.name}</Text>
                <TouchableOpacity>
                    <Image style={styles.edit} source={require('../assets/update-icon1.png')}></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.emailWrapper}>
                <Text>E-mail</Text>
                <Text style={styles.email}>{userContext.email}</Text>
                <TouchableOpacity>
                    <Image style={styles.edit} source={require('../assets/update-icon1.png')}></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.passwordWrapper}>
                <Text>Password</Text>
                <Text>.......</Text>
                <TouchableOpacity>
                    <Image style={styles.edit} source={require('../assets/update-icon1.png')}></Image>
                </TouchableOpacity>
            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    nameWrapper: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'space-between',
     },
     emailWrapper: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'space-between'
     },
     passwordWrapper: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'space-between'
     },
     email:{
         marginLeft:20
     }
     
  

})

export default UserInfo

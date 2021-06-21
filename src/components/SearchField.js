import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView, View, StyleSheet, TextInput, FlatList, Text, TouchableOpacity, Animated, Image, CheckBox } from 'react-native'
import { TasksContext } from '../store/TasksContext'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { ButtonUpdateTask, ButtonCreateTask } from './TasksButtons'
// import { Icon } from 'react-native-elements'



const SearchField = props => {
    return(

    <View >
        <MaterialCommunityIcons
        name='magnify' color={'#545454'} size={30}  
        />
        <TextInput style={{borderColor:'red', backgroundColor:'blue', borderWidth:.5,  width: '100%', height: 30,}}/>
    </View>
    )
    // borderWidth: 0.5,
    // width: '65%',
    // height: 30,
    // marginTop: 20,
    // borderRadius: 5,
    // borderColor: '#545454',

}

export default SearchField

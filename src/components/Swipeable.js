import React from 'react'
import { View, PanResponder } from 'react-native'

const Swipeable = props => {
 const panResponder = PanResponder.create({
     onStartShouldSetPanResponder:(event, gestureState) => true,
     onPanResponderRelease:(event, gestureState) =>{
         const {dx, dy, vx} = gestureState
         if(dx > 150 && dy < 80){
             props.swipeRight()
         }
     }
 })

 return(

    <View {...panResponder.panHandlers}>
        {props.children}
    </View>
 )

}
export default Swipeable
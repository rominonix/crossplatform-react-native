import React from 'react'
// import Login from '../components/Login'
import { TasksContextProvider } from '../store/TasksContext'
import Tasks from '../components/Tasks'
import { ImageBackground, SafeAreaView, Text, StyleSheet } from 'react-native'
// import image from '../assets/inside-background.png'
// import BackgroundImg from '../assets/inside-background.svg'

import BackgroundImg from '../assets/inside-background.png'

const TasksScreen = props => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={BackgroundImg} style={styles.image}>
                < TasksContextProvider>
                    <Tasks />
                </ TasksContextProvider>
            </ImageBackground>
        </SafeAreaView>

        // <SafeAreaView style={{ flex: 1 }}>

        //         <Text>
        //             heloo
        //         </Text>
        //         <BackgroundImg width={120} height={40}/>

        // </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'purple',
        width: '80%',
        borderRadius: 5

    },
    image: {
        // backgroundColor: 'purple',
        width: '100%',
        height: '100%',
        borderRadius: 5
    }
    //    content: {
    //       opacity: 0.9,
    //       backgroundColor: 'white',
    //       borderWidth: 2,
    //       margin: 10,
    //       alignItems: 'center',
    //    },
    //    emailLabel: {
    //       color: 'blue',
    //    },
    //    input: {
    //       borderRadius: 10,
    //       padding: 10,
    //       color: 'black',
    //       borderWidth: 2,
    //       borderColor: 'lightgray',
    //       width: 200,
    //       margin: 5,
    //    },
    //    buttonContainer: {
    //       margin: 10,
    //       padding: 10,
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //    }
})
// const styles = StyleSheet.create({
//     image: {height:200, width: 200}
// })
export default TasksScreen
import React, { useContext } from 'react'
import { SafeAreaView, View, StyleSheet, TextInput, FlatList, Text, TouchableOpacity } from 'react-native'
import { TasksContext } from '../store/TasksContext'
// import BackgroundImg from '../assets/inside-background.png'
const Tasks = props => {
    const taskContext = useContext(TasksContext)
    const taskHandler = async () => {
        const success = await taskContext.login()
        props.navigation.navigate('UserProfile')
    }
    const data = [
        { id: '1', title: 'Grillkorv', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci qui laboriosam nihil repudiandae quod temporibus!' },
        { id: '2', title: 'Bananpaj', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci qui laboriosam nihil repudiandae quod temporibus!' },
        { id: '3', title: 'Sötsursås', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci qui laboriosam nihil repudiandae quod temporibus!' },
        { id: '4', title: 'Grillbanan', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci qui laboriosam nihil repudiandae quod temporibus!' },
        { id: '5', title: 'Korvpaj', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci qui laboriosam nihil repudiandae quod temporibus!' },
        { id: '6', title: 'Banan med bröd', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci qui laboriosam nihil repudiandae quod temporibus!' },
    ]


    const Item = ({item, onPress}) => {
        return (
          <View>
            <TouchableOpacity style={styles.item} onPress={onPress}>
              <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>
          </View>
        )
      }



    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TextInput style={styles.input}>

                </TextInput>

                <FlatList   style={styles.list}
        data={data}
        keyExtractor={item => item.id}
        renderItem={ (props) => <Item item={props.item} onPress={() => setCurrentID(props.item.id)} />}/>

              

                {/* <TouchableOpacity 
                style={styles.taskButton} onPress={taskHandler}>
                    <Text style={styles.buttonTitle}>
                        Task title
                    </Text>
                </TouchableOpacity> */}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
        width: 'auto',
        marginTop: 80,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 80,
        borderRadius: 30,
        shadowColor: '#545454',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.6,
    },
    input: {
        borderWidth: 0.5,
        width: '65%',
        height: 30,
        marginTop: 40,
        borderRadius: 5,
        borderColor: '#545454',
    },

    taskButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#545454',
        width: '80%',
        height: 50,
        borderStyle: 'dashed',
        margin: 30,
        // strokeDasharray:"8, 3",
        borderRadius: 10,
    },

    buttonTitle: {
        color: '#545454',
        textTransform: 'uppercase'
    },

    list: {
        width: '90%',
        marginTop: 15,
    },
    item: {
        marginTop: 30,
        marginLeft:20,
        marginRight:20,
        padding: 15,
        borderRadius:10,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#545454',
        alignItems: 'center',
        // justifyContent: 'center',
        // borderBottomWidth: 1,
        // backgroundColor: 'rebeccapurple'
      },
      itemText: {
        color: '#545454',
        fontSize: 18
      },
      activeItem: {
        backgroundColor: 'brown',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 1,
        padding: 30,
        paddingTop: 60    
      },
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

export default Tasks
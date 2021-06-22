import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    containerTask: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
        width: 'auto',
        paddingTop: 40,
        marginTop: 100,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 30,
        borderRadius: 20,
        shadowColor: '#545454',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.6,
    },

    containerEditTask: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
        width: 'auto',
        paddingTop: 40,
        marginTop: 40,
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

    labelEditTask: {
        color: '#545454',
        fontSize: 18,
    },

    input: {
        borderWidth: 0.5,
        width: '65%',
        height: 30,
        marginTop: 20,
        borderRadius: 5,
        borderColor: '#545454',
    },

    inputEditTask: {
        borderWidth: 0.5,
        width: '65%',
        height: 30,
        marginTop: 10,
        marginBottom: 30,
        borderRadius: 5,
        borderColor: '#545454',
    },

    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    createTaskButton: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        borderWidth: 1,
        width: '40%',
        height: 50,
        top: -20,
        right: 30,
        backgroundColor: '#545454',
        borderRadius: 8,
        zIndex: 0
    },

    updateTaskButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        width: '50%',
        height: 50,
        margin: 30,
        backgroundColor: '#545454',
        borderRadius: 8,
    },

    createTaskTitle: {
        color: 'whitesmoke',
        textTransform: 'uppercase'
    },

    closeButton: {
        alignSelf: 'flex-end',
    },

    confirmButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        width: '50%',
        height: 50,
        margin: 30,
        backgroundColor: '#545454',
        borderRadius: 8,
    },

    confirmTitle: {
        color: 'whitesmoke',
        textTransform: 'uppercase'
    },

    list: {
        width: '90%',
        marginTop: 15,
    },
    item: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#545454',
        alignItems: 'center',
    },

    itemTextEditTask: {
        color: '#747474',
        fontSize: 18,
        marginBottom: 30,
    },

    itemText: {
        color: '#545454',
        fontSize: 18
    },
    activeItem: {
        backgroundColor: 'whitesmoke',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        height: '85%',
        marginTop: 80,
        marginLeft: 20,
        marginRight: 20,
        width: '90%',
        borderRadius: 20,
        zIndex: 1,
        padding: 30,
        paddingTop: 40,
    },
    contentActiveItem: {
        flex: 1,
        alignItems: 'baseline',
        backgroundColor: 'whitesmoke',
        width: 340,
        paddingTop: 40,
        paddingLeft: 30,
        marginTop: 20,
        borderRadius: 20,
        shadowColor: '#545454',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.6,
    },
    gridTaskName: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    },
    textTask: {
        justifyContent: 'flex-start',
        flex: 1,
        fontSize: 18

    },
    iconUpdate: {
        justifyContent: 'flex-end'
    },

    iconSize: {
        width: 20,
        height: 20
    },

    gridClientId: {
        flexDirection: 'row',
        marginTop: 30
    },

    gridTaskImg: {
        marginTop: 30,
        flex: 1,
        justifyContent: 'flex-start'
    },

    textImg: {
        fontSize: 18
    },
    imgBox: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 1,
        marginTop: 10
    },
    gridMessages: {
        flexDirection: 'row',
        marginTop: '30%'
    },
    listMsg: {
        marginTop: 30,
        marginRight: '30%'
    },

    loadMore: {
        marginTop: 30
    },

    gridStatus: {
        flexDirection: 'row',
        marginTop: 30
    },

    textStatus: {
        fontSize: 18,
        marginRight: 45
    },

    gridCheckbox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1
    },

    leftSwipe: {
        backgroundColor: '#D6796A',
        justifyContent: 'center',
        width: 100,
        alignItems: 'center',
        height: 50,
        marginTop: 10,
        padding: 0,
        borderRadius: 10
    },

    image: {
        width: '100%',
        height: '100%',
    },

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
    editPictrue: {
        width: 30,
        height: 30
    },

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
    emailProfile: {
        marginLeft: 20
    },

    imgProfile: {
        width: 200,
        height: 200,
        borderRadius: 50,
        borderWidth: 2
    },

    splashContainer: {
        flex: 1,
        flexDirection: 'column'
    },

    splashImg: {
        flex: 1,
        justifyContent: "center",
        width: '100%',
        height: '100%',
    },

    containerNewTask: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
        width: 'auto',
        paddingTop: 60,
        marginTop: 100,
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

    inputNewTask: {
        borderWidth: 0.5,
        width: '65%',
        height: 30,
        marginBottom: 40,
        marginTop: 10,
        borderRadius: 5,
        borderColor: '#545454',
    },
    labelNewTask: {
        color: '#545454',
        fontSize: 18,
    },

    addTaskButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        width: '50%',
        height: 50,
        margin: 30,
        backgroundColor: '#545454',
        borderRadius: 8,
    },

    addTaskTitle: {
        color: 'whitesmoke',
        textTransform: 'uppercase'
    },

    wrapperLogin: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bgrImageLogin: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerLogin: {
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        position: 'absolute',
        top: 0,
        elevation: 9,
        marginTop: 180,
        marginBottom: 180,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#CFDEEC',
        justifyContent: 'center',
        borderRadius: 10
    },
    labelLogin: {
        color: '#5A5454',
        alignSelf: 'flex-start',
        marginLeft: 50,
        marginBottom: 5,
        marginTop: 30
    },

    inputLogin: {
        borderRadius: 10,
        padding: 10,
        width: 230,
        marginTop: 5,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#F5F5F5'
    },
    buttonContainerLogin: {
        width: 120,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 40,
        backgroundColor: '#5A5454'
    },
    titleLogin: {
        fontSize: 14,
        color: '#f5f5f5'
    }


})



export default styles
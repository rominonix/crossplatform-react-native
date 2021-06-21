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
        paddingTop:40,
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
        fontSize:18,
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
        marginTop:10,
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
        marginBottom:30,
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
        // top: 0,
        // left: 0,
        // bottom: 0,
        // right: 0,
        height: '85%',
        marginTop: 80,
        marginLeft: 20,
        marginRight:20,
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
    gridTaskName:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginTop: 30
    },
    textTask:{
        justifyContent: 'flex-start', 
        flex: 1, 
        fontSize: 18

    }, 
    iconUpdate:{
        justifyContent: 'flex-end'
    },

    iconSize:{
        width: 20, 
        height: 20
    }, 

    gridClientId:{
        flexDirection: 'row', 
        marginTop: 30
    },

    gridTaskImg:{
        marginTop: 30, 
        flex: 1, 
        justifyContent: 'flex-start'
    },

    textImg:{
        fontSize:18
    },
    imgBox:{
        width: 50, 
        height: 50, 
        borderWidth: 1, 
        borderStyle: 'dashed', 
        borderRadius: 1, 
        marginTop: 10
    },
    gridMessages:{
        flexDirection: 'row',
        marginTop: '30%'
    },
    listMsg:{
        marginTop: 30, 
        marginRight: '30%'
    },

    loadMore:{
        marginTop: 30
    },

    gridStatus:{
        flexDirection: 'row', 
        marginTop: 30
    },

    textStatus:{
        fontSize: 18,
        marginRight:45
    },

    gridCheckbox:{
        flexDirection: 'row',
        justifyContent: 'space-between', 
        flex: 1
    }


})



export default styles
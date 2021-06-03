import React, {useState} from 'react'
import * as API from '@/api'

const TasksContext = React.createContext()

const TasksContextProvider = (props) => {
 const [username, setUserName] = useState('')

 const [tasks, setTasks] = useState([])

 const getLatestTasks = async () => {
 const latestTasks = await API.fetchLatestTasks()
 
 setTasks([...tasks,...latestTasks])
 setUserName(username)
 
 }
    return (
        <TasksContext.Provider value={{username, getLatestTasks}}>
            {props.children}
        </TasksContext.Provider>
    )
}

 export { TasksContextProvider, TasksContext }
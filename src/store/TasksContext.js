import React, {useState} from 'react'
import * as API from '@/api'

const TasksContext = React.createContext()

const TasksContextProvider = (props) => {
 const [tasktitle, setTaskTitle] = useState('')

//  const [tasks, setTasks] = useState([])

 const getLatestTasks = async () => {
 const latestTasks = await API.fetchLatestTasks()
 
 setTasks([...tasks,...latestTasks])
//  setUserName(username)
 
 }
    return (
        <TasksContext.Provider value={{tasktitle, setTaskTitle, getLatestTasks}}>
            {props.children}
        </TasksContext.Provider>
    )
}

 export { TasksContextProvider, TasksContext }
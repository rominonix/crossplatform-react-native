import React, { useState } from 'react'
import * as API from '@/api'

const TasksContext = React.createContext()

const TasksContextProvider = (props) => {
    const [tasks, setTasks] = useState([])
    const [taskName, setTaskName] = useState('')
    const [clientId, setClientId] = useState('')

    const getLatestTasks = async () => {
        const latestTasks = await API.gettasks(tasks)
        setTasks([...latestTasks.workerTask])
    }

    const createNewTask = async () => {
        console.log("holi bolis");
        const newTask = await API.newtask(taskName, clientId)
        setTaskName(newTask.taskName)
        setClientId(newTask.clientId)
    }
    return (
        <TasksContext.Provider
            value={{
                tasks,
                setTasks,
                taskName,
                setTaskName,
                clientId,
                setClientId,
                getLatestTasks,
                createNewTask
            }}>
            {props.children}
        </TasksContext.Provider>
    )
}

export { TasksContextProvider, TasksContext }
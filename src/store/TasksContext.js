import React, { useState } from 'react'
import * as API from '@/api'

const TasksContext = React.createContext()

const TasksContextProvider = (props) => {
    const [tasks, setTasks] = useState([])
    const [taskName, setTaskName] = useState('')
    const [clientId, setClientId] = useState('')
    const [currentTask, setCurrentTask] = useState("")
    const [currentTaskName, setCurrentTaskName] = useState("")
    const [taskStatus, setTaskStatus] = useState(null)
    const [currentID, setCurrentID] = useState(null)
   

    const getLatestTasks = async () => {
        const latestTasks = await API.gettasks(tasks)
        setTasks([...latestTasks.workerTask])
    }

    const getTask = async () => {
        const getMyTask = await API.gettaskbyid(currentID)
        setCurrentTaskName(getMyTask.task.taskName)
    }

    const createNewTask = async () => {
        const newTask = await API.newtask(taskName, clientId)
        setTaskName(newTask.taskName)
        setClientId(newTask.clientId)
    }

    const updateTask = async () => {
        const updTask = await API.updatetask(currentID, taskName, clientId, taskStatus)
    }

    const deleteTask = async () => {
        console.log(currentID);
        const dltTask = await API.deletetask(currentID)
        // setCurrentID(dltTask.currentID)
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
                getTask,
                currentID,
                setCurrentID,
                currentTask,
                currentTaskName,
                taskStatus,
                setTaskStatus,
                getLatestTasks,
                createNewTask,
                updateTask,
                deleteTask,
            }}>
            {props.children}
        </TasksContext.Provider>
    )
}

export { TasksContextProvider, TasksContext }
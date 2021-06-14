import axios from 'axios'
axios.defaults.baseURL = 'http://192.168.1.154:3000';

const API = axios.create()

export async function authenticate(email, password) {
   const response = await API.post('/login', { email, password })

   if (response.status == 200) {
      API.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`
      return response.data
   }
   else {
      console.error({ msg: "Invalid credentials" })
   }
}

export async function gettasks(tasks) {
   const response = await API.get('/tasks/worker', tasks)
   if (response.status == 200) { 
      return response.data }
   else {
      console.error({ msg: "error with tasks" })
   }
}


export async function newtask(taskName, clientId) {
   const response = await API.post('/tasks', {taskName, clientId})
   if (response.status == 200) { 
      return response.data }
   else {
      console.error({ msg: "error with tasks" })
   }
}

export async function updatetask(taskName, clientId) {
   const response = await API.patch('/tasks/:id', {taskName, clientId})
   if (response.status == 200) { 
      return response.data }
   else {
      console.error({ msg: "cannot update task" })
   }
}

export async function deletetask(currentID) {
   console.log(currentID);
   
   
  

   const response = await API.delete('/tasks/',{params: currentID})
   if (response.status == 200) { 
      return response.data }
   else {
      console.error({ msg: "cannot delete task" })
   }
}

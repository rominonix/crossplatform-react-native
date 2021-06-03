import axios from 'axios'


const HOST = '10.0.2.2'
const API = axios.create(
 {baseUrl:`http://${HOST}:1337/api/v6`}
)

export async function fetchUsers(){
   const response = await API.post('/login')
   if(response.code == 200){ return response.data }
   else{
      response.error({msg: "unauthenticate"})
   }
  }


export async function fetchLatestTasks(){
 const response = await API.get('/tasks')
 if(response.code == 200){ return response.data }
 else{
    response.error({msg: "error with tasks"})
 }
}

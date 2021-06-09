import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:3000';

const API = axios.create()

export async function authenticate(email, password) {
  
   const response = await API.post('/login',{ email, password })

   if (response.status == 200) {API.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`
   return response.data}
   else {
      console.error({ msg: "invalid credentials" })
   }
}


// export async function fetchLatestTasks(){
//  const response = await API.get('/tasks')
//  if(response.code == 200){ return response.data }
//  else{
//     response.error({msg: "error with tasks"})
//  }
// }

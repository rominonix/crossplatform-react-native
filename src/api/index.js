import axios from 'axios'

const HOST = '10.0.2.2'
const API = axios.create(
   { baseUrl: `http://${HOST}:3000` }
)

export async function authenticate(email, password) {

   const response = await API.post('/login',
      { email, password })

   if (response.code == 200) { return response.data }
   else {
      response.error({ msg: "invalid credentials" })
   }
}


// export async function fetchLatestTasks(){
//  const response = await API.get('/tasks')
//  if(response.code == 200){ return response.data }
//  else{
//     response.error({msg: "error with tasks"})
//  }
// }

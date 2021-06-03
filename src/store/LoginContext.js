import React, {useState} from 'react'
import * as API from '../api/index'

const LoginContext = React.createContext()

const LoginContextProvider = (props) => {
 const [username, setUserName] = useState('')
 const [password, setPassword] = useState('')
 

 const login = async () => {
 const userLogin = await API.fetchUsers()
 
 
 setUserName(username,userLogin)
 setPassword(password,userLogin)
 }
    return (
        <LoginContext.Provider value={{username,password,login}}>
            {props.children}
        </LoginContext.Provider>
    )
}

 export { LoginContextProvider, LoginContext }
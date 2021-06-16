import React, { useState } from 'react'
import * as API from '../api/index'

const UserContext = React.createContext()

const UserContextProvider = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [token, setToken] = useState('')


    const UserProfile = async () => {
        const profile = await API.getMe('email', 'name')
        setEmail(profile.email)
        setToken(profile.token)
        setName(profile.name)
    }
    return (
        < UserContext.Provider value={{email, setEmail, setToken, token, password, setPassword, UserProfile,name, setName}}>
            {props.children}
        </ UserContext.Provider>
    )
}

export { UserContextProvider,  UserContext }
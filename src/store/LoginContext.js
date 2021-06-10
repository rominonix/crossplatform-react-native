import React, { useState } from 'react'
import * as API from '../api/index'

const LoginContext = React.createContext()

const LoginContextProvider = (props) => {
    const [email, setEmail] = useState('')
    const [token, setToken] = useState('')
    const [password, setPassword] = useState('')


    const login = async () => {
        const userLogin = await API.authenticate('worker1@email.com', 'bananpaj1')
        setEmail(userLogin.email)
        setToken(userLogin.token)
    }
    return (
        <LoginContext.Provider value={{email, setEmail, setToken, token, password, setPassword, login}}>
            {props.children}
        </LoginContext.Provider>
    )
}

export { LoginContextProvider, LoginContext }
import React, { useState } from 'react'
import * as API from '../api/index'

const LoginContext = React.createContext()

const LoginContextProvider = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const login = async () => {
        const userLogin = await API.authenticate()


        setEmail(email, userLogin)
        setPassword(password, userLogin)
    }
    return (
        <LoginContext.Provider value={{ username, setEmail, setPassword, password, login }}>
            {props.children}
        </LoginContext.Provider>
    )
}

export { LoginContextProvider, LoginContext }
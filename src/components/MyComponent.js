import React from 'react'

const MyContext = React.createContext()

const MyContextProvider = (props) => {
    return (
        <MyContext.Provider value={{theme: 'dark'}}>
            {props.children}
        </MyContext.Provider>
    )
}

export {MyContextProvider, MyContext}
import React, {useEffect} from 'react'
import {BrowserRouter as Router} from "react-router-dom";
import {useRoutes} from "./routes";
import {notify, notifyInit} from './utils/utils';
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";
import NavBar from "./Components/NavBar";


const App = () => {

    const {logout, login, token, userId} = useAuth()
    const isAuthenticated = !!token;

    useEffect(() => {
        notifyInit()
    }, [])
    const routes = useRoutes(isAuthenticated)
    return (
        <AuthContext.Provider value={{logout, login, userId, token}}>
            <NavBar />
            <Router>
                {routes}
            </Router>
        </AuthContext.Provider>
    )
}

export default App


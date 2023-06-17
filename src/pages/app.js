import React,{useContext} from "react";
import {Router} from '@reach/router'
import { navigate } from "gatsby";
import { IdentityContext } from "../../identity-context";
import PrivateRoute from "../components/private-route";

const Dashboard = () => (<h1>Dashboard</h1>)
const Default = () => (<h1>Main App</h1>)
const Login = () => {
    const {netlifyIdentity} = useContext(IdentityContext)
    netlifyIdentity.on('login',(user) =>{
        navigate('/app/dashboard')
    })
    return(
        <div>
            <h1>Login</h1>
            <button onClick={ ()=> {
                netlifyIdentity.open()
            } }>Login</button>
        </div>

)
}


const App = () => {
    return (
        <Router basepath="/app">
            <PrivateRoute component={Dashboard} path='/dashboard'/>
            <Login path='/login'/>
            <Default path='/'/>
        </Router>
    )
}

export default App
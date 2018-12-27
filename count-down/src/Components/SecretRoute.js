import React from 'react' 
import {Redirect, Route} from 'react-router-dom'
import Users from './Users'
import AuthenticatedUser from './AuthenticatedUser'


const SecretRoute = ({component: Component, ...rest}) =>(
    <Route {...rest} render = {(props) => (
        AuthenticatedUser.isAuthenticated === true
        ? <Users {...props}/>
        : <Redirect to= {{ pathname:'/login',
                            state:{from: props.location} }}/>

    )}/>
)

export default SecretRoute
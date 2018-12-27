import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import AuthenticatedUser from './AuthenticatedUser'

class Login extends Component{
    constructor(props){
        super(props)
       this.state = {
        redirectToReferrer: false,
        users: [
            {
                'Name': 'Ada',
                'roleId': 1,
                'Password': 'yay'
            },
            {
                'Name': 'Sheldon',
                'roleId': 2,
                'Password': 'hello'
            },
            {
                'Name': 'Obama',
                'roleId': 3,
                'Password': 'yollo'
            },
        ],
             
       }
       
    }
    
    login = (e)=>{
        e.preventDefault()
        AuthenticatedUser.authenticate(() =>{
            this.handleOnChange.bind(this)
            this.setState(()=> ({
                redirectToReferrer: true, 
            }))
        })
    }
    
    handleOnChange = (e)=>{
        const {value} = e.target
        const {users} = this.state
        for(let i in users){
            if(users[i].Password === value){
             var userObject = users[i].roleId;
            } 
        }
        let user =users.filter(user => user.roleId === (userObject))
        localStorage.setItem("user", JSON.stringify(user));
       
    }
    
   

    render(){
        const {redirectToReferrer} = this.state
        if (redirectToReferrer === true){
            return <Redirect to = '/user'/>
        }
        
        return(
            <div className=" col-lg-6 col-sm-12 col-lg-offset3">
            <h1>Login</h1>
            <form onSubmit = {this.login}>
                <input className = 'userinfo' type="text" name="username" placeholder="Username" required="required" />
                <input className = 'userinfo' type="password" name="password" onChange={this.handleOnChange} placeholder="Password" required="required" />
                <button type="submit" className="btn btn-large">Sign in</button>
            </form>
            </div>
        )
    }

}

export default Login
import React, {Component} from 'react'
import Admin from './Admin'
import Login from './Login'
import Customercare from './Customercare'
import Store from './Store'


class Users extends Component{
    constructor(){
        super()
        this.state ={
            users: []
        }
    }
    componentDidMount(){
        let user = localStorage.getItem('user')
       this.setState({
           users: JSON.parse(user)
       }) 
    }


    render(){
        const {users} = this.state
        const roleId =users.length> 0? users[0].roleId:undefined
        if (roleId === 1){
            return  <Admin roleId = {this.state.users}/>
        }else if (roleId === 2){
            return <Customercare roleId = {this.state.users} />
        }else if(roleId === 3){
            return <Store roleId = {this.state.users}/>
        }
        return(
            <div> 
                
                <Login/>    
                Wrong Username or Password!        
            </div>
        )
    }

}
export default Users
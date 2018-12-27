import React, {Component} from 'react'

import {BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

//importing Componets
import Home from './Components/Home'
import Admin from './Components/Admin'
import Users from './Components/Users'
import Customercare from './Components/Customercare'
import Login from './Components/Login'
import SecretRoute from './Components/SecretRoute'
import FinanceSummary from './Components/FinanceSummary'
import Denied from './Components/Authourization';
import Inventory from './Components/Inventory';
import Report from './Components/Report';
import Deposit from './Components/Deposit';
// import Landing from './Components/Landing';



class App extends Component{
  constructor(){
    super()
    this.state ={
      users: [],
    }
  }
  componentWillMount(){
    let user = localStorage.getItem('user')
    this.setState({
        users: JSON.parse(user)
    }) 
  }

  render(){
    const {users} = this.state
    const roleId = users.length > 0? users[0].roleId:undefined
    console.log(roleId)
    return(
      <Router>
        <div>
        <Route exact path= '/' component= {Home}/> 
        <Route path= '/admin' component= {Admin}/>
        <Route exact path= '/denied' component= {Denied}/>
        <SecretRoute exact path= '/user' component= {Users}/>        
        <Route exact path= '/customercare' component= {Customercare}/> 
        <Route exact path= '/login' component= {Login}/>
        <Route exact path= '/financesummary' 
          render = {() => roleId ===1 || roleId ===2 ? <FinanceSummary/> :
          <Redirect to = '/denied'/>
        }/> 
         <Route exact path= '/inventory' 
          render = {() => roleId ===1 || roleId ===3 ? <Inventory/> :
          <Redirect to = '/denied'/>
        }/> 
          <Route exact path= '/report' 
          render = {() => roleId ===1 || roleId ===3 ? <Report/> :
          <Redirect to = '/denied'/>
        }/> 
          <Route exact path= '/deposit' 
          render = {() => roleId ===1 || roleId ===2 ? <Deposit/> :
          <Redirect to = '/denied'/>
        }/> 
      
      
        </div>      
      </Router>
    )
  } 
}
export default App
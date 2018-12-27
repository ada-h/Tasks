import React from 'react' 
import {Link} from 'react-router-dom'
import Login from './Login'


const Home =()=> {
        return(
            <div>
                <Link to ='/user'> <h1>Users</h1></Link>
                <Login/>
            </div>
        )
}
export default Home
import React from 'react'
import {Link} from 'react-router-dom'

const Denied = () =>{
    return(
        <div>
            <p> You are not allowed to view this page</p>
            <Link to = '/user'> Back to Previous Page? </Link>
        </div>
    )
}
export default Denied
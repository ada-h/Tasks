import React from 'react'
import {Link} from 'react-router-dom'

const AuthourizedLink = () =>{
    return(
        <div>
            <Link to = '/financesummary'> Finance Summary</Link><br/>
            <Link to = '/inventory'> Inventory</Link><br/>
            <Link to = '/deposit'> Deposit</Link><br/>
            <Link to = '/report'>Report</Link><br/>
        </div>
    )
}

export default AuthourizedLink
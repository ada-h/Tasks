import React from 'react'
import AuthourizedLink from './Links'

const Store = () =>{
    return(
        <div> This is for the store. You can only view inventory and report
             <AuthourizedLink/>
        </div>
    )
}

export default Store
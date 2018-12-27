import React, {Component} from 'react'

class Landing extends Component{
    
    constructor(){
        super()
        this.state = {
            hover: false
        }
    }
    render (){ 
    return(
        <div className= 'portfoliobody'>

            <div className={this.state.hover? 'works' : 'portfolio'} 
                onMouseEnter = {()=>{this.setState({hover:true})}} 
                onMouseLeave = {() => this.setState({hover:false})}>
                <h1 className="name"> OSAKWE</h1>
                <h1 className="surname"> ADAOBI</h1>

            </div>
        </div>
    )
    }
}

export default Landing
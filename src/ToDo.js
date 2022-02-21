import React, {Component} from 'react'

class ToDo extends Component{
    render(){
        return(
            <div>
                <input 
                type="checkbox" 
                checked={this.props.done}></input>
                <p>{this.props.item}</p>
            </div>
        )
    }
}
export default ToDo;
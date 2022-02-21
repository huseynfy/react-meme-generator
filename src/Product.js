import React from 'react'

class Product extends React.Component{
    render(){
    return(
        <div>
            <h4>Product: {this.props.name}</h4>
            <h5>Price:$ {this.props.price}</h5>
        </div>
    )
} 
}
export default Product;
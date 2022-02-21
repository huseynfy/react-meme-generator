import React from 'react'

function Conditional(props) {
    const style = { color: "red" }

    return (
        <div>
            {props.isloading === true ? <h1>I'm loading...</h1> : <h2 style={style}>Everything is okay</h2>}
        </div>
    )

}
export default Conditional;
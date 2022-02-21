import React from 'react'

function Hello(){
    const Sayhello=()=>{
        alert("Hello!")
    };
    return(
        <div>
            <h1>Hello World</h1>
            <button onClick={Sayhello}>Click</button>
        </div>
    )
}
export default Hello;
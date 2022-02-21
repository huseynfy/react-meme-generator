import React from 'react'
import ContactCard from './ContactCard'

class MyApp extends React.Component{
    render(){
    return (
        <div>
            < ContactCard contact={{name:"Huseyn",phone:"0502059939"}}/>
            < ContactCard contact={{name:"Yusif",phone:"0502059939"}}/>
            < ContactCard contact={{name:"Ulfat",phone:"0502059939"}}/>
        </div>
    )
}
}

export default MyApp;
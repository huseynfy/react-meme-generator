import React from 'react'
import ReactDOM from 'react-dom'
// import Tweet from './Tweet'
// import MyApp from "./MyApp"
import App from './App'


// function App(){
//     const date= new Date();
//     const time=date.getHours();

//     let timeofday;
//     if(time<12){
//         timeofday='morning'
//     } else if(time=>12 && time<17){
//         timeofday='evening'
//     }else{
//         timeofday='night'
//     }
//     const style={color:'red',fontSize:80}
//     return(
//         <h1 style={style}>Good {timeofday}!</h1>
//         // <div>
//         // <Tweet message='Hello' name='Huseyn'/>
//         // <Tweet message='Hello' name='Huseyn'/>
//         // <Tweet message='Hello' name='Huseyn'/>
//         // </div>
//     )
// }


ReactDOM.render(< App/>,document.querySelector('#root'));
import React, { Component } from 'react'
// import Hello from './Hello'
// import Tweet from './Tweet'
// import Joke from './Joke'
// import JokesData from './JokesData'
// import Product from './Product'
// import ProductData from './ProductData'
// import { render } from '@testing-library/react'
// import ToDo from './ToDo'
// import ToDoData from './ToDoData'
// import Conditional from './Conditional'
import Header from './Header'
import Appcss from './App.css'
// import { render } from '@testing-library/react';

// function App(){
//   // const [isRed, setRed]=useState(false);
//   // const [count, setCount]=useState(0);

//   const [users,setUsers]=useState([
//     {name:'Huseyn',message:'Salam'},
//     {name:'Ulfet',message:"Necesiz?"},
//     {name:'Yusif',message:'Hello'},
//     {name:'Fikret',message:"What's up?"}
//   ])

//   // const func=()=>{
//   //   setCount(count+1);
//   //   setRed(!isRed);
//   // }
//   return(
//     <div className='app'>
//       {/* < Tweet name='Huseyn' message='Hello!'/>
//      < Tweet name='Fikret' message='Hi!'/>
//      < Tweet name='Ulfet' message='How are you?'/>
//      < Tweet name='Yusif' message='Well done!' /> 
//       <h1 className={isRed ? 'red' : ''}>Change my color!</h1>
//       <button onClick={func}>Click Me</button>
//        <p>{count}</p> */}
//        {users.map(user=>(
//          < Tweet name={user.name} message={user.message}/>
//        ))}
//       </div>
//   );
// }


///Jokes DATA FETCH

// function App(){
//   const jokecomponent=JokesData.map(item=> <Joke key={item.id} question={item.question}
//   answer={item.answer}/>)
//   return(
//       <div>
//           {jokecomponent}
//       </div>
//   )
// }


////  PRODUCT DATA FETCH

// class App extends React.Component{
//   render(){
//   const procomponent=ProductData.map(pro=><Product key={pro.id} name={pro.name} price={pro.price}/>)
//   return (
//     <div>
//       {procomponent}
//     </div>
//   )
// }
// }

/// Using STATE

// class App extends Component{
//   constructor(){
//     super()
//     this.state={
//       age:'24',
//       name:'Huseyn'
//     }
//   }
//   render(){
//     return (
//       <div>
//         <h3> Name: {this.state.name}</h3>
//         <h4>Age: {this.state.age} </h4>
//       </div>
//     )
//   }
// }


/// Using STATE Practice

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       loggedin: false
//     }
//   }
//   render() {
//     let log;
//     this.state.loggedin ? log = "in" : log = "out"
//     return (
//       <div>
//         <h2>You are logged {log} </h2>
//       </div>
//     )
//   }
// }

//// Using STATE Practice 2

// class App extends Component{
//   constructor(){
//     super()
//     this.state={
//       todos:ToDoData
//     }
//    }
//   render(){
//     const Doing=this.state.todos.map(Do=><ToDo key={Do.id} item={Do.item}/>)
//     return(
//       <div>
//         {Doing}
//       </div>
//     )
//   }
// }

/// Event Change

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       count: 0
//     }
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     this.setState(prevState => {
//       return {
//         count: prevState.count + 1
//       }
//     })
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleClick}>Click me!</button>
//       </div>
//     )
//   }
// }

//// COMPONENTDIDMOUNT() METHOD PRACTICE

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       isloading: true
//     }
//   }
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({
//         isloading: false
//       })
//     }, 1500);
//   }
//   render() {
//     return (
//       <div>
//         <Conditional isloading={this.state.isloading} />
//       </div>
//     )
//   }
// }

//// STATE CHANGE && CONDITIONAL PRACTICE

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       unreadmessages: []
//     }
//   }
//   render() {
//     return (
//       <div>
//         {this.state.unreadmessages.length > 0 ? <h1>You have {this.state.unreadmessages.length} unread messages</h1>
//           : <h1>Congs!</h1>}
//       </div>
//     )
//   }
// }


/// LOGGED IN PRACTICE CONDITIONAL 

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       loggedin: false
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }
//   handleClick() {
//     this.setState(prevState => {
//       return {
//         loggedin: !prevState.loggedin
//       }
//     })
//   }
//   render() {
//     let logintext = this.state.loggedin ? 'Logged in' : 'Logged out'
//     let btntext = this.state.loggedin ? 'Sign out' : 'Sign in'
//     return (
//       <div>
//         <button onClick={this.handleClick}>{btntext}</button>
//         <h1>{logintext}</h1>
//       </div>
//     )
//   }
// }

//// API REQUEST 

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       loading: false,
//       character: {}
//     }
//   }
//   componentDidMount() {
//     this.setState({ loading: true })
//     fetch("https://swapi.dev/api/people/1").then(response => response.json())
//       .then(data => this.setState({
//         loading: false,
//         character: data
//       }))
//   }
//   render() {
//     return (
//       <div>
//         {
//           this.state.loading ? <h1>Loading...</h1> :
//             <div> <h1>{this.state.character.name}</h1> <h2>{this.state.character.height}</h2> </div>
//         }
//       </div>
//     )
//   }
// }


//// EVENT TARGET VALUE FROM INPUT

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       firstName: '',
//       lastName: ''
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }
//   handleChange(event) {
//     this.setState({
//       [event.target.name]: [event.target.value]
//     })
//   }
//   render() {
//     return (
//       <div>
//         <input type='text' placeholder='First Name' value={this.state.firstName} name='firstName' onChange={this.handleChange}></input>
//         <input type='text' placeholder='Lastname Name' value={this.state.lastName} name='lastName' onChange={this.handleChange}></input>
//         <h1>{this.state.firstName}</h1>
//         <h1>{this.state.lastName}</h1>
//       </div>
//     )
//   }
// }

//// INPUTS AND SELECTION PRACTICE ALL INCLUSIVE

// class App extends Component {
//   state = {
//     firstName: '',
//     lastName: '',
//     age: '',
//     gender: '',
//     destination: '',
//     vegan: false,
//     glutenFree: false,
//     vegetarian: false
//   }
//   handleChange = (event) => {
//     const { type, checked, name, value } = event.target
//     type === checked ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
//   }
//   render() {
//     return (
//       <div>
//         <form>
//           <input
//             value={this.state.firstName} name='firstName' placeholder='First Name' onChange={this.handleChange} type='text'>
//           </input>
//           <input
//             value={this.state.lastName} name='lastName' placeholder='Last Name' onChange={this.handleChange} type='text'>
//           </input>
//           <input
//             value={this.state.age} name='age' placeholder='Age' onChange={this.handleChange} type='number'>
//           </input>
//           <label>
//             <input type='radio' name='gender' checked={this.state.gender === 'male'} value='male' onChange={this.handleChange}>
//             </input>
//             Male
//           </label>
//           <label>
//             <input type='radio' name='gender' checked={this.state.gender === 'female'} value='female' onChange={this.handleChange}>
//             </input>
//             Female
//           </label>
//           <label>
//             <input type='checkbox' name='vegan' checked={this.state.vegan} onChange={this.handleChange}>
//             </input>
//             Vegan
//           </label>
//           <label>
//             <input type='checkbox' name='glutenFree' checked={this.state.glutenFree} onChange={this.handleChange}>
//             </input>
//             Gluten Free
//           </label>
//           <label>
//             <input type='checkbox' name='vegetarian' checked={this.state.vegetarian} onChange={this.handleChange}>
//             </input>
//             Vegetarian
//           </label>
//           <select
//             value={this.state.destination}
//             name='destination'
//             onChange={this.handleChange}
//           >
//             <option value=''>Please Select One</option>
//             <option value='germany'>Germany</option>
//             <option value='usa'>USA</option>
//             <option value='france'>France</option>
//             <option value='UK'>UK</option>
//           </select>
//         </form>
//         <h1>{this.state.firstName} {this.state.lastName}</h1>
//         <h2>{this.state.gender}</h2>
//         <h2>{this.state.age}</h2>
//         <h2> {this.state.destination}</h2>
//         <h3>{this.state.vegan ? 'Vegan :Yes' : 'Vegan :No'}</h3>
//         <h3>{this.state.glutenFree ? 'Gluten Free :Yes' : 'Gluten Free :No'}</h3>
//         <h3>{this.state.vegetarian ? 'Vegetarian :Yes' : 'Vegetarian :No'}</h3>
//       </div>
//     )
//   }
// }


//// MEME GENERATOR APP (DIFFICULT ONE)

class App extends Component {
  constructor() {
    super()
    this.state = {
      topText: '',
      bottomText: "",
      randomImg: '',
      allMemes: []
    }
  }
  componentDidMount() {
    fetch('https://api.imgflip.com/get_memes').then(response => response.json())
      .then(response => {
        const { memes } = response.data
        this.setState({ allMemes: memes })
      })
  }
  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const random = Math.floor(Math.random() * this.state.allMemes.length)
    const randomMeme = this.state.allMemes[random].url;
    this.setState({ randomImg: randomMeme })
  }
  render() {
    return (
      <div>
        <Header />
        <form className='meme-form' onSubmit={this.handleSubmit}>
          <input name='topText' value={this.state.topText} placeholder='Top Text' onChange={this.handleChange}>
          </input>
          <input name='bottomText' value={this.state.bottomText} placeholder='Bottom Text' onChange={this.handleChange}>
          </input>
          <button>Generate</button>
        </form>
        <div className='meme'>
          <img src={this.state.randomImg}></img>
          <h2 className='top'>{this.state.topText}</h2>
          <h2 className='bottom'>{this.state.bottomText}</h2>
        </div>
      </div>
    )
  }
}
//  class App extends Component{
//    constructor(){
//      super()
//      this.state={
//        date : new Date()
//      }
//    }
//    render(){
//      return(
//        <div>
//         <p>{this.state.date.toString()}</p> </div>
//      )
//    }
//  }
export default App;
import './App.css'
import SimpleCounterComponent from "./Components/SimpleCounterComponent.jsx"
import PureCounterComponent from "./Components/PureCounterComponent.jsx"
import { Component } from 'react'


export default class App extends Component{

  render(){
  return (
    <>
    <SimpleCounterComponent />
    <PureCounterComponent />
     
    </>
  )
}
}


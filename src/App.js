import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      seconds:"0",
    };
    this.clock=this.clock.bind(this);
  }
  clock(handler){
setInterval(()=>{this.setState({seconds:(parseInt(this.state.seconds)+1).toString})},1000);
  }
  render(){return (
    <h1>{this.state.seconds}
   <this.clock/> 
   </h1>
  )}
}
export default App;

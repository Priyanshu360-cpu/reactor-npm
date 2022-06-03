import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

export class Clock extends Component {
  constructor() {
    super();
    this.state = {
      seconds:"0",
      hour:"0",
      minute:"0",
      stopper:0
    };
    this.clock=this.clock.bind(this);
  }
  clock(handler){
        if(this.state.stopper==0){
    setInterval(()=>{if(parseInt(this.state.minute)>=60){
      this.setState({minute:"0",hour:(parseInt(this.state.hour)+1).toString()})
    }else
    if(parseInt(this.state.seconds)>=60){
      this.setState({seconds:"0",minute:(parseInt(this.state.minute)+1).toString()})
    }else
      this.setState({seconds:(parseInt(this.state.seconds)+1).toString()})},1000);
        }
        this.setState({stopper:1});

  }
  render(){return (
    <div>{(parseInt(this.state.hour)<10?"0"+this.state.hour:this.state.hour)
    +":"+(parseInt(this.state.minute)<10?"0"
    +this.state.minute:this.state.minute)+":"
    +(parseInt(this.state.seconds)<10?"0"+this.state.seconds:this.state.seconds)}
   <this.clock/> 
   </div>
  )}
}
export class Test extends Component{
    render(){return(
<h1>to be progressed</h1>
    )
    }
}
export default Clock;

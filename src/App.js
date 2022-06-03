import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {Clock, Test} from './components';
class App extends Component {
  
  
  render(){return (
   <><div className="trial"><Clock></Clock></div><Test></Test></>
  )}
}
export default App;

import React, { Component } from 'react';
import DashboardComponent from './components/DashboardComponent';
import './App.css';
import NavbarComponent from './components/NavbarComponent';

class App extends Component {   

render() {  
  return (
    <div className="App">
      <DashboardComponent/>
    </div>
  )
}

}

export default App;
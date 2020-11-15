import React, {Component} from 'react';
import './App.css';

import Navegation from './components/Navegation';

import {todos} from './datos.json';

console.log(todos);

class App extends Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div>
        <Navegation titulo="Holaaaa"/>
      </div>
    );
  }
}

export default App;

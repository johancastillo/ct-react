import React, {Component} from 'react';
import './App.css';

import Navegation from './components/Navegation';

import {todos} from './datos.json';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos,
      ntasks: todos.length
    }
  }

  render(){
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4">
          <div className="card mt-4">
          <div className="card-header">
            <h3> {todo.title} </h3>

            <span className="badge badge-pill badge-danger ml-2">
              {todo.priority}
            </span>
          </div>

          <div className="card-body">
            <p>{todo.description}</p>
            <p>
              <mark>{todo.responsible}</mark>
            </p>
          </div>
        </div>
        </div>
      )
    })

    return (
      <div>
        <Navegation ntasks={this.state.ntasks} />

        <div className="container">
          <div className="row mt-4">
          {todos}
          </div>
        </div>

      </div>
    );
  }
}

export default App;

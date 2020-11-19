import React, {Component, Fragment} from 'react';
import './App.css';

// React Router DOM
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// Imports Components
import NavegationDesktop from './components/navegation-desktop/NavegationDesktop';
import NavegationMobile from './components/navegation-mobile/NavegationMobile';

import ProductCard from './components/product-card/ProductCard';
import Slider from './components/slider/Slider';

// import Pages
import Home from './pages/Home';



class App extends Component {
  constructor(){
    super();
    this.state = {
      device: null
    }
  }

  componentDidMount(){
   let screenDetected = () => window.screen.width;
   let resolution = screenDetected();
   let device = resolution > 600 ? 'desktop' : 'mobile';
      
    this.setState({
      device: device
    });
  
   }

  render(){
    


    // Return View
    return (
      <Router>
        <Fragment>
        <NavegationMobile />

          {/** Dinamic Content **/}
          <Switch>
            <Route path="/" exact>
              <Home device={this.state.device} />  
            </Route>

            <Route path="/services">
              <h1 className="text-center">
                Esta es la página de Services
              </h1>
            </Route>

            <Route path="/products" exact>
              <h1 className="text-center">
                Esta es la página de Products
              </h1>
            </Route>
          </Switch>

      </Fragment>
      </Router>
    );
  }
}

export default App;

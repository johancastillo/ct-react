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
import ProductCard from './components/product-card/ProductCard';
import Slider from './components/slider/Slider';

// Data
import {products} from './data.json';

class App extends Component {
  constructor(){
    super();
    this.state = {
      products
    }
  }

  render(){
    // Map for each of the products
    const data = this.state.products.map((product, i) => {
      return (
        <div className="col-6 col-md-2">
              <ProductCard  
                title={product.name}
                stars={product.stars}
                image={product.image}
              />
        </div>
      )
    })


    // Return View
    return (
      <Router>
        <Fragment>
        <NavegationDesktop />

          {/** Dinamic Content **/}
          <Switch>
            <Route path="/products">
              <Slider />
              <div className="container-fluid">
                <div className="row">
                  {data}
                </div>
              </div>
            </Route>

            <Route path="/services">
              <h1 className="text-center">
                Esta es la página de Servicios
              </h1>
            </Route>

            <Route path="/" exact>
              <h1 className="text-center">
                Esta es la página de Inicio
              </h1>
            </Route>
          </Switch>

      </Fragment>
      </Router>
    );
  }
}

export default App;

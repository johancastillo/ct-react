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

// Data
import {products} from './data.json';

// Device detecting
const deviceDetecting = () => {
  let screen = screen.width;
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      products,
      device: "desktop"
    }
  }

  componentDidMount(){
    
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
        <NavegationMobile />

          {/** Dinamic Content **/}
          <Switch>
            <Route path="/" exact>
              <Slider device={this.state.device} />

              <div className="container-fluid">
                <div className="row">
                  {data}
                </div>
              </div>
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
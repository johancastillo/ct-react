import React, {Component, Fragment} from 'react';
import './App.css';

// Imports
import Navegation from './components/navegation/Navegation';
import ProductCard from './components/product-card/ProductCard';

// Data
import {products} from './data.json';

class App extends Component {
  constructor(){
    super();
    this.state = {
      products,
      nproducts: products.length
    }
  }

  render(){
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

    return (
      <Fragment>
        <Navegation nproducts={this.state.nproducts} />

        <div className="container-fluid">
          <div className="row">
            {data}
          </div>
        </div>

      </Fragment>
    );
  }
}

export default App;

import React, {Component} from 'react';
import Slider from './../components/slider/Slider';
import ProductCard from './../components/product-card/ProductCard';

//Data
import {products} from './../data.json';


class Home extends Component{
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
                <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                        <ProductCard  
                        title={product.name}
                        stars={product.stars}
                        image={product.image}
                        />
                </div>
            )
        });

        return(
            <div className="contenedor">
                <Slider device={this.props.device} />

                <div className="container-fluid">
                    <div className="row">
                        {data}
                    </div>
                </div>

            </div>
        )
    }
}

export default Home;
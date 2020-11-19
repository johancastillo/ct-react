import React, {Component, Fragment} from 'react';
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
                <div className="col-6 col-md-2">
                        <ProductCard  
                        title={product.name}
                        stars={product.stars}
                        image={product.image}
                        />
                </div>
            )
        });

        return(
            <Fragment>
                <Slider device={this.props.device} />

                <div className="container-fluid">
                    <div className="row">
                        {data}
                    </div>
                </div>

            </Fragment>
        )
    }
}

export default Home;
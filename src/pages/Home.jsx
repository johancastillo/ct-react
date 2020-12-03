import React from 'react';
import Slider from './../components/slider/Slider';
import ProductCard from './../components/product-card/ProductCard';

//Data
import {products} from './../data.json';

// Map for each of the products
const data = products.map((product, i) => {
    return (
        <div className="col-6 col-md-4 col-lg-3 col-xl-2"
        style={{
            padding: "8px"
        }}>
                <ProductCard  
                title={product.name}
                stars={product.stars}
                image={product.image}
                />
        </div>
    )
});

const Home = ({device}) => (
    <div className="contenedor">
        <Slider device={device} />

        <div className="container-fluid">
            <div className="row">
                {data}
            </div>
        </div>

    </div>
);

export default Home;
import React from 'react';
import ProductCard from './../../components/product-card/ProductCard';

//Data
import {products} from './../../data.json';


// Map for each of the products
const data = products.map((product, i) => (
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
);

// Component
const Search = () => (
    <div className="contenedor">
        <div className="container-fluid">
            <h5 className="my-4">
                Resultados de la busqueda "..."
            </h5>

            <div className="row">
                {data}
            </div>
        </div>
    </div>
);

export default Search;
import React from 'react';

import CardProduct from '../../components/product-card/ProductCard';


const Search = () => (
    <div className="margins-page">
      <div className="ed-grid m-grid-4 s-grid-2">
        <CardProduct 
          image="https://image-galery.herokuapp.com/static/media/1.691fd698.webp"
        />

        <CardProduct 
          image="https://image-galery.herokuapp.com/static/media/1.691fd698.webp"
        />

        <CardProduct 
          image="https://image-galery.herokuapp.com/static/media/1.691fd698.webp"
        />

        <CardProduct 
          image="https://image-galery.herokuapp.com/static/media/1.691fd698.webp"
        />

      </div>
    </div>
);

export default Search;
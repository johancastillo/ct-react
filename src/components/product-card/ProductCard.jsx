import React from 'react';
import { Link } from 'react-router-dom';
import Stars from '../stars/Stars';
import './ProductCard.scss';


const ProductCard = ({image, title, stars}) => (    
  <div className="card">

    <Link to="/product">
    <div className="color-gris">  
      <img src={image} className="card-img-top p-2" alt="..." />
    </div>
    </Link>

    <div className="card-body">

        <span className="card-text name-product">
          {title}
        </span>


        <Stars numberStars={stars} />

        

        <button type="button" class="btn btn-outline-success btn-block mt-2"
        style={{
          fontSize: "15px"
        }}>
          + Carrito
        </button>
        

    </div>
  </div>               
);

export default ProductCard;
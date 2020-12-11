import React from 'react';
import './ProductCard.scss';


const CardProduct = ({image, title}:any) => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={image} alt="" />
        </div>
        {
            title ? 
            <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                <h3 className="t5 s-mb-2 s-center">
                    {title}
                </h3>
            </div>
            :
            <div className=""></div>
        }
    </article>
);

export default CardProduct;
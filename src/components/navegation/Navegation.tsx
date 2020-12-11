import React from 'react';
import './Navegation.scss';
import logo from './logo.svg';

const Navegation = ({productsNumber}:any) => (
    <div className="ed-container full bg-navbar">

        <div className="ed-item s-60 s-left lg-25">
            <img src={logo} alt=""/>
        </div>

        <div className="ed-item lg-50 search">
            <input type="text" placeholder="Buscar..." className="input-search" />
            <button className="button icon-search"></button>
        </div>

        <div className="ed-item s-40 lg-25 s-right icons flex">
            <span className="icon icon-search"></span>
            <span className="icon icon-user"></span>

            <div className="cart">
                <span className="icon icon-ct-cart"></span>
                <span id="cart_menu_num" className="badge rounded-circle">
                    {productsNumber}
                </span>
            </div>
        </div>

    </div> 
);

export default Navegation;
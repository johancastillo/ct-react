import React, {Component} from 'react';
import Logo from './logo.svg';

//React Router DOM
import {Link} from 'react-router-dom';


class Navegation extends Component{
    render(){
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
                <a class="navbar-brand" href="#">
                    <img src={Logo} width="198" height="100" alt="" loading="lazy" />
                </a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link to="/" class="nav-link" href="#">Home </Link>
                    </li>

                    <li class="nav-item">
                        <Link to="/products" class="nav-link" href="#">Products</Link>
                    </li>
                    
                    <li class="nav-item">
                        <Link to="/services" class="nav-link" href="#">Services</Link>
                    </li>
                    
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navegation;
import React, {Component} from 'react';
import Logo from './logo.svg';

// Styles CSS
import './NavegationDesktop.css';

//React Router DOM
import {Link} from 'react-router-dom';


class NavegationDesktop extends Component{
    render(){
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
                <div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <Link to="/" class="navbar-brand" href="#">
                        <img src={Logo} width="198" height="100" alt="" loading="lazy" />
                    </Link>
                </div>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        
                    <li class="nav-item active">
                        <Link to="/" class="nav-link" href="#">
                            Home
                        </Link>
                    </li>

                    <li class="nav-item">
                        <Link to="/products" class="nav-link" href="#">
                            Products
                        </Link>
                    </li>
                    
                    <li class="nav-item">
                        <Link to="/services" class="nav-link" href="#">
                            Services
                        </Link>
                    </li>
                    
                    </ul>
                </div>

                <div>
                    <span className="icon-user" style={{fontSize: '32px'}}></span>
                    <span className="icon-ct-cart ml-2" style={{fontSize: '32px'}}></span>
                </div>
            </nav>
        )
    }
}

export default NavegationDesktop;
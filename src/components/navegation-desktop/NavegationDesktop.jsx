import React, {Component} from 'react';
import Logo from './logo.svg';

// Styles CSS
import './NavegationDesktop.css';

//React Router DOM
import {Link} from 'react-router-dom';


class NavegationDesktop extends Component{
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
                <div>
                    <button style={{fontSize: '18px'}} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link to="/" className="navbar-brand" href="#">
                        <img src={Logo} width="198" height="100" alt="" loading="lazy" />
                    </Link>
                </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        
                    <li className="nav-item active">
                        <Link to="/" className="nav-link" href="#">
                            Home
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/products" className="nav-link" href="#">
                            Products
                        </Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link to="/services" className="nav-link" href="#">
                            Services
                        </Link>
                    </li>
                    
                    </ul>
                </div>

                <div>
                    <span className="icon-user" style={{fontSize: '24px'}}></span>
                    
                    <span className="icon-ct-cart ml-2" style={{fontSize: '24px'}}></span>
                </div>
            </nav>
        )
    }
}

export default NavegationDesktop;
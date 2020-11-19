import React, {Component} from 'react';
import Logo from './logo.svg';

// Styles CSS
import './NavegationMobile.css';

//React Router DOM
import {Link} from 'react-router-dom';


class NavegationMobile extends Component{
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
                <div>
                        <span className="icon-menu" style={{
                            color: '#212529',
                            fontSize: '22px'
                        }} onClick={()=> console.log("click in menu")}></span>
                    
                    <Link to="/" className="navbar-brand ml-2" href="#">
                        <img src={Logo} width="198" height="100" alt="logo" loading="lazy" />
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
                    <span className="icon-user" style={{fontSize: '32px'}}></span>
                    <span className="icon-ct-cart ml-2" style={{fontSize: '32px'}}></span>
                </div>
            </nav>
        )
    }
}

export default NavegationMobile;
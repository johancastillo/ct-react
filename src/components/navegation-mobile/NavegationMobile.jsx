import React, {Component, Fragment} from 'react';
import Logo from './logo.svg';

// Styles CSS
import './NavegationMobile.css';

//React Router DOM
import {Link} from 'react-router-dom';


class NavegationMobile extends Component{
    constructor(){
        super();
        this.state = {
            number: 5,
            search: false
        }
    }

    // Function for event click
    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        })
        console.log(this.state.number)
    }

    handleSearch = () => {
        this.setState({
            number: this.state.number + 1
        })
        console.log(this.state.number)
    }

    styleNav = {
        display: "flex"
    } 

    styleSearch = {
        display: "none"
    }

    render(){
        return (
            <Fragment>
            <nav className="navbar shadow-nav navbar-expand-lg navbar-light bg-light sticky-top"
            style={
                this.styleNav
            }
            >
                <div>
                        {/** Menu */}
                        <span className="icon-menu" style={{
                            color: '#212529',
                            fontSize: '22px'
                        }} onClick={this.handleClick}></span>
                    
                    <Link to="/" className="navbar-brand ml-2" href="#">
                        <img src={Logo} width="162" height="100" alt="logo" loading="lazy" />
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
                    <span className="icon icon-search ml-3"
                    onClick={() => alert("Hello world")}></span>

                    <Link to="/mycount"><span className="icon icon-user ml-3"></span></Link>
                    <Link className="cart" to="/cart">
                        <span className="icon icon-ct-cart ml-3"></span>
                        <span className="badge badge-warning cart-num">0</span>    
                    </Link>
                    
                </div>    
            </nav>

            <nav class="navbar shadow-nav navbar-light bg-light sticky-top"
            style={
                this.styleSearch
            }
            >
                <form class="form-inline">
                    <span class="icon icon-chevron-left"
                    onClick={() => alert("Back of search")}
                    style={{
                        marginRight: "20px"
                    }}></span>

                    <input class="form-control mr-sm-2 search-input" 
                    type="search" placeholder="Search" 
                    aria-label="Search" />

                    <button class="btn btn-outline-success my-2 my-sm-0 search-button" 
                    type="submit">
                        <span className="icon-search"
                        style={{
                            fontSize: "20px"
                        }}></span>
                    </button>
                </form>
            </nav>
            </Fragment>
        )
    }
}

export default NavegationMobile;
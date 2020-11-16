import React, {Component} from 'react';

class Navegation extends Component{
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="ed.team">
                    Compralo Todo

                    <span className="badge badge-pill badge-light ml-2">
                        {this.props.nproducts}
                    </span>
                </a>
            </nav>
        )
    }
}

export default Navegation;
import React, {Component} from 'react';
import './ProductCard.css';

import product from './../../1.webp';


class ProductCard extends Component{

    render(){
        // variable for the stars
        let star;

        // Stars validation
        if(this.props.stars == 1){
          star = {
            one: "icon-star-full",
            two: "icon-star-empty",
            three: "icon-star-empty",
            four: "icon-star-empty",
            five: "icon-star-empty"
          }
        }else if(this.props.stars == 1.5){
          star = {
            one: "icon-star-full",
            two: "icon-star-half",
            three: "icon-star-empty",
            four: "icon-star-empty",
            five: "icon-star-empty"
          }
        }else if(this.props.stars == 2){
          star = {
            one: "icon-star-full",
            two: "icon-star-full",
            three: "icon-star-empty",
            four: "icon-star-empty",
            five: "icon-star-empty"
          }
        }else if(this.props.stars == 2.5){
          star = {
            one: "icon-star-full",
            two: "icon-star-full",
            three: "icon-star-half",
            four: "icon-star-empty",
            five: "icon-star-empty"
          }
        }else if(this.props.stars == 3){
          star = {
            one: "icon-star-full",
            two: "icon-star-full",
            three: "icon-star-full",
            four: "icon-star-empty",
            five: "icon-star-empty"
          }
        }else if(this.props.stars == 3.5){
          star = {
            one: "icon-star-full",
            two: "icon-star-full",
            three: "icon-star-full",
            four: "icon-star-half",
            five: "icon-star-empty"
          }
        }else if(this.props.stars == 4){
          star = {
            one: "icon-star-full",
            two: "icon-star-full",
            three: "icon-star-full",
            four: "icon-star-full",
            five: "icon-star-empty"
          }
        }else if(this.props.stars == 4.5){
          star = {
            one: "icon-star-full",
            two: "icon-star-full",
            three: "icon-star-full",
            four: "icon-star-full",
            five: "icon-star-half"
          }
        }else if(this.props.stars == 5){
          star = {
            one: "icon-star-full",
            two: "icon-star-full",
            three: "icon-star-full",
            four: "icon-star-full",
            five: "icon-star-full"
          }
        }

        return(
            <div className="card mb-4">

                  <div className="color-gris">  
                    <img src={this.props.image} className="card-img-top p-2" alt="..." />
                  </div>

                    <div className="card-body">

                        <span className="card-text name-product">
                          {this.props.title}
                        </span>

                        {/** Stars **/}

                        <div className="star-color">
                          <span className={star.one}></span>
                          <span className={star.two}></span>
                          <span className={star.three}></span>
                          <span className={star.four}></span>
                          <span className={star.five}></span>
                        </div>

                        

                    </div>
                </div>
        )
    }
}

export default ProductCard;
import React, {Component} from 'react';

// Images
import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './3.png';


class Slider extends Component{
    render(){
        return(
            <div id="carouselExampleIndicators" class="carousel slide mb-4" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={image1} class="d-block w-100" alt="..." />
                    </div>

                    <div class="carousel-item">
                    <img src={image2} class="d-block w-100" alt="..." />
                    </div>

                    <div class="carousel-item">
                    <img src={image3} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        )
    }
}

export default Slider;
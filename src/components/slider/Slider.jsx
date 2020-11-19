import React, {Component} from 'react';

// Images for Mibile
import imageMobile1 from './mobile/1.jpg';
import imageMobile2 from './mobile/2.jpg';

// Images for Desktop
import imageDesktop1 from './desktop/1.jpg';
import imageDesktop2 from './desktop/2.jpg';
import imageDesktop3 from './desktop/3.jpg';


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
                    <img src={this.props.device === "desktop" ? imageDesktop1 : imageMobile1} class="d-block w-100" alt="..." />
                    </div>

                    <div class="carousel-item">
                    <img src={this.props.device === "desktop" ? imageDesktop2 : imageMobile2} class="d-block w-100" alt="..." />
                    </div>

                    <div class="carousel-item">
                    <img src={this.props.device === "desktop" ? imageDesktop3 : imageMobile1} class="d-block w-100" alt="..." />
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
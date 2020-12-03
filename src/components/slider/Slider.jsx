import React from 'react';

// Images for Mibile
import imageMobile1 from './mobile/1.jpg';
import imageMobile2 from './mobile/2.jpg';

// Images for Desktop
import imageDesktop1 from './desktop/1.jpg';
import imageDesktop2 from './desktop/2.jpg';
import imageDesktop3 from './desktop/3.jpg';


const Slider = ({device}) => (
    <div id="carouselExampleIndicators" className="carousel slide mb-4" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={device === "desktop" ? imageDesktop1 : imageMobile1} className="d-block w-100" alt="..." />
            </div>

            <div className="carousel-item">
                <img src={device === "desktop" ? imageDesktop2 : imageMobile2} className="d-block w-100" alt="..." />
            </div>

            <div className="carousel-item">
                <img src={device === "desktop" ? imageDesktop3 : imageMobile1} className="d-block w-100" alt="..." />
            </div>
        </div>
        
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
                
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
            
    </div>
);

export default Slider;
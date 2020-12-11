import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Slider.scss';

// Images statics
import image1 from './desktop/image1.png';
import image2 from './desktop/image2.png';
import image3 from './desktop/image3.png';

const Slider = () => (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={image2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={image3} className="d-block w-100" alt="..." />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </a>
</div>
);

export default Slider;
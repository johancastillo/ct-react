import React from 'react';
import image from './1.png';

const Header = () => (
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src={image} class="d-block w-100" alt="..." />
            </div>
        </div>
    </div>
);

export default Header;
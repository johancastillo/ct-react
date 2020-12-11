import React from 'react';

import Banner from '../../components/banner/Banner';
import HorizontalScroll from '../../components/horizontal-scroll/HorizontalScroll';
import Slider from '../../components/slider/Slider';

const Home = () => (
    <>
        <Slider />
        <div className="margins-page">
            <div className="ed-grid full m-grid-2">
                <Banner />
                <Banner />
            </div>

            <div className="ed-grid full">
                <HorizontalScroll />
            </div>
        </div>
    </>
);

export default Home;
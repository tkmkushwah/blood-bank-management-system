import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from '../../assets/clauser1.PNG'
import img2 from '../../assets/clauser2.PNG'
import img3 from '../../assets/clauser3.PNG'

 const HomeCarousel =()=>{
    
        return (
            <Carousel>
                <div>
                    <img src={img1} alt="img1"/>
                </div>
                <div>
                    <img src={img2} alt="img1"/>
                </div>
                <div>
                    <img src={img3} alt="img1"/>
                </div>
            </Carousel>
        );
    }

    export default HomeCarousel
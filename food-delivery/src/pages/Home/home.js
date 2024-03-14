import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';
import Cards from '../../components/Cards/cards';
import Carousel from '../../components/Carousel/carousel';
import FoodCarousel from '../../components/FoodCarousel/foodcarousel';

export default function Home() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <Carousel />
            </div>
            <br></br>
           <br></br>
            <div>
            <FoodCarousel  />
            </div>
           <br></br>
           <br></br>
           <div>
            <Cards />
           </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

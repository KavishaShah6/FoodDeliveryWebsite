import React, { useState } from 'react';
import './foodcarousel.css';

const FoodCarousel = () => {

  const imageSources = [
    {
      url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
      width: 144,
      height: 180,
      alt: "restaurants curated for vada pav",
    },
    // Add more image sources as needed
    {
      url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
      width: 144,
      height: 180,
      alt: "restaurants curated for vada pav",
    },
    {
      url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/North_Indian_4.png",
      width: 144,
      height: 180,
      alt: "restaurants curated for vada pav",
    },
    {
      url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
      width: 144,
      height: 180,
      alt: "restaurants curated for vada pav",
    },

    {
      url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
      width: 144,
      height: 180,
      alt: "restaurants curated for vada pav",
    },

    {
      url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Biryani.png",
      width: 144,
      height: 180,
      alt: "restaurants curated for vada pav",
    },

    {
      url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Vada_Pav.png",
      width: 144,
      height: 180,
      alt: "restaurants curated for vada pav",
    },

    {
      url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png",
      width: 144,
      height: 180,
      alt: "restaurants curated for vada pav",
    },

    {
      url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png",
      width: 273,
      height: 182,
      alt: "restaurants curated for vada pav",
    },

    {
      url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
      width: 144,
      height: 180,
      alt: "restaurants curated for vada pav",
    },

    {
      url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png",
      width: 144,
      height: 180,
      alt: "restaurants curated for vada pav",
    },

    {
      url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png",
      width: 144,
      height: 180,
      alt: "restaurants curated for vada pav",
    },

    {
      url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png",
      width: 144,
      height: 180,
      alt: "restaurants curated for vada pav",
    },

    {
      url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Khichdi.png",
      width: 144,
      height: 180,
      alt: "restaurants curated for vada pav",
    },

    {
      url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Momos.png",
      width: 144,
      height: 180,
      alt: "restaurants curated for vada pav",
    },

    {
      url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
      width: 144,
      height: 180,
      alt: "restaurants curated for vada pav",
    },

    {
      url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png",
      width: 144,
      height: 180,
      alt: "restaurants curated for vada pav",
    },

    {
      url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png",
      width: 144,
      height: 180,
      alt: "restaurants curated for vada pav",
    },

    {
      url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Idli.png",
      width: 144,
      height: 180,
      alt: "restaurants curated for vada pav",
    },
  ];


  const imagesPerRow = 7; // Adjust the number of images per row as needed

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSources.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageSources.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='class0'>
      <div className="class1">
        <div className="class2">
          <div className="class3">
            <br />
            <h2 className="title" style={{ fontWeight: 'bold', color: '#000' }}>
        What's on your mind?</h2>
            <button className="prev-button" onClick={prevSlide} id='prevbutton'>
                  &#8249;
                </button>
                <button className="next-button" onClick={nextSlide} id='nextbutton'>
                  &#8250;
                </button>
            <div className="class4">
              {/* <div class="prev-button"> */}
                
              {/* </div> */}
              <div className="carousel-container">
                {Array.from({ length: imagesPerRow }).map((_, index) => (
                  <div key={index} className="class6">
                    <a aria-label={`restaurants curated ${currentIndex + index + 1}`}>
                      <div className="class8">
                        <img
                          className="class9"
                          src={imageSources[(currentIndex + index) % imageSources.length].url}
                          alt={imageSources[(currentIndex + index) % imageSources.length].alt}
                          width={imageSources[(currentIndex + index) % imageSources.length].width}
                          height={imageSources[(currentIndex + index) % imageSources.length].height}
                        />
                      </div>
                    </a>
                  </div>
                ))}
              </div>
              {/* <div class="next-button"> */}
                
                {/* </div> */}
              {/* <button className="next-button" onClick={nextSlide} id='nextbutton'>
                  &#8250;
                </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCarousel;
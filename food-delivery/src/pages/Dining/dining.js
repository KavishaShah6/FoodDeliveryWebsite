import React from 'react';
import './dining.css';
import Navbar from "../../components/Navbar/navbar";

const Dining = () => {
  return (
    <><Navbar/>
    
    <div className="dining-page">
      <header>
        <h1>Gourmet Dining</h1>
        <p>Discover exquisite flavors from around the world.</p>
      </header>

      <div className="carousel-container">
        {/* Carousel/Slider component can be added here */}
        <div className="carousel">
          {/* Placeholder for carousel images */}
          <img src="https://via.placeholder.com/800x400" alt="carousel" />
          <img src="https://via.placeholder.com/800x400" alt="carousel" />
          <img src="https://via.placeholder.com/800x400" alt="carousel" />
        </div>
      </div>

      <div className="menu-sections">
        <section className="menu-section">
          <h2>Appetizers</h2>
          <div className="menu-items">
            <div className="menu-item">
              <h3>Caprese Salad</h3>
              <p>Tomatoes, mozzarella, basil, balsamic glaze</p>
            </div>
            <div className="menu-item">
              <h3>Stuffed Mushrooms</h3>
              <p>Portobello mushrooms, cream cheese, herbs</p>
            </div>
          </div>
        </section>

        <section className="menu-section">
          <h2>Main Courses</h2>
          <div className="menu-items">
            <div className="menu-item">
              <h3>Grilled Salmon</h3>
              <p>Fresh Atlantic salmon, lemon butter sauce</p>
            </div>
            <div className="menu-item">
              <h3>Chicken Alfredo</h3>
              <p>Tender chicken, creamy alfredo sauce, pasta</p>
            </div>
          </div>
        </section>

        <section className="menu-section">
          <h2>Desserts</h2>
          <div className="menu-items">
            <div className="menu-item">
              <h3>Tiramisu</h3>
              <p>Layers of coffee-soaked ladyfingers and mascarpone</p>
            </div>
            <div className="menu-item">
              <h3>Chocolate Fondant</h3>
              <p>Warm molten chocolate cake, vanilla ice cream</p>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <p>&copy; 2024 Gourmet Dining. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
};


export default Dining;

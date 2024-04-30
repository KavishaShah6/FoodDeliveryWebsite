import React, { useState } from 'react';
import './carousel.css';

const customSearchStyle = {
  backgroundColor: '#FC8019',
  fontFamily: 'Bitter'
};

export default function Carousel() {
  const [searchTerm, setSearchTerm] = useState('');
  const [restaurantSearchTerm, setRestaurantSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [restaurantSearchResult, setRestaurantSearchResult] = useState(null);
  const [error, setError] = useState('');
  const [restaurantError, setRestaurantError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/demo/search?name=${searchTerm}`);
      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }
      const data = await response.json();
      setSearchResult(data);
      setError('');
    } catch (error) {
      console.error('Search error:', error.message);
      setError('Error fetching data. Please try again later.');
      setSearchResult(null);
    }
  };

  const handleRestaurantSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/demo/search-restaurant?name=${restaurantSearchTerm}`);
      if (!response.ok) {
        const errorMessage = await response.text(); // Get error message from response
        throw new Error(`Server error: ${errorMessage}`);
      }
      const data = await response.json();
      setRestaurantSearchResult(data);
      setRestaurantError('');
    } catch (error) {
      console.error('Restaurant Search error:', error.message);
      setRestaurantError('Error fetching restaurant data. Please try again later.');
      setRestaurantSearchResult(null);
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleRestaurantInputChange = (e) => {
    setRestaurantSearchTerm(e.target.value);
  };

  return (
    <>
      <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{ zIndex: 9 }}>
              <h2 style={{ fontFamily: 'Shrikhand', fontSize: '80px', color: '#DDDDDD' }}>GourmetGo</h2>
              <h1>Discover the best food & drinks</h1>
              <br></br>
              <br></br>
              <form className="d-flex justify-content-center" onSubmit={handleSearch}>
                <input
                  className="form-control me-2 w-10 bg-white text-dark"
                  type="search"
                  placeholder="Search for food..."
                  aria-label="Search"
                  value={searchTerm}
                  onChange={handleInputChange}
                />
                <button className="btn text-white" type="submit" style={customSearchStyle}>Search Food</button>
              </form>
              <form className="d-flex justify-content-center mt-2" onSubmit={handleRestaurantSearch}>
                <input
                  className="form-control me-2 w-10 bg-white text-dark"
                  type="search"
                  placeholder="Search for restaurants..."
                  aria-label="Search"
                  value={restaurantSearchTerm}
                  onChange={handleRestaurantInputChange}
                />
                <button className="btn text-white" type="submit" style={customSearchStyle}>Search Restaurants</button>
              </form>
            </div>
            <img
              src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
              style={{ filter: "brightness(50%)", height: "450px", width: "100%" }}
              alt="image"
            />
          </div>
        </div>
        {searchResult && (
          <div className="mt-3">
            <h3>Search Result:</h3>
            <p>Name: {searchResult.name}</p>
            <p>Description: {searchResult.description}</p>
            <p>Price: ${searchResult.price}</p>
          </div>
        )}
        {error && <p className="text-danger mt-3">{error}</p>}
        {restaurantSearchResult && (
          <div className="mt-3">
            <h3>Restaurant Search Result:</h3>
            <p>Name: {restaurantSearchResult.name}</p>
            {/* Display restaurant menu here */}
            {/* Example: */}
            <ul>
              {restaurantSearchResult.menu.map((category, index) => (
                <li key={index}>
                  <h4>{category.category}</h4>
                  <ul>
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <p>{item.name} - ${item.price}</p>
                        <p>{item.description}</p>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        )}
        {restaurantError && <p className="text-danger mt-3">{restaurantError}</p>}
      </div>
    </>
  );
};

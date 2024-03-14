import React from 'react';
import './carousel.css';

const customSearchStyle = {
      backgroundColor: '#FC8019',
  fontFamily: 'Bitter'
};

const IndianStatesDropdown = () => {
  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana',
    'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
    'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep', 'Delhi', 'Puducherry'
  ];

  return (
    <select className="form-control me-2 w-75 bg-white text-dark dropdown" defaultValue="">
      <option value="" disabled >Select a state</option>
      {indianStates.map((state, index) => (
        <option key={index} value={state}>{state}</option>
      ))}
    </select>
  );
};

export default function Carousel() {
  return (
    <>
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: 9 }}>
          
            <h2 style={{ fontFamily: 'Shrikhand', fontSize: '80px', color: '#DDDDDD',  }}>GourmetGo</h2>
           
           
            <h1>Discover the best food & drinks</h1>
            <br></br>
            <br></br>
          
            <form className="d-flex justify-content-center" >
              <IndianStatesDropdown />
              <input className="form-control me-2 w-10 bg-white text-dark" type="search" placeholder="Type in..." aria-label="Search" />
              <button className="btn text-white" type="submit" style={customSearchStyle}>Search</button>
            </form>
          </div>
          <img
            src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
            style={{ filter: "brightness(50%)", height: "450px", width: "100%" }}
            alt="image"
          />
        </div>
      </div>
     </div>
     {/* <div style={{marginTop:"100px"}}></div> */}
</>
);
};
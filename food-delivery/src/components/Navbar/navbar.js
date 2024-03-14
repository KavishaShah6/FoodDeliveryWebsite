import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  
    const customNavbarStyle = {
      // backgroundColor: '#03dac5'
      backgroundColor: '#FC8019'
    };
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={customNavbarStyle}> 
        <div className="container-fluid">
          <Link className="navbar-brand fs-3" to="/">GourmetGo</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
              <Link className="nav-link" to="/delivery">DELIVERY</Link>
              <Link className="nav-link" to="/dining">DINING</Link>
              <Link className="nav-link" to="/events">EVENTS</Link>
              <Link className="nav-link" to="/login">LOGIN</Link>
              
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

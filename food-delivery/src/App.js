import './App.css';

import Home from './pages/Home/home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Login from './pages/Login/login';
import Delivery from './pages/Delivery/delivery';
import Dining from './pages/Dining/dining';
import Events from './pages/Events/events';


import './App.css';
// import '../node_modules/bootstrap-light-5/dist/css/bootstrap-light.min.css'  
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/delivery" element={<Delivery />} />
          <Route exact path="/dining" element={<Dining />} />
          <Route exact path="/events" element={<Events />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

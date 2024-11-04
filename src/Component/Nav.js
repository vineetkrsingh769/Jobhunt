// import React from 'react'
// import './Nav.css'
// import { Link } from 'react-router-dom';
// import logo from './Asset/logo1.jpg'
// const Nav = () => {
//   return (
//     <div>
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <img src={logo} alt="Logo" />
//         <div className='l-n'>JobHunt</div>
//       </div>
//       <ul className="navbar-menu">
//         <li className="navbar-item">
//           <Link to="/" className="navbar-link">Home</Link>
//         </li>

//         <li className="navbar-item">
//           <Link to="/list" className="navbar-link">Job Listing</Link>
//         </li>
//         <li className="navbar-item">
//           <Link to="/emp-prof" className="navbar-link">Employer Profiles</Link>
//         </li>

//       </ul>
//     </nav>

//     </div>
//   )
// }

// export default Nav
import React, { useState } from "react";
import "./Nav.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "./Asset/logo1.jpg";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const scrollToSection = (sectionId) => {
    navigate("/");
    const section = document.getElementById(sectionId);
   
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleAboutClick = () => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
    }
    // Adding a slight delay to allow the navigation to home to complete
    setTimeout(() => scrollToSection("about"), 10);
  };


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="JobHunt Logo" />
          <div className="l-n"><span>Job</span>hunt</div>
        </div>
        <div
          className="hamburger"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="navbar-menu"
        >
          &#9776; {/* Hamburger icon */}
        </div>
        <ul
          id="navbar-menu"
          className={`navbar-menu ${menuOpen ? "active" : ""}`}
        >
          <li className="navbar-item">
            <Link
              to="/"
              className="navbar-link"
              onClick={() => {
                setMenuOpen(false);
                scrollToSection("home");
              }}
            >
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <button
               
              className="navbar-btn"
              onClick={ handleAboutClick}
            >
              About
            </button>
          </li>
          <li className="navbar-item">
            <Link
              to="/jobs-list"
              className="navbar-link"
              onClick={() => setMenuOpen(false)}
            >
              Jobs
            </Link>
          </li>

          <li className="navbar-item">
            <Link
              to="/emp-prof"
              className="navbar-link"
              onClick={() => setMenuOpen(false)}
            >
              Employer Profiles
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;

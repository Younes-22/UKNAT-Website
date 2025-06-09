import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import '../css/Nav.css'; // We'll create this CSS file next
import logo from '../images/logo.jpg'; // Import the logo image

function Nav() {

    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () =>{
        //if the user scrolls down, hide the navbar
        if (window.scrollY > lastScrollY){
            setShowNav(false);
        } else { // if the user scrolls up, show the navbar
            setShowNav(true);
          }
          setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);

        //cleanup function
        return () =>{
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

  return (
    <header className={`navbar ${!showNav && 'hidden'}`}>
      <div className="navbar-brand">
        <img src={logo} alt="UK North African Trust Logo" className="logo" />
        <h1>UK North African Trust</h1>
      </div>
      <nav id="main-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/donate">Donations</Link></li>
          <li><Link to="/volunteer">Volunteer</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
      {/* You can keep this for mobile view later */}
      <div className="mobile-menu-btn">
        <i className="fas fa-bars"></i>
      </div>
    </header>
  );
}


export default Nav;
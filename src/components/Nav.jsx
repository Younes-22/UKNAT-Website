import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../css/Nav.css'; // Your CSS file
import logo from '../images/logo.jpg'; // Your logo image

function Nav() {
    const [showNav, setShowNav] = useState(true);
    // lastScrollY is still needed to detect scroll direction
    const [lastScrollY, setLastScrollY] = useState(0); 
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    // --- UPDATED: Smarter scroll control logic ---
    const controlNavbar = () => {
        // If the mobile menu is open, always show the navbar and do nothing else
        if (isMobileMenuOpen) {
            setShowNav(true);
            return;
        }

        // Check if the user is at the top of the page (e.g., within the first 100px)
        if (window.scrollY < 100) {
            setShowNav(true);
        } else {
            // If not at the top, only hide the navbar when scrolling down
            if (window.scrollY > lastScrollY) {
                setShowNav(false);
            }
        }
        
        // Update the last scroll position
        setLastScrollY(window.scrollY);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        // Add the event listener when the component mounts
        window.addEventListener('scroll', controlNavbar);
        
        // Return a cleanup function to remove it when the component unmounts
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY, isMobileMenuOpen]); 

    return (
        <>
            <header className={`navbar ${!showNav && 'hidden'}`}>
                <div className="navbar-brand">
                    <Link to="/">
                        <img src={logo} alt="UK North African Trust Logo" className="logo" />
                        <h1>UK North African Trust</h1>
                    </Link>
                </div>
                <nav id="desktop-nav">
                    <ul>
                        <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
                        <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link></li>
                        <li><Link to="/donate" onClick={() => setMobileMenuOpen(false)}>Donations</Link></li>
                        <li><Link to="/volunteer" onClick={() => setMobileMenuOpen(false)}>Volunteer</Link></li>
                        <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link></li>
                    </ul>
                </nav>
                <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Open menu">
                    <span className="hamburger-bar"></span>
                    <span className="hamburger-bar"></span>
                    <span className="hamburger-bar"></span>
                </button>
            </header>

            <nav id="mobile-sidebar" className={isMobileMenuOpen ? 'open' : ''}>
                 <div className="sidebar-header">
                    <div className="navbar-brand">
                         <Link to="/" onClick={toggleMobileMenu}>
                            <img src={logo} alt="UK North African Trust Logo" className="logo" />
                            <h2>UK North African Trust</h2>
                        </Link>
                    </div>
                    <button className="close-menu-btn" onClick={toggleMobileMenu} aria-label="Close menu">
                        &times;
                    </button>
                </div>
                <ul>
                    <li><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
                    <li><Link to="/about" onClick={toggleMobileMenu}>About Us</Link></li>
                    <li><Link to="/donate" onClick={toggleMobileMenu}>Donations</Link></li>
                    <li><Link to="/volunteer" onClick={toggleMobileMenu}>Volunteer</Link></li>
                    <li><Link to="/contact" onClick={toggleMobileMenu}>Contact Us</Link></li>
                </ul>
            </nav>

            {isMobileMenuOpen && <div className="overlay" onClick={toggleMobileMenu}></div>}
        </>
    );
}

export default Nav;
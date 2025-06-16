import { Link } from 'react-router-dom'
import "../css/Footer.css"
import { FaInstagram, FaLinkedin } from "react-icons/fa";


function Footer(){

    return(
        <footer>
        <div className="footer-content">
            <div className="footer-section">
                <h3>UK North African Trust</h3>
                <p>Making a difference, one step at a time.</p>
                <div className="social-icons">
                    <a href="https://www.instagram.com/northafricantrust?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/company/uk-north-african-trust/" target='_blank' rel='noopener noreferrer'>
                    <FaLinkedin />
                    </a>
                    
                    </div>
            </div>
            <div className="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/donate'>Donate</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li><Link to='/'>Home</Link></li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Contact Info</h3>
                <p><i className="fas fa-phone"></i> (123) 456-7890</p>
                <p><i className="fas fa-envelope"></i> uknorthafricantrust@gmail.com</p>
            </div>
        </div>
        <div className="footer-bottom">
            <br className='footer-br'/>
            <p>&copy; 2025 UK North African Trust. All rights reserved.</p>
        </div>
    </footer>
    )
}

export default Footer;
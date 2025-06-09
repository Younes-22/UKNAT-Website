import { Link } from 'react-router-dom'
import React from 'react';
import Eid2 from "../images/Eid2.jpg"
import AITechImg from "../images/laptopwithcode.jpeg"
import "../css/MessageBox.css"

function MessageBox(){

    return(
        <>
        <section className="news-announcements">
        <h2>Latest News & Announcements</h2>
        <div className="news-container">
            <div className="news-card">
            <img src={Eid2} alt="Eid photo" className="EidPhoto" />
            <div className="news-content">
                    <h3>Successful Eid Celebration 2025</h3>
                    <p>We hosted a joyful Eid gathering with over 100 attendees, celebrating with food, culture, and community spirit. Thank you to all volunteers!</p>
                </div>
            </div>
            <div className="news-card">
                <img src={AITechImg} alt="AI Event Logo" />
                <div className="news-content">
                    <h3>Tech for Youth Workshop</h3>
                    <p>Our Artificial Intelligence session engaged 20+ young people, encouraging innovation and confidence in the AI fields.</p>
                </div>
            </div>
        </div>
    </section>
    </>
    )
}

export default MessageBox;
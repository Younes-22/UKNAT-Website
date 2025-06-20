import volunteerimg from "../images/volunteerpic2.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsHelping, faChalkboardTeacher, faLaptopCode, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
import "../css/Volunteer.css";
import React, { useState } from 'react';

function Volunteer() {

    return (
        <>
            <section className="page-banner">
                <img src={volunteerimg} alt="volunteer image" className="banner-image" />
                <div className="banner-overlay">
                    <h2>Volunteer With Us</h2>
                </div>
            </section>
            <section className="volunteer-intro text-center">
                <div className="centering">
                    <h2 className="h2-size">Make a Difference</h2>
                    <p className="p-size">Volunteering with UK North African Trust offers a meaningful way to make a real difference.
                      Whether you bring specific skills or simply the willingness to give your time, your contribution can help support vital projects and strengthen 
                      our community.</p>
                    <p className="p-size">If you're able to volunteer, we’d love to hear from you.</p>
                </div>
            </section>
            <section className="centering">
                <h3 className="h2-size">Volunteer Opportunities</h3>
                <div>
                    <div className="opportunity-box text-center">
                        <FontAwesomeIcon icon={faHandsHelping} />
                        <h3 className="h3-size">Event Support</h3>
                        <p className="p-size">Help organise and run fundraising events.</p>
                    </div>
                    <div className="opportunity-box text-center">
                        <FontAwesomeIcon icon={faChalkboardTeacher} />
                        <h3 className="h3-size">Skills Training</h3>
                        <p className="p-size">Share your professional skills.</p>
                    </div>
                    <div className="opportunity-box text-center">
                        <FontAwesomeIcon icon={faLaptopCode} />
                        <h3 className="h3-size">Digital Support</h3>
                        <p className="p-size">Help with our website, social media.</p>
                    </div>
                    <div className="opportunity-box text-center">
                        <FontAwesomeIcon icon={faHandHoldingUsd} />
                        <h3 className="h3-size">Fundraising</h3>
                        <p className="p-size">Support our fundraising efforts.</p>
                    </div>
                </div>
            </section>
           
        </>
    );
}

export default Volunteer;

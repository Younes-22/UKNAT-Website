import { faPhone, faEnvelope, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import "../css/Contact.css";

function Contact(){
    
    const faqData = [
        {
            question: "How can I volunteer with The UK North African Trust?",
            answer: "You can volunteer by filling out our volunteer application form on this page or by emailing us."
        },
        {
        question: "How can my company partner with Hope Foundation?",
        answer: "We offer various corporate partnership opportunities, including sponsorships, cause marketing, and employee engagement programs. Please contact us at partnerships@hopefoundation.org to discuss possibilities."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    
    
    return(
        <>
            <section className="page-banner">
        {/* <img src="images/donation.jpg" alt="Donate to UKNAT" class="banner-image"> */}
        <div className="banner-overlay">
            <h2>Contact Us</h2>
        </div>
    </section>
    <section className="centering">
        <h2>Get in Touch</h2>
        <p>We'd love to hear from you! Whether you have questions about our work, want to volunteer, or need information about donations, our team is here to help.</p>
    </section>
    <section className="contact-container">
        <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="info-item">
                <FontAwesomeIcon icon={faPhone} className='info-icon' />
                <div>
                    <h4>Phone</h4>
                    <p><a href="tel:07555111250">07555111250</a></p>
                </div>
            </div>
            <div className="info-item">
                <FontAwesomeIcon icon={faEnvelope} className='info-icon' />
                <div>
                    <h4>Email</h4>
                    <p><a href="mailto:uknorthafricantrust@gmail.com">uknorthafricantrust@gmail.com</a></p>
                </div>
            </div>
            <div className="social-media">
                <h3>Connect With Us</h3>
                <div className="social-icons">
                    <a href="https://www.instagram.com/northafricantrust?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                </div>
            </div>
        </div>
    </section>
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {/* 3. Map over your data to render each FAQ item */}
        {faqData.map((faq, index) => (
          <div 
            // Add a dynamic 'open' class if the item's index matches the openIndex in state
            className={`faq-item ${openIndex === index ? 'open' : ''}`} 
            key={index}
          >
            <div className="faq-question" onClick={() => handleToggle(index)}>
              <h4>{faq.question}</h4>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
    )
}

export default Contact;
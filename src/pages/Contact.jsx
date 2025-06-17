import { faPhone, faEnvelope, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import "../css/Contact.css";
import contactimg from "../images/contactus.png";

function Contact(){
    
    const faqData = [
        {
            question: "How can I volunteer with The UK North African Trust?",
            answer: "You can volunteer by filling out our volunteer application form on this page or by emailing us."
        },
        {
        question: "How can my company partner with The UK North African Trust?",
        answer: "We offer various corporate partnership opportunities, including sponsorships, cause marketing, and employee engagement programs. Please contact us at uknorthafricantrust@gmail.com to discuss possibilities."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    
    
    return(
        <>
        <section className="page-banner">
                <img src={contactimg} alt="contact image" className="banner-image" />
        <div className="banner-overlay">
            <h2>Contact Us</h2>
        </div>
    </section>
    <section className="contact-intro">
        <h1 className='h1-size'>Get in Touch</h1>
        <p className='p-size'>We'd love to hear from you! Whether you have questions about our work, want to volunteer, or need information about donations, our team is here to help.</p>
    </section>
    <section className="contact-container">
        <div className="contact-info">
            <h3>Contact Information</h3>
            <div>
                <FontAwesomeIcon icon={faEnvelope} className='info-icon' />
                <div>
                    <h4>Email</h4>
                    <p>uknorthafricantrust@gmail.com</p>
                </div>
            </div>
            <div className="social-media">
                <h3>Connect With Us</h3>
                <div className="socialm-icons">
                    <a href="https://www.instagram.com/northafricantrust?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="https://www.linkedin.com/company/uk-north-african-trust/" target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
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
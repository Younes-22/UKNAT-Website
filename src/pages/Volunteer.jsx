import volunteerimg from "../images/volunteerpic2.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsHelping, faChalkboardTeacher, faLaptopCode, faHandHoldingUsd} from '@fortawesome/free-solid-svg-icons';
import "../css/Volunteer.css";
import React, { useState } from 'react';


function Volunteer(){
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        availability: 'Weekdays',
        interests: {events: false, skills: false, digital: false, fundraising: false},
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    // this function handles all the inputs
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox'){
            setFormData(prevFormData => ({
                ...prevFormData,
                interests:{
                    ...prevFormData.interests,
                    [name]: checked,
                }
            }));
        } 
        else {
            setFormData( prevFormData => ({
                ...prevFormData, // copy old data
                [name]: value // overwrite the one field that changed
        }));
    }
    }
    
    const handleSubmit= (e) => {
            //this prevents the page from reloading
            e.preventDefault();
            // console.log("submitted the following data: ", formData);
            setIsSubmitting(true);

            const url = '/api/submit-form';

            fetch(url, {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
            })
        .then((response) => response.json())
        .then((data) => {
            console.log(data); // The success response from SheetDB
            alert("Thank you for your application! We will be in touch soon.");
            setIsSubmitting(false); // Re-enable button
            // Optional: Reset the form after successful submission
            setFormData({
                name: '', email: '', phone: '', location: '', availability: 'weekdays',
                interests: { events: false, skills: false, digital: false, fundraising: false },
                message: ''
            });
        })
        .catch((error) => {
            console.error(error);
            alert("Sorry, there was an error submitting your form. Please try again.");
            setIsSubmitting(false); // Re-enable button on error too
        });
    };

    return(
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
            <p className="p-size">Volunteering with UK North African Trust is a rewarding experience that allows you to make a real difference in the lives of those in need. Based in London, our volunteers are the backbone of our organization, helping us deliver vital services and support to communities across North Africa.</p>
            <p className="p-size">Whether you have specific skills to offer or simply want to donate your time, we have opportunities for everyone. Join our team of dedicated volunteers today!</p>
        </div>
    </section>
    <section className="centering">
      <h3 className="h2-size">Volunteer Opportunities</h3>
      <div>
        <div className="opportunity-box text-center">
          <FontAwesomeIcon icon={faHandsHelping} />
          <h3 className="h3-size">Event Support</h3>
          <p className="p-size">Help organize and run fundraising events in London and across the UK.</p>
        </div>
        <div className="opportunity-box text-center">
          <FontAwesomeIcon icon={faChalkboardTeacher} />
          <h3 className="h3-size">Skills Training</h3>
          <p className="p-size">Share your professional skills with our team or beneficiaries.</p>
        </div>
        <div className="opportunity-box text-center">
          <FontAwesomeIcon icon={faLaptopCode} />
          <h3 className="h3-size">Digital Support</h3>
          <p className="p-size">Help with our website, social media, or digital marketing efforts.</p>
        </div>
        <div className="opportunity-box text-center">
          <FontAwesomeIcon icon={faHandHoldingUsd} />
          <h3 className="h3-size">Fundraising</h3>
          <p className="p-size">Support our fundraising efforts to advance and sustain our charitable initiatives.</p>
        </div>
      </div>

    </section>
        <section className="centering"> 
      <h2>Register Your Interest</h2>
      
      <form id="volunteer-registration-form" className="narrow-form" onSubmit={handleSubmit}>
        <div className="form-group">
          {/* We use htmlFor instead of for */}
          <label htmlFor="name">Full Name *</label> 
          {/* Inputs must be self-closed with a '/>' */}
          <input type="text" id="name" name="name" required
        //   this locks the input to only accept text
          value={formData.name}
          onChange={handleChange} /> 
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address *</label> 
          <input type="email" id="email" name="email" required
        //   this locks the input to only accept email properties
          value={formData.email}
          onChange={handleChange} /> 
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label> 
          <input type="tel" id="phone" name="phone" 
        //   this locks the input to only accept phone properties
          value={formData.phone}
          onChange={handleChange} /> 
        </div>
        <div className="form-group">
          <label htmlFor="location">Location (City/Town)</label> 
          <input type="text" id="location" name="location" 
        //   this locks the input to only accept phone properties
          value={formData.location}
          onChange={handleChange} /> 
        </div>
        <div className="form-group">
            <label htmlFor="availability">Availability</label>
            <select name="availability" id="availability" value={formData.availability || ''} onChange={handleChange}>
                <option value="Weekdays">Weekdays</option>
                <option value="Weekends">Weekends</option>
                <option value="Flexible">Flexible</option>
            </select>
        </div>
        <div className="form-group">
            <label>Areas of Intrest (Select all that apply)</label>
            <div className="checkbox-group">
                <label>
                    <input type="checkbox" name="events" checked={formData.interests.events} onChange={handleChange} /> Event Support
                </label>
                <label>
                    <input type="checkbox" name="skills" checked={formData.interests.skills} onChange={handleChange} /> Skills Training
                </label>
                <label>
                    <input type="checkbox" name="digital" checked={formData.interests.digital} onChange={handleChange} /> Digital Support
                </label>
                <label>
                    <input type="checkbox" name="fundraising" checked={formData.interests.fundraising} onChange={handleChange} /> Fundraising
                </label>
            </div>
        </div>


        <div className="form-group">
            <label htmlFor="message">Additional Information (Optional)</label>
            <textarea id="message" name="message" rows="4" 
            placeholder="Is there anything else you'd like to tell us about yourself or your interest in volunteering?"
            value={formData.message} onChange={handleChange}
            ></textarea>
        </div>
        <div className="submit-button">
            <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
      </form>
    </section>
        </>
    );
}

export default Volunteer;
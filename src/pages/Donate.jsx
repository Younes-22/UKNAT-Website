import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingUsd, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import DonationSelector from '../components/DonationSelector';
import '../css/Donate.css';

export default function DonationPage() {
  return (
    <div className="centering">
      <header className="text-center mb-10">
        <h1 className="centering">
          Make a Difference Today
        </h1>
        <p className="centering">
          Your generous contribution powers our mission and helps us create positive change.
          Every donation, no matter the size, has a real impact.
        </p>
      </header>
              <section className="donation-options">
        <h2 className="centering">Ways to Give</h2>
        <div className="options-container">
            <div className="option-box">
                <FontAwesomeIcon icon={faHandHoldingUsd} />
                <h3>One-Time Donation</h3>
                <p>Make an immediate impact with a one-time contribution to support our ongoing projects.</p>
                <a href="#donation-form" className="btn">Donate Now</a>
            </div>
            <div className="option-box">
                <FontAwesomeIcon icon={faSyncAlt} />
                <h3>Monthly Giving</h3>
                <p>Become a sustaining supporter by setting up a recurring monthly donation to provide consistent help.</p>
                <a href="#donation-form" className="btn">Become a Monthly Donor</a>
            </div>
        </div>
        </section>
      <main>
        {/* 2. Render the component here */}
        <DonationSelector />
      </main>

      <footer className="mt-10 text-center text-sm text-gray-400">
        <p>Thank you for your support.</p>
        <p>All payments are processed securely by Stripe.</p>
      </footer>
    </div>
  );
}
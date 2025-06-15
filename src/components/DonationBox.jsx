import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import '../css/DonationBox.css'; // Make sure you have the corresponding CSS file

// Initialize Stripe outside of the component.
// Your Vite public key is safe to be exposed on the frontend.
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

function DonationBox() {
  const [donationType, setDonationType] = useState('single');
  const [amount, setAmount] = useState(10);
  const [customAmount, setCustomAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const impactMessages = {
    10: '£10 could help us be there for children who feel alone.',
    20: '£20 could help us provide essential school supplies.',
    50: '£50 could provide a family with an emergency food parcel.',
    other: 'Every penny you give helps us make a difference.',
  };

  const handleAmountClick = (value) => {
    setAmount(value);
    if (value !== 'other') {
      setCustomAmount('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage(''); // Clear previous errors

    const finalAmount = amount === 'other' ? parseFloat(customAmount) : amount;

    if (isNaN(finalAmount) || finalAmount < 1) {
      setErrorMessage("Please enter a valid donation amount greater than £1.");
      setIsLoading(false);
      return;
    }

    const donationDetails = {
      amount: finalAmount,
      donationType: donationType,
    };

    try {
      // Step 1: Call our serverless function to create a checkout session
      const response = await fetch('/api/create-checkout-session', { // This URL points to the Vercel function
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(donationDetails),
      });

      const session = await response.json();
      
      if (!response.ok) {
        throw new Error(session.error?.message || 'Failed to create checkout session.');
      }

      // Step 2: Use the session ID to redirect to Stripe's hosted checkout page
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      console.error("Checkout Error:", error);
      setErrorMessage(`An error occurred: ${error.message}`);
      setIsLoading(false);
    }
  };

  return (
    <form className="donation-container" onSubmit={handleSubmit}>
      <div className="donation-type-selector">
        <button type="button" className={donationType === 'single' ? 'active' : ''} onClick={() => setDonationType('single')}>
          ✓ Single donation
        </button>
        <button type="button" className={donationType === 'monthly' ? 'active' : ''} onClick={() => setDonationType('monthly')}>
          Monthly donation
        </button>
      </div>

      <div className="donation-box">
        <div className="donation-content">
          <h2>My Donation</h2>
          <p className="donation-intro">
            I am making a <strong>{donationType}</strong> donation of *
          </p>
          <div className="amount-selector">
            <button type="button" className={amount === 10 ? 'active' : ''} onClick={() => handleAmountClick(10)}>£10</button>
            <button type="button" className={amount === 20 ? 'active' : ''} onClick={() => handleAmountClick(20)}>£20</button>
            <button type="button" className={amount === 50 ? 'active' : ''} onClick={() => handleAmountClick(50)}>£50</button>
            <button type="button" className={amount === 'other' ? 'active' : ''} onClick={() => handleAmountClick('other')}>Other</button>
          </div>
          {amount === 'other' && (
            <div className="custom-amount-wrapper">
              <span>£</span>
              <input
                type="number"
                className="custom-amount-input"
                placeholder="Enter amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                min="1"
                required
              />
            </div>
          )}
          <p className="impact-description">
            {impactMessages[amount] || impactMessages.other}
          </p>
        </div>
        <div className="donation-image">
          {/* You can add an image here if you have one */}
          <p>You could help us answer life-changing calls.</p>
        </div>
      </div>
      
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <div className="monthly-pitch">
        <button type='submit' className='btn btn-large' disabled={isLoading}>
          {isLoading ? 'Processing...' : 'Proceed to Checkout'}
        </button>
      </div>
    </form>
  );
}

export default DonationBox;
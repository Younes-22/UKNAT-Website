import React, { useState, useEffect } from 'react'; // Import useEffect
import '../css/DonationSelector.css'; // Import the updated CSS file

// A mapping object to hold all our payment links.
const paymentLinks = {
  10: {
    once: import.meta.env.VITE_STRIPE_10_ONCE,
    monthly: import.meta.env.VITE_STRIPE_10_MONTHLY,
  },
  20: {
    once: import.meta.env.VITE_STRIPE_20_ONCE,
    monthly: import.meta.env.VITE_STRIPE_20_MONTHLY,
  },
  50: {
    once: import.meta.env.VITE_STRIPE_50_ONCE,
    monthly: import.meta.env.VITE_STRIPE_50_MONTHLY,
  },
  // Add the custom link under its own key
  custom: {
    once: import.meta.env.VITE_STRIPE_CUSTOM_ONCE,
  },
};

// Text to show the impact of each donation amount
// const impactData = {
//   10: "can provide a warm meal for a family.",
//   20: "can offer essential school supplies for a child.",
//   50: "can give emergency shelter for a night.",
// };

export default function DonationSelector() {
  const [frequency, setFrequency] = useState('once');
  const [amount, setAmount] = useState(10); // Default selected amount

  // The base amounts including the 'custom' option
  const baseDonationAmounts = [10, 20, 50, 'custom'];
  
  // Conditionally filter out the 'custom' option if frequency is 'monthly'
  const availableAmounts = frequency === 'once' 
    ? baseDonationAmounts 
    : baseDonationAmounts.filter(amt => amt !== 'custom');

  // NEW: useEffect to handle switching from a custom amount to monthly
  useEffect(() => {
    // If the user switches to 'monthly' while 'custom' is selected,
    // reset their selection to a valid default amount.
    if (frequency === 'monthly' && amount === 'custom') {
      setAmount(10); // Reset to the default amount
    }
  }, [frequency, amount]); // This effect runs whenever frequency or amount changes

  const handleProceedToCheckout = () => {
    // This logic now correctly finds the 'custom' link when needed
    const url = paymentLinks[amount]?.[frequency];
    if (url) {
      window.location.href = url;
    } else {
      console.error(`Payment link for ${amount} (${frequency}) not found.`);
      alert('Sorry, the payment link for this option is not available yet.');
    }
  };

  return (
    <div className="donation-container">
      <div className="donation-type-selector">
        <button onClick={() => setFrequency('once')} className={frequency === 'once' ? 'active' : ''}>
          Single Donation
        </button>
        <button onClick={() => setFrequency('monthly')} className={frequency === 'monthly' ? 'active' : ''}>
          Monthly Donation
        </button>
      </div>

      <div className="donation-box">
        <p className="donation-intro">
          Your generosity makes a real difference.
        </p>
        <div className="amount-selector">
          {/* We now map over the conditionally filtered 'availableAmounts' */}
          {availableAmounts.map((amt) => (
            <button key={amt} onClick={() => setAmount(amt)} className={amount === amt ? 'active' : ''}>
              {/* Conditionally render the button text */}
              {amt === 'custom' ? 'Other' : `£${amt}`}
            </button>
          ))}
        </div>

        <p className="impact-description">
          {/* Conditionally render the impact text */}
          {amount === 'custom' 
            ? 'Proceed in order to select amount.' 
            : `Your gift of £${amount}`
          }
        </p>

        <button onClick={handleProceedToCheckout} className="btn-large">
          {/* Conditionally render the button text */}
          {amount === 'custom' 
            ? 'Proceed to Donation' 
            : `Donate £${amount} ${frequency === 'monthly' ? 'per month' : 'once'}`
          }
        </button>
      </div>
      
      {frequency === 'once' && (
        <div className="monthly-pitch">
          <p>
            Did you know? A <strong onClick={() => setFrequency('monthly')}>monthly donation</strong> helps us plan for the future and create lasting change.
          </p>
        </div>
      )}
    </div>
  );
}
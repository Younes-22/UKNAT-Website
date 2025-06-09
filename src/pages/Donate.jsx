import "../css/Donate.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingUsd, faSyncAlt } from '@fortawesome/free-solid-svg-icons';

function Donate(){
    return(
    <>
    <section class="page-banner">
        {/* <img src="images/donation.jpg" alt="Donate to UKNAT" class="banner-image"> */}
        <div class="banner-overlay">
            <h2>Donate</h2>
        </div>
    </section>
    <section class="donation-intro">
        <h2>Your Support Makes a Difference</h2>
        <p>Every donation, no matter the size, helps us continue our mission of bringing hope and support to communities in need. Your generosity can change lives and create lasting impact.</p>
    </section>

        <section className="donation-options">
        <h2 className="centering">Ways to Give</h2>
        <div className="options-container">
            <div className="option-box">
                <FontAwesomeIcon icon={faHandHoldingUsd} />
                <h3>One-Time Donation</h3>
                <p>Make an immediate impact with a one-time contribution to support our ongoing projects.</p>
                <a href="#donation-form" class="btn">Donate Now</a>
            </div>
            <div className="option-box">
                <FontAwesomeIcon icon={faSyncAlt} />
                <h3>Monthly Giving</h3>
                <p>Become a sustaining supporter by setting up a recurring monthly donation to provide consistent help.</p>
                <a href="#donation-form" class="btn">Become a Monthly Donor</a>
            </div>
        </div>
        </section>
    </>
    )
}

export default Donate;
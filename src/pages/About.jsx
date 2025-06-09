import bannerimg from "../images/uknatbannerh.jpeg";
import "../css/About.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faEye } from '@fortawesome/free-solid-svg-icons';

function About(){
    return(
        <>
        <section className="page-banner">
            <img src={bannerimg} alt="banner image" className="banner-image" />
        <div className="banner-overlay">
            <h2>About Us</h2>
        </div>
    </section>
    <section className="about-intro">
        <div className="about-content">
            <h2>Our Story</h2>
            <p>Hope Foundation was established in 2005 with a simple mission: to bring hope and support to communities in need around the world. What started as a small group of dedicated volunteers has grown into an international organization with a presence in 25 countries.</p>
            <p>Our journey began when our founder, Jane Smith, witnessed the devastating effects of poverty during her travels. Determined to make a difference, she gathered a team of like-minded individuals who shared her passion for helping others.</p>
        </div>
    </section>

    <section className="mission-vision">
        <div className="mission">
            <FontAwesomeIcon icon={faBullseye} />
            <h3>Our Mission</h3>
            <p>To empower communities through sustainable development initiatives, education, and humanitarian aid, creating lasting positive change in the lives of those we serve.</p>
        </div>
        <div className="vision">
            <FontAwesomeIcon icon={faEye} />
            <h3>Our Vision</h3>
            <p>A world where every individual has access to basic necessities, education, and opportunities to thrive, regardless of their circumstances or location.</p>
        </div>
    </section>
    <section class="our-work">
            <div clasName="container">
                <h2 className="centering">Our Impact</h2>
                <p className="centering">Here are some of the ways we've made a difference in North African communities.</p>
                
                <div className="work-showcase">
                    <div className="centering">
                        <h3>Ramadan Iftar Aid Campaign</h3>
                        <p>In the blessed month of Ramadan, we successfully raised funds to provide food packages to families in need across Algeria, ensuring they had nutritious meals for their iftar.</p>
                        <div className="video-container">
                            <video controls playsinline autoplay muted>
                                {/* <source src="images/iftaraidvid.mp4" type="video/mp4"> */}
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default About;
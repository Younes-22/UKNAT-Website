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
        <div className="centering">
            <h2>Our Story</h2>
            <p>The UK North African Trust is a charitable organization founded in 2016 to support and empower the North African community and beyond in the UK. The Trust organizes a wide range of cultural, religious, educational, and charitable events and activities, fostering unity and personal development. 
                It extends its impact by supporting charitable causes both in the UK and North Africa, addressing key social needs. With a strong focus on youth engagement, the Trust provides young people with opportunities through cultural, educational, entertainment, and sports activities, helping them thrive in society.</p>
            <p>Additionally, the Trust is committed to environmental protection and promoting a healthy lifestyle, 
                contributing to a sustainable future for all. Through its diverse initiatives, the UK North African Trust continues to make a meaningful difference in the lives of individuals and communities.</p>
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
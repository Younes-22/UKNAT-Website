import Nav from "../components/Nav";
import MessageBox from "../components/MessageBox"
import Eid from "../images/Eid.jpg";
import empowering from "../images/empowering.jpg";
import charity from "../images/charity.jpg";
import "../css/Home.css";
import { Link } from 'react-router-dom'


function Home(){
    return(
        <>
        <div>
            <h1 className="centering">Welcome to the UK North African Trust Website</h1>
            < MessageBox />
            </div>
        <section className="hero">
            <div className="hero-content">
            <h2>SERVING NORTH AFRICAN COMMUNITIES AND BEYOND</h2>
            <p>UK North African Trust supports sustainable development and cultural vitality through cultural, educational, and social activities. We empower the North African community and beyond in the UK through learning, celebration, and impactful charity projects.</p>
            </div>
        </section>
        <section className="featured-initiatives">
        <h2>Featured Initiatives</h2>
        <div className="initiatives-container">
            <div className="initiative-card">
                <img src={Eid} alt="Eid Celebration" />
                <div className="initiative-content">
                    <h4 className="category">CULTURAL INITIATIVE</h4>
                    <h3>Celebrating Heritage</h3>
                    <p>Hosting cultural events and festivals that highlight North African faith, traditions, and arts bringing communities together in celebration and unity.</p>
                </div>
            </div>
            <div className="initiative-card">

                <img src={empowering} alt="Empowering image" />
                <div className="initiative-content">
                    <h4 className="category">EDUCATIONAL INITIATIVE</h4>
                    <h3>Empowering Young People</h3>
                    <p>Providing educational resources, skills training, and access to technology for young people, equipping them with the tools they need for future success.</p>
                </div>
            </div>
            <div className="initiative-card">
                <img src={charity} alt="Charity campaign" />
                <div className="initiative-content">
                    <h4 className="category">CHARITY CAMPAIGN</h4>
                    <h3>Community Support Initiatives</h3>
                    <p>Organising and running a range of impactful charity projects focused on community welfare, environmental sustainability, and emergency relief. We aim to promote wellbeing, sustainability, and solidarity within and beyond our community.</p>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Home;
import { React, useState,} from 'react'
// import { Check, X } from 'lucide-react'
import "./BussinessModelPage.css"

import bussinessbannerimg from "../Images/bussinessbanner.png"
import Header from '../Components/header'
import Footer from '../Components/Footer'
import MegaMenus from '../Components/MegaMenus'
import AnimatedSection from '../Components/AnimatedSection'

import modeldeatailsimg from '../Images/modeldetails.png'
import modeldeatailsimgmob from '../Images/modeldetailsmob.png'
function BussinessModelPage() {
    const isMobileView = window.innerWidth <= 768;

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeNavItem, setActiveNavItem] = useState(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [isOpen, setIsOpen] = useState(false);
    const [closing, setClosing] = useState(false);

    const toggleForm = () => {
        if (isOpen) {
            setClosing(true);
        } else {
            setIsOpen(true);
        }
    };

    const handleClose = () => {
        setClosing(true);
    };

    const onAnimationEnd = () => {
        if (closing) {
            setIsOpen(false);
            setClosing(false);
        }
    };
    return (
        <>
            <main>
                <section id='hero-header' style={{ backgroundImage: `url(${bussinessbannerimg})` }}>
                    <header>
                        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} toggleForm={toggleForm} setIsNavItemHover={setActiveNavItem} activeNavItem={activeNavItem} />
                    </header>
                    <section className="partners-hero">
                        <AnimatedSection animation="flyIn" length={100} direction='left'>
                            <div className="partners-hero-content bussinessmodelhero">
                                <h1><span className='highlight-green'>Business</span> Models</h1>
                                <p>ChargeBay offers multiple models, broadly categorised to meet your business needs. While we do generalise our model into three segments, each deal is different with no-one-size fits all approach</p>
                                <button className='learn-more transperant'><span>Contact Now</span></button>
                            </div>
                        </AnimatedSection>
                    </section>
                </section>

                <div className="unique-model-container">
                    <h1 className="unique-model-header">
                        ChargeBay has <span className="highlight-blue">3 Unique</span> Models
                    </h1>
                    <p className="unique-model-subheader">
                        However, each one comes with ZERO Network fees, and complimentary manufacturer's warranty.<br />
                        Because we don't believe in extorting money by selling equipment that doesn't work.
                    </p>
                    <div className="unique-model-models">
                        <div className="unique-model-card">
                            <h2>Host owned:<br />
                                Charger Purchase Model</h2>
                            <p>
                                A simple buy-out model for total control and high revenue<br /> generation. Buy out a charger from ChargeBay for a nominal yearly subscription or use your own equipment for a custom deal with ChargeBay.
                            </p>
                        </div>
                        <div className="unique-model-card">
                            <h2>ChargeBay Partner:<br />
                                Revenue sharing model</h2>
                            <p>
                                We know the Cost of Capital is high, so earn revenue and attract users with even lower investments.<br /> Let ChargeBay co-invest to EV-nize your location. Help us prepare the site and install chargers we pay for at a cheaper subscription.
                            </p>
                        </div>
                        <div className="unique-model-card">
                            <h2>Turn-key solution:<br />
                                ChargeBay owns Everything</h2>
                            <p>
                                Completely Hassle-free for the host. Select Locations ONLY.<br /> Attract customers, without worries, let ChargeBay figure out how for only $100/mo.<br /> PS - People pay more on a gym membership that they don't use.
                            </p>
                        </div>
                    </div>
                </div>

                <section className="model-details">
                    <h1>Model Details</h1>
                    {/* <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th className="ecosystem">
                                        <div>Ecosystem</div>
                                        <div className="subtitle">Requirements</div>
                                    </th>
                                    <th className="host-owned" colSpan={2}>
                                        <div>Host Owned</div>
                                        <div className="subtitle">Charger Purchase Model</div>
                                    </th>
                                    <th className="chargebay-partner" colSpan={2}>
                                        <div>ChargeBay Partner</div>
                                        <div className="subtitle">Revenue Share Model</div>
                                    </th>
                                    <th className="chargebay-owned" colSpan={2}>
                                        <div>ChargeBay Owned</div>
                                        <div className="subtitle">Turn-Key Solution</div>
                                    </th>
                                </tr>
                                <tr className="subheader">
                                    <th></th>
                                    <th>Host</th>
                                    <th>ChargeBay</th>
                                    <th>Host</th>
                                    <th>ChargeBay</th>
                                    <th>Host</th>
                                    <th>ChargeBay</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Equipment Cost</td>
                                    <td><Check size={20} /></td>
                                    <td><X size={20} /></td>
                                    <td><X size={20} /></td>
                                    <td><Check size={20} /></td>
                                    <td><X size={20} /></td>
                                    <td><Check size={20} /></td>
                                </tr>
                                <tr>
                                    <td>Site Prep & Installation</td>
                                    <td><Check size={20} /></td>
                                    <td><X size={20} /></td>
                                    <td><Check size={20} /></td>
                                    <td><X size={20} /></td>
                                    <td><X size={20} /></td>
                                    <td><Check size={20} /></td>
                                </tr>
                                <tr>
                                    <td>Electricity Cost</td>
                                    <td><Check size={20} /></td>
                                    <td><X size={20} /></td>
                                    <td><Check size={20} /></td>
                                    <td><X size={20} /></td>
                                    <td><X size={20} /></td>
                                    <td><Check size={20} /></td>
                                </tr>
                                <tr>
                                    <td>Maintenance</td>
                                    <td><Check size={20} /></td>
                                    <td><X size={20} /></td>
                                    <td><X size={20} /></td>
                                    <td><Check size={20} /></td>
                                    <td><X size={20} /></td>
                                    <td><Check size={20} /></td>
                                </tr>
                                <tr>
                                    <td>Subscription Fee<sup>1</sup></td>
                                    <td colSpan={2}>
                                        <div>Starting At</div>
                                        <div className="price">$495/Yr</div>
                                    </td>
                                    <td colSpan={2}>
                                        <div>Starting At</div>
                                        <div className="price">$35/Mo</div>
                                    </td>
                                    <td colSpan={2}>
                                        <div>Starting At</div>
                                        <div className="price">$100/MO</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Revenue Split<sup>2</sup></td>
                                    <td><div className="percentage">65%</div></td>
                                    <td><div className="percentage">35%</div></td>
                                    <td><div className="percentage dark">35%</div></td>
                                    <td><div className="percentage dark">65%</div></td>
                                    <td><div className="percentage">Up To 10%</div></td>
                                    <td><div className="percentage">65%</div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="footnotes">
                        <p>1. Installation Can Be Covered By ChargeBay And Paid Through A Monthly Subscription. 10% Discount If Paid Upfront Annually.</p>
                        <p>2. Revenue Split Negotiable On A Client-By-Client Basis.</p>
                    </div> */}

                    {!isMobileView && (<img src={modeldeatailsimg} alt="" draggable='false'/>)}
                    {isMobileView && (<img src={modeldeatailsimgmob} alt="" draggable='true'/>)}
                </section>

                <section className="doubts bussinessmodel">
                    <h2>Got more doubts?</h2>
                    <button className="learn-more-white transperant"><span>All Questions</span></button>
                </section>

                <footer>
                    <Footer />
                </footer>
                {activeNavItem && (
                    <MegaMenus
                        activeNavItem={activeNavItem}
                        setIsNavItemHover={setActiveNavItem}
                        toggleForm={toggleForm}
                    />
                )}
                {isOpen && (
                    <div className="contact-form-overlay">
                        <div
                            className={`contact-form ${closing ? "slide-out" : "slide-in"}`}
                            onAnimationEnd={onAnimationEnd} // Handle animation end event
                        >
                            <button onClick={handleClose} className="close-button" aria-label="Close form">
                                ✕
                            </button>
                            <h2>Get in Touch</h2>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="form-group">
                                    <label htmlFor="fullName">Full Name</label>
                                    <input type="text" id="fullName" name="fullName" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inquiry">What's the nature of your inquiry</label>
                                    <select id="inquiry" name="inquiry" required>
                                        <option value="">Select inquiry type</option>
                                        <option value="">Item 1</option>
                                        <option value="">Item 2</option>
                                        <option value="">Item 3</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Please provide all pertinent details about your inquiry</label>
                                    <textarea id="message" name="message" rows="4" required></textarea>
                                </div>
                                <button onClick={() => { console.log("Msg Sended") }} className="submit-button">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </main>
        </>
    )
}

export default BussinessModelPage
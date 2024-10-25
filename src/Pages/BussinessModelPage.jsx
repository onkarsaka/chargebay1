import { React, useState, useEffect } from 'react'
import "./BussinessModelPage.css"

import multifamilybannerimg from "../Images/multifamilyhero.png"
import Header from '../Components/header'
import Footer from '../Components/Footer'
import MegaMenus from '../Components/MegaMenus'
import AnimatedSection from '../Components/AnimatedSection'

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
                <section id='hero-header' style={{ backgroundImage: `url(${multifamilybannerimg})` }}>
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

                <section className='uniquemodel-section'>
                    <div className='uniquemodel-section-cards'></div>
                    <div className='uniquemodel-section-cards'></div>
                    <div className='uniquemodel-section-cards'></div>
                </section>

                <section className='modeldetails-section'>
                    <div className='modeldetails-section-cards'></div>
                </section>

                <section className="doubts bussinessmodel">
                    <h2>Got more doubts?</h2>
                    <button className="learn-more"><span>Contact Now</span></button>
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
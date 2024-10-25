import { React, useState, useEffect, useRef } from 'react'
import "./DriversPage.css"
import { ChevronRight } from 'lucide-react';

import Header from '../Components/header';
import Footer from '../Components/Footer';

import mobimg from '../Images/img2.png'

import sampleimg from "../Images/sample charger.png"

import AnimatedSection from '../Components/AnimatedSection';

import multifamilybannerimg from "../Images/multifamilyhero.png"

import chargerimg from "../Images/charger.png"

import playstore from "../Images/googleplay.png"
import appstore from "../Images/appstore 1.png"

import MegaMenus from '../Components/MegaMenus';

function AboutChargingPage() {

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

    const Feature = ({ icon, title }) => {
        return (
            <div className="abt-charging-why-chargebay-feature">
                <div className="abt-charging-why-chargebay-icon">{icon}</div>
                <p className="abt-charging-why-chargebay-feature-title">{title}</p>
            </div>
        );
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const titles = [
        { id: 1, text: 'The ChargeBay App' },
        { id: 2, text: 'Pay as you go ', subText: "with ChargeBay card" },
        { id: 3, text: 'Instant charging with our app-clips simply scan the QR code' },
    ];

    const images = [
        sampleimg,
        sampleimg,
        sampleimg,
    ];

    const titles2 = [
        { id: 1, text: 'The ChargeBay App' , heighttext : 'seamless-card-title-lowheight'},
        { id: 2, text: 'Pay as you go ', subText: "with ChargeBay card" },
        { id: 3, text: 'Instant charging with our app-clips simply scan the QR code', heighttext : 'seamless-card-title-highheight'},
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);


    const [currentIndex2, setCurrentIndex2] = useState(0);
    const handleNext = () => {
        setCurrentIndex2((prevIndex) => (prevIndex + 1) % titles.length);
    };

    return (
        <>
            <main>
                <section id="hero-header" style={{ backgroundImage: `url(${multifamilybannerimg})` }}>
                    <header>
                        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} toggleForm={toggleForm} setIsNavItemHover={setActiveNavItem} activeNavItem={activeNavItem} />
                    </header>

                    <section className="chargings-hero">
                        <div className="chargings-hero-content">
                            <h1>Convenient Charging,<br /> all at this <span className="abt-charging-highlight">One-Stop.</span></h1>
                            <p>With ChargeBay, you gain control over your charging experience. Its seamlessly integrated amenities and features are designed to work directly with your car and the charger, allowing for guaranteed reservations and a top-notch charging experience whenever you need it.</p>
                            <h3><span className="highlight-green">3x faster</span> than any other competitors.</h3>
                        </div>

                        <div className="chargings-hero-image">
                            <img src={mobimg} alt="" />
                        </div>
                    </section>

                </section>

                <div className="seamless-section">
                    <h2>
                        Multiple Ways for <span className="abt-charging-highlight">Seamless</span> Charging
                    </h2>
                    {!isMobileView && (
                        <div className="seamless-section-content-wrapper">
                            <div className="seamless-section-titles">
                                {titles.map((title, index) => (
                                    <h3
                                        key={title.id}
                                        className={index === currentIndex ? 'active' : 'inactive'}
                                    >
                                        {title.text}<br></br>
                                        <p>
                                            {title.subText}
                                        </p>
                                    </h3>
                                ))}
                            </div>

                            <div className="seamless-section-image-container">
                                <div
                                    className="seamless-section-image-scroll"
                                    style={{ transform: `translateY(-${currentIndex * 35}%)` }}
                                >
                                    {images.map((src, index) => (
                                        <div key={index} className="seamless-section-image-wrapper">
                                            <img src={src} alt={`ChargeBay feature ${index}`} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                    {isMobileView && (
                        <div className="seamless-carousel-container">
                            <div className="seamless-carousel-card">
                                <img
                                    src={images[currentIndex2]}
                                    className="seamless-card-images"
                                />
                                <div className="seamless-card-overlay">
                                    <h3 className={`seamless-card-title ${titles2[currentIndex2].heighttext}`}>{titles2[currentIndex2].text}</h3>
                                    {titles2[currentIndex2].subText && (
                                        <p className="seamless-card-subtext">{titles2[currentIndex2].subText}</p>
                                    )}
                                </div>
                                <button onClick={handleNext} className="seamless-next-button" aria-label="Next card">
                                    <ChevronRight />
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <section className="evdriverssection">
                    <div className='evdrivers'>
                        <p >At ChargeBay, we empower EV drivers with the freedom to select their <span className="highlight-black">preferred charging method.</span></p>
                        <p >Whether through our user-friendly mobile app or our complimentary <span className="highlight-black">tap-and-go RFID charge digital card</span>, we are committed to delivering a seamless charging experience.</p>
                        <p >Our dedication extends beyond app downloads, as <span className="highlight-black">you can conveniently scan the QR code</span> and utilize our intuitive app-clips for effortless charging.</p>
                        <button className="learn-more-white transperant"><span>Learn More</span></button>
                    </div>
                    <div className="evdriversimage">
                        <img src={chargerimg} alt="" />
                    </div>
                </section>

                <section className="abt-charging-why-chargebay">
                    <h2 className="abt-charging-why-chargebay-title">
                        But <span className="abt-charging-highlight">Why</span> ChargeBay?
                    </h2>
                    <div className="abt-charging-why-chargebay-features">
                        <Feature
                            icon="⚡"
                            title="Seamless EV charging experience with a one-stop solution."
                        />
                        <Feature
                            icon="☰"
                            title="Conveniently Booking and Charging"
                        />
                        <Feature
                            icon="🕒"
                            title="Real-Time & Personalised Updates"
                        />
                        <Feature
                            icon="🗺️"
                            title="Plan Efficient Charging Trips"
                        />
                        <Feature
                            icon="💳"
                            title="Hassle-Free Direct Payment"
                        />
                    </div>
                </section>

                <section className="app-download">
                    <h2>Find out how seamless EV charging can be. Download the ChargeBay app</h2>
                    <div className="app-buttons">
                        <img src={playstore} alt="Get it on Google Play" />
                        <img src={appstore} alt="Download on the App Store" />
                    </div>
                </section>

                <section className="discover">
                    <h1>Discover ChargeBay Station</h1>
                    <button className='learn-more transperant'><span>Find Now</span></button>
                </section>

                <section className="asked-que">
                    <h2>Frequently Asked Questions?</h2>
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

export default AboutChargingPage
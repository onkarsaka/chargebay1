import { React, useState } from 'react'
import { FiPlus, FiX } from 'react-icons/fi';
import './QAPage.css'

import Header from '../Components/header'
import Footer from '../Components/Footer';
import MegaMenus from '../Components/MegaMenus';

import QAbannerimg from '../Images/QAbanner.png'
function QAPage() {

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

  const productQA = [
    {
      title: 'Are ChargeBay chargers Water resistant?',
      description: 'Yes, ChargeBay equipment is built with a rugged design rated for outdoor use. The chargers are manufactured by Emporia and are UL-listed along with Energy Star certification.',
      content: [],
      firstcard: "first-accordion-item"
    },
    {
      title: 'Energy & Property Consultants',
      description: 'Showcase your solution-based selling skills and strengthen client relationships by offering an EV charging solution with advanced energy management, maximum uptime, and customizable access controls, all without proprietary hardware or vendor lock-in.',
      content: [],
    },
    {
      title: 'PropTech Companies',
      description: 'Partner with our EV charging software to improve your building management software offerings. Our expertise in energy management, including distributed energy integrations, load management, and bidirectional charging, can help you prepare for the future of energy management.',
      content: [],
      lastcard: 'last-accordion-item',
    },
  ];

  const managementQA = [
    {
      title: 'How does installation work for EV chargers? And where do I install them?',
      description: '',
      content: [],
      firstcard: "first-accordion-item"
    },
    {
      title: 'How do I configure the chargers with a pricing structure, loitering penalty and access control? How can I customize pricing structure, loitering penalty, and access control while setting up chargers?',
      description: '',
      content: [],
    },
    {
      title: 'Who sets the pricing rate?',
      description: '',
      content: [],
    },
    {
      title: 'Does ChargeBay install the charging systems?',
      description: '',
      content: [],
    },
    {
      title: 'Do you provide hardware support after the EV chargers are installed?',
      description: '',
      content: [],
    },

    {
      title: 'Can I restrict access to my charging station based on specific times?',
      description: '',
      content: [],
      lastcard: 'last-accordion-item',
    },
  ];

  const driversQA = [
    {
      title: 'What is the cost to charge? How much time is needed to Charge?',
      description: 'Yes, ChargeBay equipment is built with a rugged design rated for outdoor use. The chargers are manufactured by Emporia and are UL-listed along with Energy Star certification.',
      content: [],
      firstcard: "first-accordion-item"
    },
    {
      title: 'How do I request a ChargeBay Cards?',
      description: '',
      content: [],
    },
    {
      title: 'Benefits of the ChargeBay Card?',
      description: '',
      content: [],
    },
    {
      title: "Where should I g while my car is charging? What happens when I don't check out in time?",
      description: '',
      content: [],
      lastcard: 'last-accordion-item',
    },
  ];



  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <>
      <main>
        <section id='hero-header' style={{ backgroundImage: `url(${QAbannerimg})` }}>
          <header>
            <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} toggleForm={toggleForm} setIsNavItemHover={setActiveNavItem} activeNavItem={activeNavItem} />
          </header>

          <section className='qa-hero'>
            <h1>ChargeBay <span className='highlight-blue'>Q&A : </span><br />Your Questions Answered!</h1>
          </section>
        </section>

        <section className="accordion-container qasection hostQA">

          <section className='faq-section'>
            <h1>All FAQs</h1>
            <div className='faq-section-all-faqs'>
              <div className='faq-section-all-faqs-host'>
                <h3>Host</h3>
                <div>
                  <p>Products</p>
                  <p>Management</p>
                </div>
              </div>
              <div className='faq-section-all-faqs-driver'>
                <h3>Drivers</h3>
                <p>All Driver FAQ</p>
              </div>
            </div>
          </section>

          <section>
            <h1 className='FAQ-header'>Host FAQs</h1>
            <h4 className='FAQ-sub-header'>Products</h4>
            <div className='accordion-item-container'>
              {productQA.map((item, index) => (
                <div key={index} className={`accordion-item ${item.firstcard} ${item.lastcard} ${activeIndex === index ? 'active' : ''}`}>
                  <div className="accordion-header" onClick={() => handleToggle(index)}>
                    <span className='driversQAheader'>{item.title}</span>
                    <span className='accordion-item-icon'>{activeIndex === index ? <FiX size={20} /> : <FiPlus size={20} />}</span>
                  </div>
                  <div className="accordion-content">
                    <p>{item.description}</p>
                    <p>{item.description2}</p>
                    <ul>
                      {item.content.map((line, idx) => (
                        <li key={idx}>{line}</li>
                      ))}
                    </ul>

                  </div>
                </div>
              ))}
            </div>
            <h4 className='FAQ-sub-header'>Management</h4>
            <div className='accordion-item-container'>
              {managementQA.map((item, index) => (
                <div key={index} className={`accordion-item ${item.firstcard} ${item.lastcard} ${activeIndex === index ? 'active' : ''}`}>
                  <div className="accordion-header driversQA" onClick={() => handleToggle(index)}>
                    <span className='driversQAheader'>{item.title}</span>
                    <span className='accordion-item-icon'>{activeIndex === index ? <FiX size={20} /> : <FiPlus size={20} />}</span>
                  </div>
                  <div className="accordion-content">
                    <p>{item.description}</p>
                    <p>{item.description2}</p>
                    <ul>
                      {item.content.map((line, idx) => (
                        <li key={idx}>{line}</li>
                      ))}
                    </ul>

                  </div>
                </div>
              ))}
            </div>

          </section>
        </section>

        <section className="accordion-container qasection driversQA">
          <h1 className='FAQ-header'>Driver FAQs</h1>
          <div className='accordion-item-container'>
            {driversQA.map((item, index) => (
              <div key={index} className={`accordion-item ${item.firstcard} ${item.lastcard} ${activeIndex === index ? 'active' : ''}`}>
                <div className="accordion-header" onClick={() => handleToggle(index)}>
                  <span className='driversQAheader'>{item.title}</span>
                  <span className='accordion-item-icon'>{activeIndex === index ? <FiX size={20} /> : <FiPlus size={20} />}</span>
                </div>
                <div className="accordion-content">
                  <p>{item.description}</p>
                  <p>{item.description2}</p>
                  <ul>
                    {item.content.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>

                </div>
              </div>
            ))}
          </div>

          <section className='FAQ-detailes'>
            <h1>Have you ever shown up to a charging station, and its either full, broken, or in the middle of nowhere?</h1>
            <h1>Has charging ever made you late?</h1>
            <h1>Has it felt like a chore?</h1>
            <h1>What if you could Charge wherever you go, guaranteed?</h1>
            <h1>What if instead of waiting for your car to charge, you could sleep, shop, eat, and play on your terms?</h1>
            <h1>ChargeBay is a one stop solution that allows you to find and reserve chargers in advance, so that you're never left in the dark about your charger.</h1>
          </section>
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

export default QAPage
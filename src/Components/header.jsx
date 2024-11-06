import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../Pages/chargebayHome.css"

import AnimatedSection from './AnimatedSection'

import logo from "../Images/Logo White.png"
import logomob from "../Images/Logo Black.png"

import { ChevronDown } from 'lucide-react'

const Header = ({ isMenuOpen, toggleMenu, toggleForm, setIsNavItemHover }) => {

  const navs = document.getElementsByClassName("nav-item")

  const [activeMenu, setActiveMenu] = useState(null);

  // const handleMouseEnter = (item) => {
  //   setIsNavItemHover(item);
  // };

  // const handleMouseLeave = () => {
  //   setIsNavItemHover(null);
  // };

  const handleNavItemClick = (item) => {
    setIsNavItemHover(item);
  };

  return (
    <>
      <header className="header">
        <AnimatedSection animation="flyIn" direction="up">
          <div className="logo">
            <Link to="/"><img src={logo} alt="Logo" draggable="false" /></Link>
          </div>
        </AnimatedSection>
        <AnimatedSection animation="flyIn" direction="up">
          <nav id='desknavs'>
            <ul>
              <li className="nav-item" id='drivers'
                onClick={() => handleNavItemClick('drivers')}
              >
                <a className="nav-link">Drivers <ChevronDown className="dropdown-arrow" /></a>
              </li>
              <li className="nav-item" id='hosts'
                onClick={() => handleNavItemClick('hosts')}
              >
                <a className="nav-link">Hosts <ChevronDown className="dropdown-arrow"></ChevronDown></a>

              </li>
              <li className="nav-item" id='solution'
                onClick={() => handleNavItemClick('solution')}
              >
                <a className="nav-link">Our Solution <ChevronDown className="dropdown-arrow"></ChevronDown></a>
              </li>
              <li className="nav-item">
                <a href='#parterns' className="nav-link">Our Partners</a>
              </li>
              <li className="nav-item">
                <a href='#company' className="nav-link">The Company</a>
              </li>
              <div className="cta-buttons">

                <Link to={"#hostStation"}><button href="#HostStation" className="host-station" ><span>Host a Station</span></button></Link>
                <button onClick={toggleForm} className="learn-more contacts">
                  <span>Contact</span>
                </button>
              </div>
            </ul>
          </nav>
          <nav id='mobnavs'>
            <button id={isMenuOpen ? 'toggled' : ''} className="menu-toggle" onClick={toggleMenu}>
              {isMenuOpen ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="45px" width="45px" viewBox="0 0 489 489">
                   <line x1="113.5" y1="150" x2="275.5" y2="350" stroke="#000" stroke-width="30"></line>
                   <line x1="275.5" y1="150" x2="113.5" y2="350" stroke="#000" stroke-width="30"></line>
                </svg> : '☰'}
            </button>
            <ul className={isMenuOpen ? 'open' : 'close'}>
              <div className="logo-nav">
                <img src={logomob} alt="Logo" />
              </div>
              <li className="nav-item">
                <a className="nav-link">Drivers <ChevronDown className="dropdown-arrow"></ChevronDown></a>
                <ul className="dropdown-menu">
                  <li>
                    <h3>CHARGERS</h3>
                    <li><a href="#">Find A Charger</a></li>
                    <li><a href="#">Get started with the ChargeBay app</a></li>
                    <li><a href="#">Why Use ChargeBay?</a></li>
                  </li>
                  <li>
                    <h3>RESOURCES</h3>
                    <li><a href="#">Driver FAQs</a></li>
                    <li><a onClick={toggleForm}>Get Help</a></li>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link">Hosts <ChevronDown className="dropdown-arrow"></ChevronDown></a>
                <ul className="dropdown-menu">
                  <li>
                    <h3>PROPERTIES</h3>
                    <li><a href="#">Multifamily Housing </a></li>
                    <li><a href="#">Commercial Worspace & Retail</a></li>
                  </li>
                  <li>
                    <h3>RESOURCES</h3>
                    <li><a href="#">Host Login</a></li>
                    <li><a href="#">Charging Bussiness</a></li>
                    <li><a href="#">Commercial Incentive Lookup</a></li>
                    <li><a href="#">Support & Sales </a></li>
                    <li><a href="#">Host FAQs</a></li>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link">Our Solution <ChevronDown className="dropdown-arrow"></ChevronDown></a>
                <ul className="dropdown-menu">
                  <li>
                    <h3>PRODUCTS</h3>
                    <li><a href="#">All Products</a></li>
                  </li>
                  <li>
                    <h3>Resseller</h3>
                    <li><a href="#">Become a Resseller</a></li>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link">Our Partners</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">The Company</a>
              </li>
              <h5>Are you host?</h5>
              <h3>Log in &#x2192;</h3>
              <div className="cta-buttons">
                <button onClick={toggleForm} className="navbtn contacts"><span>Contact</span></button>
                <button className="navbtn"><span>Host a Station</span></button>
              </div>
            </ul>
          </nav>
        </AnimatedSection>
      </header>
    </>
  )
}

export default Header
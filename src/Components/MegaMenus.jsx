import React from 'react'

import driversimg from "../Images/driver.png"


function MegaMenus({ activeNavItem, setIsNavItemHover ,toggleForm }) {

  const navsitm = document.getElementById(activeNavItem)

  const handleMouseEnter = () => {
    setIsNavItemHover(activeNavItem);
    navsitm.style.marginRight = '16px';
    navsitm.style.marginLeft = '0';
    navsitm.style.padding = '5px 8px';
    navsitm.style.borderRadius = '29px';
    navsitm.style.backgroundColor = '#7e7e7e49';
  };

  const handleMouseLeave = () => {
    setIsNavItemHover(null);
    navsitm.style.backgroundColor = "#0000";
  };

  switch (activeNavItem) {
    case 'drivers':
      return (
        <div className='mega-menudiv' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="mega-menu">
            <div className="mega-menu-content">
              <div className="mega-menu-image">
                <img src={driversimg} alt="Driver using ChargeBay app" />
              </div>
              <div className="mega-menu-links">
                <div className="mega-menu-column">
                  <h3>CHARGERS</h3>
                  <ul>
                    <li><a href="#">Find A Charger</a></li>
                    <li><a href="#">Get started with the ChargeBay app</a></li>
                    <li><a href="#">Why Use ChargeBay?</a></li>
                  </ul>
                </div>
                <div className="mega-menu-column">
                  <h3>RESOURCES</h3>
                  <ul>
                    <li><a href="#">Driver FAQs</a></li>
                    <li><a onClick={toggleForm}>Get Help</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case 'hosts':
      return (
        <div className='mega-menudiv' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="mega-menu">
            <div className="mega-menu-content">
              <div className="mega-menu-image">
                <img src={driversimg} alt="ChargeBay station host" />
              </div>
              <div className="mega-menu-links">
                <div className="mega-menu-column">
                  <h3>HOST</h3>
                  <ul>
                    <li><a href="#"></a></li>
                    <li><a href="#"></a></li>
                    <li><a href="#"></a></li>
                  </ul>
                </div>
                <div className="mega-menu-column">
                  <h3></h3>
                  <ul>
                    <li><a href="#"></a></li>
                    <li><a href="#"></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case 'solution':
      return (
        <div className='mega-menudiv' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="mega-menu">
            <div className="mega-menu-content">
              <div className="mega-menu-image">
                <img src={driversimg} alt="ChargeBay solution overview" />
              </div>
              <div className="mega-menu-links">
                <div className="mega-menu-column">
                  <h3>OUR Solutions</h3>
                  <ul>
                    <li><a href="#"></a></li>
                    <li><a href="#"></a></li>
                    <li><a href="#"></a></li>
                  </ul>
                </div>
                <div className="mega-menu-column">
                  <h3></h3>
                  <ul>
                    <li><a href="#"></a></li>
                    <li><a href="#"></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default MegaMenus
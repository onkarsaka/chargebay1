import { React, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation, Link } from 'react-router-dom';
import driversimg from "../Images/driver.png"
import hostimg from "../Images/host.png"
import oursoltionimg from '../Images/oursolution.png'

function MegaMenus({ activeNavItem, setIsNavItemHover, toggleForm }) {

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
                <img src={driversimg} alt="Driver using ChargeBay app" draggable='false' />
              </div>
              <div className="mega-menu-links">
                <div className="mega-menu-column">
                  <h3>CHARGERS</h3>
                  <ul>
                    <li><a href="/page1#viewmaphere"><Link to="/page1#map-section">Find A Charger</Link></a></li>
                    <li><a href="#"><li><a href="/page1#viewmaphere"><Link to="/page1#app-demo">Get started with the ChargeBay app</Link></a></li></a></li>
                    <li><a href="#">Why Use ChargeBay?</a></li>
                  </ul>
                </div>
                <div className="mega-menu-column">
                  <h3>RESOURCES</h3>
                  <ul>
                    <li><a href="#"><Link to="page8">Driver FAQs</Link></a></li>
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
                <img src={hostimg} alt="ChargeBay station host" draggable='false' />
              </div>
              <div className="mega-menu-links">
                <div className="mega-menu-column">
                  <h3>PROPERTIES</h3>
                  <ul>
                    <li><a href="#">Multifamily Housing </a></li>
                    <li><a href="#">Commercial Worspace & Retail</a></li>
                    <li><a href="#"></a></li>
                  </ul>
                </div>
                <div className="mega-menu-column">
                  <h3>RESOURCES</h3>
                  <ul>
                    <li><a href="#">Host Login</a></li>
                    <li><a href="#">Charging Bussiness</a></li>
                    <li><a href="#">Commercial Incentive Lookup</a></li>
                    <li><a href="#">Support & Sales </a></li>
                    <li><a href="#">Host FAQs</a></li>
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
                <img src={oursoltionimg} alt="ChargeBay solution overview" draggable='false' />
              </div>
              <div className="mega-menu-links">
                <div className="mega-menu-column">
                  <h3>PRODUCTS</h3>
                  <ul>
                    <li><a href="#">All Products</a></li>
                    <li><a href="#"></a></li>
                    <li><a href="#"></a></li>
                  </ul>
                </div>
                <div className="mega-menu-column">
                  <h3>Resseller</h3>
                  <ul>
                    <li><a href="#">Become a Resseller</a></li>
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
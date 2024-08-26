import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import floorimg1 from "../assets/floorimg1.png"
import floorimg2 from "../assets/floorimg2.png"
import floorimg3 from "../assets/floorimg3.png"
import floorimg4 from "../assets/floorimg4.png"
import AOS from 'aos';

const Services = () => {

    AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

  return (
    <>
    <a className='anchor' id='services-section'></a>
    <div className='content' id='services-content'>
        <div className='wrapper' id='service-wrapper'>
        <div className='content' id='process-content'>
            <div id="about-us">
            <h1>Who We Are At <p id="about-logo">Floor Jays</p></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div data-aos="fade-left" className="process-card-left">
                    <div className="inner-process-card">
                        <p>
                        <h2 className='service-title'>Carpet</h2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <img src={floorimg1} className="service-img"></img>
                    </div>
                </div>
                <div data-aos="fade-right" className="process-card-right">
                    <div className="inner-process-card-right">
                    <p>
                        <h2 className='service-title'>Carpet</h2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <img src={floorimg1} className="service-img"></img>
                    </div>
                </div>
                <div data-aos="fade-left" className="process-card-left">
                    <div className="inner-process-card">
                        <p>
                        <h2 className='service-title'>Carpet</h2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <img src={floorimg1} className="service-img"></img>
                    </div>
                </div>
                <div data-aos="fade-right" className="process-card-right">
                    <div className="inner-process-card-right">
                    <p>
                        <h2 className='service-title'>Carpet</h2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <img src={floorimg1} className="service-img"></img>
                    </div>
                </div>
                <div data-aos="fade-left" className="process-card-left">
                    <div className="inner-process-card"> 
                    <p>
                        <h2 className='service-title'>Carpet</h2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <img src={floorimg1} className="service-img"></img>
                    </div>
                </div>
           
            </div>
            {/* <div    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
            <div id="service-card-container">
                <div className="service-card">
                    <div className="inner-service-card">
                    <h2 className="service-card-title">LVP - Luxury Vinyl Plank</h2>
                    <img src={floorimg1} className="services-pic"></img>
                    <p className="service-card-text">Luxury vinyl plank is a great product for families and people with active lifestyles. It is great for young kids and pets alike. It's scratch resistant and durable and you can spill on it so there is no harm, no foul.</p>
                    </div>
                </div>
                <div className="service-card">
                    <div className="inner-service-card">
                    <h2 className="service-card-title">Laminate</h2>
                    <img src={floorimg3} className="services-pic"></img>
                    <p className="service-card-text">Laminate floors are super durable and scratch resistant. They're great for people that have gotten past the stage of kids and puppies. A lot of the laminate companies say that their product is waterproof when it's not.
                    The core of a laminate product is a compressed fiberboard. When a compressed fiberboard gets wet, it swells, and never goes back to normal.</p>
                    </div>
                </div>
                <div className="service-card">
                    <div className="inner-service-card">
                    <h2 className="service-card-title">Carpet</h2>
                    <img src={floorimg2} className="services-pic"></img>
                    <p className="service-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                </div>
                <div className="service-card">
                    <div className="inner-service-card">
                    <h2 className="service-card-title">Ceramic Tile</h2>
                    <img src={floorimg4} className="services-pic"></img>
                    <p className="service-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
            </div> */}
        </div>
    </div>
    </>
  )
}

export default Services
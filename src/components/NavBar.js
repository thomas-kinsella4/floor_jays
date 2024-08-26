import LogoImage from '../assets/LogoGuys.png';
import LogoMini from '../assets/miniMe.png';
import React, { useState } from 'react';
import logo from "/Users/thomaskinsella/Development2/code/wallyFloors/floorsite2/src/components/styles/fj-logo.png";
import newlogo from "/Users/thomaskinsella/Development2/code/wallyFloors/floorsite2/src/components/newfjlogo.png";
import { BsInstagram, BsFacebook, BsYoutube, BsTwitter, BsSpotify } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

const NavBar = () => {


    return (
      <>
        <nav>

          <div id='desktop-nav'>
            <div id='navbar'>
              <li><a href='#home-section'><img id="nav-logo" src={newlogo}></img></a></li>
              <div id='nested-navdiv'>
              <li><a href='#services-content' className='nav-words'>Services</a></li>
              <li><a href='#gallery-section' className='nav-words'>Gallery</a></li>
              <li><a href='#review-section' className='nav-words'>Reviews</a></li>
              <li><a href='#contact-section' className='nav-words'>Contact</a></li>
              </div>
            </div>
          </div>

        </nav>
      </>
    );
}

{/* <div id="social-nav-div">
            <a href="https://www.instagram.com/floorjays/?igsh=MXEwbms2eHI0OHF1eg%3D%3D" className="social-icons" target="_blank"><BsInstagram /></a>

            <a href="https://www.facebook.com/profile.php?id=100093306792901" className="social-icons" target="_blank"><BsFacebook /></a>
            </div> */}

export default NavBar
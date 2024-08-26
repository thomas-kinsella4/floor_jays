import LogoImage from '../assets/LogoGuys.png';
import React from "react";
import { BsInstagram, BsFacebook, BsYoutube, BsTwitter, BsSpotify } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
    return (
        
        <div id='footer-content'>
            <div id="credit-div">
            <p className='footer-text'>We accept all major credit cards!</p>
            <img id="credit-cards" src='https://www.longislandmarinatn.com/wp-content/uploads/2017/08/Major-Credit-Card-Logo-PNG-Image.png'></img>
            </div>
        <div id="social-links-div">
            <p className='footer-text'>Check us out on social media!</p>
            <a href="https://www.instagram.com/floorjays/?igsh=MXEwbms2eHI0OHF1eg%3D%3D" className="social-icons" target="_blank"><BsInstagram /></a>
            <a href="https://www.facebook.com/profile.php?id=100093306792901" className="social-icons" target="_blank"><BsFacebook /></a>
         </div>
        </div>
        
        
    )
}

export default Footer;


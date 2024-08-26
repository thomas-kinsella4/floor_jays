import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Contact from './Contact';

const Home = () => {

  const [moodsIndex, setMoodsIndex] = useState(0);

    const moods = ["happy", "sad", "surprised"]
    setTimeout(() => {
        setMoodsIndex(Math.floor(Math.random() * 3))
        // console.log("mood: ", moodsIndex)
    }, 1300)

    function handleClick() {
      document.getElementById('contact-section').scrollIntoView()
    }

  return (
    <>
      <a className='anchor' id='home-section'></a>
      <div className='content' id='home-content'>
        <div id="home-container">
        <div id="home-wrapper" className='wrapper'>
            {/* <a className='anchor' id='home-section'></a> */}
            <TypeAnimation
                sequence={[
                    'The Art Of', 
                    0,
                    () => {
                    // console.log('Done typing!'); // Place optional callbacks anywhere in the array
                    }
                ]}
                wrapper="div"
                className='slogan'
                cursor={false}
            />
            <TypeAnimation
                sequence={[
                    1000,
                    'Installation.', 
                    2000, // Waits 1s
                    'Elevating Your Home.', 
                    2000, // Waits 2s
                    'Your Flooring Solutions.',
                    2000,
                    () => {
                    // console.log('Done typing!'); // Place optional callbacks anywhere in the array
                    }
                ]}
                wrapper="div"
                className='slogan-change'
                cursor={true}
                repeat={Infinity}
            />
            <div id='home-text'>
                {/* <h6 className='body-text'>
                WHO ARE THE FLOOR JAYS?
                We are Professional Flooring & Carpet Installers who serve all of Long Island, NY.
                We are not General Contractors who “do floors”. You will not find us installing doors & windows. We do not paint. We don’t build rooms or additions. We don’t build houses.
                Our Trade is flooring and carpet and that’s what we stick to. It’s what we are good at. Great at... actually. Most of us work for local retailers...Not the box stores. We are licensed and insured. We are experienced, professional flooring & carpet installers.
                </h6> */}
            </div>
            <button className='homepage-button' onClick={() => handleClick()}>Contact Us Here!</button>  
        </div>
        </div>
    </div>
    </>
  )
}

export default Home
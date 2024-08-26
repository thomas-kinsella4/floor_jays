import './App.css';
import React, { useRef } from 'react';
import NavBar from './components/NavBar';
import Services from './components/Services';
import Home from './components/Home';
import Contact from './components/Contact';
// import Chat from './components/Chat';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import Process from './components/Process';
import Gallery from './components/Gallery';
import AOS from 'aos';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Home />
      <Services />
      {/* <Process /> */}
      <Gallery />
      <Reviews />
      <Contact />
      {/* <Chat/> */}
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import './Home.css';
import ClipSection from './components/ClipSection';
import Contact from './components/Contact';
import Paintings from './components/Paintings';
import LiveShows from './components/LiveShows';
import PenPals from './components/PenPals';
import ReligionSexSpecial from './components/ReligionSexSpecial';

const Home = () => {
  return (
    <div className="home">
      <header className="home__header">
        <h1>Hi, I'm Rory Scovel</h1><br />
        <img
          src={`${process.env.PUBLIC_URL}/images/rory.jpg`}
          width={250} height={250}
          alt="rory-stare"
          className="rory-stare"
        /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
      </header>

      {/* Religion special section */}
      <ReligionSexSpecial/>
      <br /><br /><br />

      {/* Clip Section */}
      <ClipSection />
      <br /><br />

      {/* Podcast Section */}
      <PenPals/>
      <br /><br />

      {/* Live Shows Section */}
      <LiveShows/>
      <br />

      {/* Paintings Section */}
      <Paintings/>
      <br />

      {/* Contact and Socials Bubble */}
      <Contact/>
    </div>
  );
};

export default Home;

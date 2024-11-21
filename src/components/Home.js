import React from 'react';
import './Home.css';
import Contact from './Contact';
import ReligionSexSpecial from './ReligionSexSpecial';

const Home = () => {
  return (
    <div className="home">
      <header className="home__header">
        <h1>Hi, I'm Rory Scovel</h1><br />
        <li><a href="https://www.imdb.com/name/nm2665168/"><img
          src={`${process.env.PUBLIC_URL}/images/rory.jpg`}
          width={250} height={250}
          alt="rory-stare"
          className="rory-stare"
        /></a></li><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br />
      </header>

      {/* Religion special section */}
      <ReligionSexSpecial/>
      <br /><br /><br />

      {/* Contact and Socials Bubble */}
      <Contact/>
    </div>
  );
};

export default Home;

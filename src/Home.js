// Home.js
import React from 'react';
import './Home.css';

const ticket_link = "https://www.etix.com/ticket/p/64497644/rory-scovelimprovised-standup-nashville-the-lab-at-zanies?partner_id=100";

const Home = () => {
  return (
    <div className="home">
      <header className="home__header">
        <h1>Hi, I'm Rory Scovel</h1>
      </header>

      {/* Scrolling punchlines and fake and reeal headlines */}

      <div className="home__content">
        <img
          src={`${process.env.PUBLIC_URL}/images/rory-religion-max.jpg`}
          alt="Rory Scovel"
          className="home__image"
        />
      </div>
      
      <div className="home__video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/39H40-sJGW4?si=r8xLrqZIuf43Fl-Y" // Example YouTube video
          title="Embedded video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="home__shows">
        <h2>Upcoming Live Shows</h2>
        <ul className="home__shows-list">
          <li className="home__show-item">
            <p className="home__show-details">
              <strong>Location:</strong> Comedy Cellar, NY
              <br />
              <strong>Date:</strong> December 5, 2024
            </p>
            <a
              href="https://www.ticketmaster.com/"
              className="home__show-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Tickets
            </a>
          </li>
          <li className="home__show-item">
            <p className="home__show-details">
              <strong>Location:</strong> Laugh Factory, LA
              <br />
              <strong>Date:</strong> December 12, 2024
            </p>
            <a
              href="https://www.ticketmaster.com/"
              className="home__show-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Tickets
            </a>
          </li>
          <li className="home__show-item">
            <p className="home__show-details">
              <strong>Location:</strong> The Improv, Chicago
              <br />
              <strong>Date:</strong> December 19, 2024
            </p>
            <a
              href="https://www.ticketmaster.com/"
              className="home__show-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Tickets
            </a>
          </li>
        </ul>
      </div>



    </div>
  );
};

export default Home;

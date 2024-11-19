import React from 'react';
import './Home.css';

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

      {/* Image and Special Links Bubble */}
      <div className="home__bubble">
        <img
          src={`${process.env.PUBLIC_URL}/images/rory-religion-max.jpg`}
          alt="Rory Scovel"
          className="home__image"
        />
        <div className="home__special-links">
          <a
            href="https://www.hbo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="home__special-link home__special-link--hbo"
          >
            <img
              src={`${process.env.PUBLIC_URL}/icons/hbo-logo.png`}
              alt="HBO"
              className="home__special-icon"
            />
            Watch on HBO
          </a>
          <a
            href="https://music.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="home__special-link home__special-link--apple"
          >
            <img
              src={`${process.env.PUBLIC_URL}/icons/apple-music-logo.png`}
              alt="Apple Music"
              className="home__special-icon"
            />
            Listen on Apple Music
          </a>
          <a
            href="https://spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="home__special-link home__special-link--spotify"
          >
            <img
              src={`${process.env.PUBLIC_URL}/icons/spotify-logo.png`}
              alt="Spotify"
              className="home__special-icon"
            />
            Listen on Spotify
          </a>
        </div>
      </div>

      {/* Video Section */}
      <div className="home__video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/39H40-sJGW4?si=r8xLrqZIuf43Fl-Y"
          title="Embedded video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Podcast Section */}
      <div className="home__podcast">
        <h2 className="home__podcast-title">Pen Pals Podcast</h2>
        <img
          src={`${process.env.PUBLIC_URL}/images/pen-pals-logo.jpg`}
          alt="Pen Pals Logo"
          className="home__podcast-logo"
        />
        <a
          href="https://www.penpalspod.com"
          className="home__button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Official Website
        </a>
        <div className="home__podcast-platforms">
          <a
            href="https://www.youtube.com/penpalspodcast"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${process.env.PUBLIC_URL}/icons/youtube-logo.png`}
              alt="YouTube"
              className="home__podcast-icon"
            />
          </a>
          <a
            href="https://www.patreon.com/penpalspod"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${process.env.PUBLIC_URL}/icons/patreon-logo.png`}
              alt="Patreon"
              className="home__podcast-icon"
            />
          </a>
          <a
            href="https://podcasts.apple.com/us/podcast/pen-pals/id1459367794"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${process.env.PUBLIC_URL}/icons/apple-podcasts-logo.png`}
              alt="Apple Podcasts"
              className="home__podcast-icon"
            />
          </a>
          <a
            href="https://open.spotify.com/show/penpalspodcast"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${process.env.PUBLIC_URL}/icons/spotify-logo.png`}
              alt="Spotify"
              className="home__podcast-icon"
            />
          </a>
        </div>
      </div>

      {/* Live Shows Section */}
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
        </ul>
      </div>

      {/* Paintings Section */}
      <div className="home__paintings home__bubble">
        <h2>Rory's Paintings</h2>
        <img
          src={`${process.env.PUBLIC_URL}/images/paintings-collection.jpg`}
          alt="Paintings Collection"
          className="home__paintings-image"
        />
        <a
          href="https://shop.roryscovel.com/discount/GOODBYE-LA"
          target="_blank"
          rel="noopener noreferrer"
          className="home__button"
        >
          Shop the New Collection
        </a>
      </div>

      {/* Contact and Socials Bubble */}
      <div className="home__contact home__bubble">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:info@roryscovel.com">info@roryscovel.com</a></p>
        <div className="home__socials">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src={`${process.env.PUBLIC_URL}/icons/twitter-logo.png`}
              alt="Twitter"
              className="home__social-icon"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src={`${process.env.PUBLIC_URL}/icons/instagram-logo.png`}
              alt="Instagram"
              className="home__social-icon"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src={`${process.env.PUBLIC_URL}/icons/facebook-logo.png`}
              alt="Facebook"
              className="home__social-icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

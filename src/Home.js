import React from 'react';
import './Home.css';
import ClipSection from './ClipSection';

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
          src={`${process.env.PUBLIC_URL}/images/promos/rory-religion-max.jpg`}
          alt="Rory Scovel"
          className="home__image"
          href="https://www.imdb.com/name/nm2665168/"
        />
        <div className="home__special-links">
          <a
            href="hhttps://www.max.com/movies/rory-scovel-religion-sex-and-a-few-things-in-between/f897aaef-6232-4ffb-8cde-d0b7736a15aa"
            target="_blank"
            rel="noopener noreferrer"
            className="home__special-link home__special-link--hbo"
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/icons/max-logo.png`}
              alt="HBO"
              className="home__special-icon"
              style={{ width: 100, height: 200 }}
            />
            Watch on HBO
          </a>
          <a
            href="https://music.apple.com/us/album/religion-sex-and-a-few-things-in-between/1759566173"
            target="_blank"
            rel="noopener noreferrer"
            className="home__special-link home__special-link--apple"
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/icons/apple-music-logo.png`}
              alt="Apple Music"
              className="home__special-icon"
              style={{ width: 100, height: 200 }}
            />
            Listen on Apple Music
          </a>
          <a
            href="https://open.spotify.com/album/7DIu01NXX8PgWyHplUxihu"
            target="_blank"
            rel="noopener noreferrer"
            className="home__special-link home__special-link--spotify"
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/icons/spotify-logo-green.png`}
              alt="Spotify"
              className="home__special-icon"
              style={{ width: 100, height: 200 }}
            />
            Listen on Spotify
          </a>
        </div>

        {/* Trailer for special */}
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
      </div>

      {/* Clip Section */}
      <div className="home__clips">
        <h2>Featured Clips</h2>
        <ClipSection />
      </div>
      {/* <div className="home__video">
        <iframe
          width="560"
          height="315"
          src="https://youtube.com/shorts/hpJUuSljAl4?si=_8fN7i_cEAWMeaJ5"
          title="Embedded video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div> */}

      {/* Podcast Section */}
      <div className="home__podcast">
        <h2 className="home__podcast-title">Pen Pals Podcast</h2>
        <a
          href="https://www.penpalspod.com"
          className="home__button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Official Website
        </a>
        <br /><br /><br />
        <img
          src={`${process.env.PUBLIC_URL}/images/pen-pals-logo.jpg`}
          alt="Pen Pals Logo"
          className="home__podcast-logo"
          style={{ width: 400, height: 400 }}
        />
        <br /><br /><br />
        <div className="home__podcast-platforms">
          <a
            href="https://www.youtube.com/penpalspodcast"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/icons/youtube-logo.png`}
              alt="YouTube"
              className="home__podcast-icon"
              style={{ width: 100, height: 200 }}
            />
          </a>
          <a
            href="https://www.patreon.com/penpalspod"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/icons/patreon-logo-large-color.jpg`}
              alt="Patreon"
              className="home__podcast-icon"
              style={{ width: 100, height: 200 }}
            />
          </a>
          <a
            href="https://podcasts.apple.com/us/podcast/pen-pals/id1459367794"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/icons/apple-pod-logo.png`}
              alt="Apple Podcasts"
              className="home__podcast-icon"
              style={{ width: 100, height: 200 }}
            />
          </a>
          <a
            href="https://open.spotify.com/show/penpalspodcast"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/icons/spotify-logo-green.png`}
              alt="Spotify"
              className="home__podcast-icon"
              style={{ width: 100, height: 200 }}
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
              <strong>Location:</strong> Union Hall, Brooklyn, NY
              <br />
              <strong>Date:</strong> January 8-18, 2025
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
          src={`${process.env.PUBLIC_URL}/images/paintings/rory-painting-1.jpeg`}
          alt="Paintings Collection"
          className="home__paintings-image"
        />
        <br /><br />
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
        <p>Email: <a href="mailto:andrew.skikne@unitedtalent.com">andrew.skikne@unitedtalent.com</a></p>
        <br /><br />

        <img
          src={`${process.env.PUBLIC_URL}/images/rory-doggo.jpg`}
          alt="Rory Doggo"
          className="rory-dog-image"
        />

        <br /><br />
        <div className="home__socials">
          <a href="https://twitter.com/thepenpalspod" target="_blank" rel="noopener noreferrer">
            <img
              src={`${process.env.PUBLIC_URL}/images/icons/x-logo.jpg`}
              alt="Twitter"
              className="home__social-icon"
            />
          </a>
          <a href="https://www.instagram.com/roryscovel/#" target="_blank" rel="noopener noreferrer">
            <img
              src={`${process.env.PUBLIC_URL}/images/icons/instagram-logo-black.jpg`}
              alt="Instagram"
              className="home__social-icon"
            />
          </a>
          <a href="https://www.youtube.com/c/OfficialRoryScovel" target="_blank" rel="noopener noreferrer">
            <img
              src={`${process.env.PUBLIC_URL}/images/icons/youtube-logo-black.png`}
              alt="YouTube"
              className="home__social-icon"
            />
          </a>
          <a href="https://www.imdb.com/name/nm2665168/" target="_blank" rel="noopener noreferrer">
            <img
              src={`${process.env.PUBLIC_URL}/images/icons/imdb-logo-black.jpg`}
              alt="IMDb"
              className="home__social-icon"
            />
          </a>
          <a href="https://open.spotify.com/artist/1PflWU7nPUElTWqYUBkK6W" target="_blank" rel="noopener noreferrer">
            <img
              src={`${process.env.PUBLIC_URL}/images/icons/spotify-small-icon-black.png`}
              alt="Spotify"
              className="home__social-icon"
            />
          </a>
        </div>
      </div>

    </div>
  );
};

export default Home;

import React from 'react';


const PenPals = () => {
    return(
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
    );
};

export default PenPals;
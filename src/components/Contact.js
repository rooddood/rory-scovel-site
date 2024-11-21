import React from 'react';


const Contact = () => {

    return(
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
    );
};

export default Contact;
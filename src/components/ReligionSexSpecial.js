import React from 'react';


const ReligionSexSpecial = () => {
    return(
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
    );
};

export default ReligionSexSpecial;
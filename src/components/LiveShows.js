import React from 'react';

const LiveShows = () => {
    return(
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
    );
}

export default LiveShows;
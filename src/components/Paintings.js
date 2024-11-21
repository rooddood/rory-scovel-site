import React from 'react';


const Paintings = () => {

    return(
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
    );

};

export default Paintings
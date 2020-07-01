import React from 'react';

const About = ({ avatar, name, profession, bio, address, social }) => (
    <div className="About">
        <div className="About-container">
            <div className="About-avatar">
                <figure>
                    <img src="https://www.w3schools.com/w3images/avatar6.png" alt={ name } height="200"/>
                </figure>
            </div>
            <div className="About-name">
                <h2>{ name }</h2>
            </div>
            <div className="About-profesion">
                <p>{ profession }</p>
            </div>
            <div className="About-desc">
                <p>{ bio }</p>
            </div>
            <div className="About-location">
                <p>{ address }</p>
            </div>
            <div className="About-social">
                Social
            </div>
        </div>
    </div>
);

export default About;
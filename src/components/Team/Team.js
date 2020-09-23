import React, { Fragment } from 'react';
import './Team.css';

const Team = ( {isReversed, teamName, teamLogo}) =>{
    return(
        <figure className="team-display">
            {isReversed? 
            <Fragment>
                <span>{teamName}</span>
                <img 
                src={teamLogo}
                alt="club_image"
                />
            </Fragment>: 
            <Fragment>
                <img 
                src={teamLogo}
                alt="club_image"
                />
                <span>{teamName}</span>
            </Fragment>}
        </figure>
    )
}

export default Team;
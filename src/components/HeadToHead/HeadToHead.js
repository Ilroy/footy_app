import React from 'react';
import Team from "../Team/Team";
import Score from "../Score/Score";
import Time from "../Time/Time";
import './HeadToHead.css';

const HeadToHead = ({homeTeam, awayTeam, time}) =>{
    return (
        <div className="h2h-row">
            <Team isReversed={true} teamName={homeTeam.name} teamLogo={homeTeam.logo}/>
            <Score homeScore={homeTeam.score} awayScore={awayTeam.score}/>
            <Team isReversed={false} teamName={awayTeam.name} teamLogo={awayTeam.logo}/>
            <Time currentTime={time}/>
        </div>
    )
}

export default HeadToHead;
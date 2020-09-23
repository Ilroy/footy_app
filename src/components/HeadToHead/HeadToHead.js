import React from 'react';
import Team from "../Team/Team";
import Score from "../Score/Score";
import Time from "../Time/Time";
import './HeadToHead.css';

const HeadToHead = () =>{
    return (
        <div className="h2h-row">
            <Team isReversed={true}/>
            <Score homeScore={2} awayScore={1}/>
            <Team isReversed={false}/>
            <Time currentTime={"40:25"}/>
        </div>
    )
}

export default HeadToHead;
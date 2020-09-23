import React from 'react';


const Score = ({homeScore, awayScore})=>{
    return(
        <span>{`${homeScore}:${awayScore}`}</span>
    )
}

export default Score;
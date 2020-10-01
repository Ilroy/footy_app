import React from 'react';
import HeadToHead from '../../components/HeadToHead/HeadToHead';
import './Feed.css';

const Feed = () => {
    return (
        <div classname="feed-display">
            <HeadToHead 
            homeTeam={
                {
                    name: "Manchester United",
                    logo:"https://media.api-sports.io/football/teams/33.png",
                    score: 1,
                    }
            }
            awayTeam={
                {
                    name: "Manchester United",
                    logo:"https://media.api-sports.io/football/teams/33.png",
                    score: 2  
                }
            }
            time={"45:45"}
            />
               <HeadToHead 
            homeTeam={
                {
                    name: "Manchester United",
                    logo:"https://media.api-sports.io/football/teams/33.png",
                    score: 1 
                    }
            }
            awayTeam={
                {
                    name: "Manchester United",
                    logo:"https://media.api-sports.io/football/teams/33.png",
                    score: 2  
                }
            }
            time={"3:00 PM"}
            />

               <HeadToHead 
            homeTeam={
                {
                    name: "Manchester United",
                    logo:"https://media.api-sports.io/football/teams/33.png",
                    score: 1 
                    }
            }
            awayTeam={
                {
                    name: "Manchester United",
                    logo:"https://media.api-sports.io/football/teams/33.png",
                    score: 2  
                }
            }
             time={"09/30/20"}
            />

            
        </div>
    )
}

export default Feed;
import React from 'react';
import DataBoard from '../DataBoard/DataBoard';
import "./Profile.css";

const Profile = () =>{
    return(
        <div className="profile">
            <DataBoard title="Teams" 
            data={[
                {teamName: "Manchester United", 
                teamLogo: "https://media.api-sports.io/football/teams/33.png"},
                {teamName: "Manchester United", 
                teamLogo: "https://media.api-sports.io/football/teams/33.png"}
                ]}/>
             <DataBoard title="Leagues" 
            data={[
                {teamName: "Manchester United", 
                teamLogo: "https://media.api-sports.io/football/teams/33.png"},
                {teamName: "Manchester United", 
                teamLogo: "https://media.api-sports.io/football/teams/33.png"}
                ]}/>

        </div>

        
    );
}

export default Profile;
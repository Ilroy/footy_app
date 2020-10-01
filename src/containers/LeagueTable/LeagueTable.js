import React from 'react';
import TableRow from '../../components/TableRow/TableRow';
import TableHeader from '../../components/TableHeader/TableHeader';

const LeagueTable = ({leagueName}) =>{
    return(
        <table>
            <caption>{leagueName}</caption>
            <TableHeader/>
            <TableRow teamInfo={
                {
                    rank: 1,
                    name: "Manchester United",
                    logo: "https://media.api-sports.io/football/teams/33.png",
                    
                }}
                    teamStats={[38,20,5,13,50,42,8,50]}
                />
        </table>
    );
}

export default LeagueTable;
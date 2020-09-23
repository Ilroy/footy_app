import React from 'react';
import TableRow from '../../components/TableRow/TableRow';
import TableHeader from '../../components/TableHeader/TableHeader';

const LeagueTable = ({leagueName}) =>{
    return(
        <table>
            <caption>{leagueName}</caption>
            <TableHeader/>
            <TableRow rank={1}/>
            <TableRow rank={2}/>
            <TableRow rank={3}/>
        </table>
    );
}

export default LeagueTable;
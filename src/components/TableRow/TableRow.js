import React from 'react';
import Team from '../Team/Team';

const TableEntry = ({teamInfo, teamStats}) =>{
    return(
        <tr>
            <td>{teamInfo.rank}</td>
            <td><Team isReversed={false} teamName={teamInfo.name} teamLogo={teamInfo.logo}/></td>
            {
                teamStats.map((val, index)=>{
                    return(
                        <td id={index}>{val}</td>
                    );
                })
            }
        </tr>
    )
}

export default TableEntry;
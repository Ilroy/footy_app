import React from 'react';
import Team from '../Team/Team';

const TableEntry = ({rank}) =>{
    return(
        <tr>
            <td>{rank}</td>
            <td><Team isReversed={false}/></td>
            <td>23</td>
            <td>23</td>
            <td>23</td>
            <td>23</td>
            <td>23</td>
            <td>23</td>
        </tr>
    )
}

export default TableEntry;
import React from 'react';
import "./DataList.css";
import Team from '../Team/Team';

const DataList = ({data})=>{
    return(
        <div className="data-list">
            {data.map((obj, index) =>{
                    return(<Team key={index} 
                    isReversed={false}
                    teamName={obj.teamName}
                    teamLogo={obj.teamLogo}/>)
                })}
        </div>

    );
}

export default DataList;
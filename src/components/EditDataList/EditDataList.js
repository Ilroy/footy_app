import React from 'react';
import './EditDataList.css';
import Team from '../Team/Team';

const EditDataList = ({data}) =>{
    return(
        <div className='edit-list'>
            {
                data.map((obj,index) => {
                    return(
                        <div className="list-item">
                        <Team key={index} 
                    isReversed={false}
                    teamName={obj.teamName}
                    teamLogo={obj.teamLogo}/>
                    <span className="item-close">&times;</span>
                    </div>)

                })
            }


        </div>
    );
}

export default EditDataList;
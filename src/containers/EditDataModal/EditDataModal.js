import React from 'react';
import Team from '../../components/Team/Team';

const EditDataModal = ({data, isShowing, onCloseModal}) =>{

    return(
        <div className = "edit-modal" style={isShowing? {display: "block"}: {display: "none"}}>
            <div className="edit-modal-content">
                <span className="close" onClick={() => onCloseModal(false)}>X</span>
                
                <div className="data-box">
                    {data.map((item,index)=>{
                        return(
                            <div key={index} className="data-item">
                                <Team isReversed={false} teamLogo={item.teamLogo} teamName={item.teamName}/>
                                <span>Delete</span> 
                            </div>
                        )
                })}
                </div>

            </div>

        </div>
    );
}

export default EditDataModal;
import React from 'react';
import "./BoardTitle.css"
 

const BoardTitle = ({title, onClickEditButton, onClickAddButton}) =>{
    return(
        <div className='board-title'>
            <h1>{title}</h1>
            <button className="button" type="button" onClick={() => onClickEditButton(true)}>Edit</button>
            <button className="button" type="button" onClick={() => onClickAddButton(true)}>Add</button>
        </div>
    );
}

export default BoardTitle;
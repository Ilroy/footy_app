import React from 'react';
import "./BoardTitle.css"
 

const BoardTitle = ({title, onClickEditButton}) =>{
    return(
        <div className='board-title'>
            <h1>{title}</h1>
            <button className="button" type="button" onClick={() => onClickEditButton(true)}>Edit</button>
            <button type="button" className="button">Add</button>
        </div>
    );
}

export default BoardTitle;
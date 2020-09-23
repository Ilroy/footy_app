import React from 'react';
import "./BoardTitle.css"

const BoardTitle = ({title}) =>{
    return(
        <div className='board-title'>
            <h1>{title}</h1>
            <button type="button">Edit</button>
            <button type="button">Add</button>
        </div>
    );
}

export default BoardTitle;
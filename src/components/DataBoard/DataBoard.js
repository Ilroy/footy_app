import React, { Fragment } from 'react';
import BoardTitle from '../BoardTitle/BoardTitle';
import DataList from "../DataList/DataList";
import "./DataBoard.css";



const DataBoard = ({title, data}) =>{
    return(
        <div className="board">
            <BoardTitle title={title}/>
            <DataList data={data}/>
        </div>
    );
}

export default DataBoard;
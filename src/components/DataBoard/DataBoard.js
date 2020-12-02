import React, {useState} from 'react';
import BoardTitle from '../BoardTitle/BoardTitle';
import EditDataModal from '../../containers/EditDataModal/EditDataModal';
import DataList from "../DataList/DataList";
import "./DataBoard.css";




const DataBoard = ({title, data}) =>{
    const [isShowing, setIsShowing] = useState(false);
    console.log("showing data board")
    return(
        <div className="board">
            <BoardTitle title={title} onClickEditButton={setIsShowing}/>
            <DataList data={data}/>
            <EditDataModal data={data} isShowing={isShowing} onCloseModal={setIsShowing}/>
        </div>

    );
}

export default DataBoard;
import React, {useState} from 'react';
import Modal from '../../containers/Modal/Modal';
import BoardTitle from '../BoardTitle/BoardTitle';
import DataList from "../DataList/DataList";
import EditDataList from "../../components/EditDataList/EditDataList";
import "./DataBoard.css";




const DataBoard = ({title, data}) =>{
    const [isEditShowing, setIsEditShowing] = useState(false);
    const [isAddShowing, setIsAddShowing] = useState(false);

    return(
        <div className="board"> 
            <div className= "title-box">
                 <BoardTitle title={title} onClickEditButton={setIsEditShowing} onClickAddButton={setIsAddShowing}/>
            </div>
           
            <div className="data-box">
                <DataList data={data}/>
            </div>            
            
            {isEditShowing && (<Modal setIsShowing={setIsEditShowing}> <EditDataList data={data}/> </Modal>)}
            {isAddShowing && (<Modal setIsShowing={setIsAddShowing}> <h1>test add</h1> </Modal>)}
            
        </div>
    );
}

export default DataBoard;
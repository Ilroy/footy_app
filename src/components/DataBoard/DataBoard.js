import React, {useState} from 'react';
import Modal from '../../containers/Modal/Modal';
import BoardTitle from '../BoardTitle/BoardTitle';
import DataList from "../DataList/DataList";
import "./DataBoard.css";




const DataBoard = ({title, data}) =>{
    const [isShowing, setIsShowing] = useState(false);

    return(
        <div className="board"> 
            <div className= "title-box">
                 <BoardTitle title={title} onClickEditButton={setIsShowing}/>
            </div>
           
            <div className="data-box">
                <DataList data={data}/>
            </div>            
            
            {isShowing && (<Modal setIsShowing={setIsShowing}> <h1>test</h1> </Modal>)}
        
            
        </div>
    );
}

export default DataBoard;
import React from 'react';
import './Modal.css';

const Modal = ({setIsShowing,children}) => {

    return(

        <div className="overlay">
            <div className="content">
                <span className = "close" onClick={() => setIsShowing(false)}>&times;</span>
                {children} 
            </div>
           
        </div>
    );
}

export default Modal;
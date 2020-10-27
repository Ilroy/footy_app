import React from 'react';
import InfoForm from '../../containers/InfoForm/InfoForm';
import { getOnSubmitSignIn, getOnSubmitRegister} from './formHelpers';
import "./HomeForm.css"

const HomeForm = ({isRegistering, dispatch}) =>{
    return(
        <div className="home-form">
            <h1>MyTeams</h1>
            <InfoForm isRegistering={isRegistering} onSubmitSignIn={getOnSubmitSignIn(dispatch)} onSubmitRegister={getOnSubmitRegister(dispatch)}/>
        </div>
    )
}

export default HomeForm;
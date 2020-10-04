import React, { Fragment } from 'react';
import InfoForm from '../../components/InfoForm/InfoForm';
import "./HomeForm.css"

const HomeForm = ({isRegistering}) =>{
    return(
        <div className="home-form">
            <h1>MyTeams</h1>
            <InfoForm isRegistering={isRegistering}/>
        </div>
    )
}

export default HomeForm;
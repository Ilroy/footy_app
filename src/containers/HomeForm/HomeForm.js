import React, { Fragment } from 'react';
import InfoForm from '../../components/InfoForm/InfoForm';

const HomeForm = ({isRegistering}) =>{
    return(
        <Fragment>
            <h1>MyTeams</h1>
            <InfoForm isRegistering={isRegistering}/>
        </Fragment>
    )
}

export default HomeForm;
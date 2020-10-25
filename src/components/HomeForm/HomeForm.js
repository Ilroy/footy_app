import React from 'react';
import InfoForm from '../../containers/InfoForm/InfoForm';
import { changeRoute, setUser } from '../../containers/App/appActions';
import "./HomeForm.css"

const HomeForm = ({isRegistering, dispatch}) =>{

const onSubmitRegister = (email, password, firstName, lastName) =>{
    fetch('https://localhost:3000/signin', {
        method: 'post',
        headers: {'Content-Type': 'appliaction/json'},
        body: JSON.stringify({
            email: email,
            password:password,
            firstName: firstName,
            lastname: lastName
        })
    })
    .then(response => response.json())
    .then(message => {
        message === "success"? dispatch(changeRoute("signIn")) : console.log("couldnt register");
    })
}

const onSubmitSignIn = (email, password) =>{
     fetch('https://localhost:3000/signin', {
        method: 'post',
        headers: {'Content-Type': 'appliaction/json'},
        body: JSON.stringify({
            email: email,
            password:password,
        })
    })
    .then(response => response.json())
    .then(user => {
        dispatch(setUser(user));
    })

}

    return(
        <div className="home-form">
            <h1>MyTeams</h1>
            <InfoForm isRegistering={isRegistering} onSubmitSignIn={onSubmitSignIn} onSubmitRegister={onSubmitRegister}/>
        </div>
    )
}

export default HomeForm;
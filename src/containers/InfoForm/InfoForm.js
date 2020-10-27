import React, { useReducer } from "react";
import INTITAL_STATE from './InfoFormConstants';
import formReducer from './InfoFormReducer';
import {onFieldChange,onResetForm} from './InfoFormActions';

const InfoForm = ({ isRegistering, onSubmitSignIn, onSubmitRegister}) => {

  const [formState, dispatch] = useReducer(formReducer, INTITAL_STATE);

  const {email, password, firstName, lastName} = formState;

  return isRegistering ? (
    <form onSubmit= {event => {event.preventDefault(); onSubmitRegister(email,password,firstName,lastName); dispatch(onResetForm())}}>
      <label htmlFor="signInEmail">Email Address:</label>
      <br />
      <input type="email" placeholder="email" name="email" value={email} onChange={event => {dispatch(onFieldChange("email",event.target.value))}}/>
      <br />

      <label htmlFor="signInPassword">Password:</label>
      <br />
      <input type="password" placeholder="password" name="password" value={password} onChange={event => {dispatch(onFieldChange("password",event.target.value))}}/>
      <br />

      <label htmlFor="fName">First Name:</label>
      <br />
      <input type="text" name="fName" placeholder="First Name" value={firstName} onChange={event => {dispatch(onFieldChange("firstName",event.target.value))}}/>
      <br />

      <label htmlFor="lName">Last Name:</label>
      <br />
      <input type="text" name="lName" placeholder="Last Name" value={lastName} onChange={event => {dispatch(onFieldChange("lastName",event.target.value))}}/>
      <br />

      <input type="submit" value="Register" />
      <br />
    </form>
  ) : (
    <form onSubmit={event => { event.preventDefault(); onSubmitSignIn(email, password); dispatch(onResetForm()) }}>
      <label htmlFor="signInEmail">Email Address:</label>
      <br />
      <input type="email" name="email" placeholder="email" value={email} onChange={ event => dispatch(onFieldChange("email", event.target.value))}/>
      <br />

      <label htmlFor="signInPassword">Password:</label>
      <br />
      <input type="password" id="signInPassword" placeholder="password" name="password" value={password} onChange={event => dispatch(onFieldChange("password", event.target.value))}/>
      <br />

      <input type="submit" value= "Submit"/>
      <br />
    </form>
  );
};

export default InfoForm;

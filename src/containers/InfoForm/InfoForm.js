import React, { useEffect, useReducer } from "react";
import INTITAL_STATE from './InfoFormConstants';
import formReducer from './InfoFormReducer';
import {onFieldChange,onResetForm} from './InfoFormActions';

const InfoForm = ({ isRegistering, onSubmitSignIn, onSubmitRegister}) => {

  const [formState, dispatch] = useReducer(formReducer, INTITAL_STATE);

  useEffect(()=>{
    console.log(formState.email);
    console.log(formState.password);
  },[formState]);

  // return isRegistering ? (
  //   <form onSubmit= {() => onRegister(email,password, firstName, lastName)}>
  //     <label htmlFor="signInEmail">Email Address:</label>
  //     <br />
  //     <input type="email" id="signInEmail" name="email" onChange={event => {console.log(event.target.value); 
  //     setEmail(event.target.value)}}/>
  //     <br />

  //     <label htmlFor="signInPassword">Password:</label>
  //     <br />
  //     <input type="password" id="signInPassword" name="password" onChange={event => setPassword(event.target.value)}/>
  //     <br />

  //     <label htmlFor="fName">First Name:</label>
  //     <br />
  //     <input type="text" id="fName" name="fName" onChange={event => setFirstName(event.target.value)}/>
  //     <br />

  //     <label htmlFor="lName">Last Name:</label>
  //     <br />
  //     <input type="text" id="lName" name="lName" onChange={event => setLastName(event.target.value)}/>
  //     <br />

  //     <input type="submit" value="Register" />
  //     <br />
  //   </form>
  // ) : (

    return (
    <form onSubmit={event => { event.preventDefault(); onSubmitSignIn(formState.email,formState.password); dispatch(onResetForm()) }}>
      <label htmlFor="signInEmail">Email Address:</label>
      <br />
      <input type="email" name="email" placeholder="email" value={formState.email} onChange={ event => dispatch(onFieldChange("email", event.target.value))}/>
      <br />

      <label htmlFor="signInPassword">Password:</label>
      <br />
      <input type="password" id="signInPassword" placeholder="password" name="password" value={formState.password} onChange={event => dispatch(onFieldChange("password", event.target.value))}/>
      <br />

      <input type="submit" value= "Submit"/>
      <br />
    </form>
  );
};

export default InfoForm;

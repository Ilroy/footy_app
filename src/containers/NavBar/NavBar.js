import React from 'react';
import './NavBar.css'
import {changeRoute, signOut} from '../App/appActions'

const NavBar = ({isSignedIn, dispatch}) =>{

    return isSignedIn? 
    (
    <nav className='topnav'>
        <p onClick={() => dispatch(changeRoute("feed"))}>Feed</p>
        <p onClick={() => dispatch(changeRoute("profile"))} >Profile</p>
        <p onClick={() => dispatch(signOut())}>Sign Out</p>
    </nav>
    ) :
    <nav className="topnav">
        <p onClick={() => dispatch(changeRoute("signIn"))}>Sign In</p>
        <p onClick={() => {console.log("register");dispatch(changeRoute("register"))}}>Register</p>
    </nav>
}

export default NavBar;
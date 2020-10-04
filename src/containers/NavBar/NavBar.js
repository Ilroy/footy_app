import React from 'react';
import './NavBar.css'
const NavBar = ({isSignedIn, changeRoute}) =>{

    return isSignedIn? 
    (
    <nav className='topnav'>
        <p onClick={() => changeRoute("feed")}>Feed</p>
        <p onClick={() => changeRoute("profile")} >Profile</p>
        <p onClick={() => changeRoute("signOut")}>Sign Out</p>
    </nav>
    ) :
    <nav className="topnav">
        <p onClick={() => changeRoute("signIn")}>Sign In</p>
        <p onClick={() => changeRoute("register")}>Register</p>
    </nav>
}

export default NavBar;
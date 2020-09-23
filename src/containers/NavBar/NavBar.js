import React from 'react';
import './NavBar.css'
const NavBar = () =>{
    return(
    <div className='topnav'>
        <a href={"#feed"} className='active'>Feed</a>
        <a href={"#profile"} className=''>Profile</a>
        <a href={"#sign out"} className='right'>Sign Out</a>
    </div>
    );
}

export default NavBar;
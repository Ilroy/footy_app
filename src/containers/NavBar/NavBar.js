import React from 'react';
import './NavBar.css'
const NavBar = () =>{
    return(
    <div className='topnav'>
        <a href={"#home"} className='active'>Home</a>
        <a href={"#feed"} className=''>Feed</a>
        <a href={"#profile"} className=''>Profile</a>
    </div>
    );
}

export default NavBar;
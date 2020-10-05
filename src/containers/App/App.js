import React, { Fragment, useState } from 'react';
import './App.css';
import Feed from "../Feed/Feed";
import NavBar from "../NavBar/NavBar";
import LeagueTable from "../LeagueTable/LeagueTable";
import HomeForm from "../HomeForm/HomeForm";
import Profile from "../../components/Profile/Profile";
import getOnRouteChange from "../../Util/getOnRouteChange";


const App = () => {
  const [route, setRoute] = useState('signIn');
  const [isSignedIn, setSignIn] = useState(false);

  return (
    <div className='container'>
      <div className="nav-container">
        <NavBar isSignedIn={isSignedIn} changeRoute={getOnRouteChange(setSignIn, setRoute)}/>
      </div>
      {route === 'feed'?
        <Fragment>
          <div className="feed-container">
            <Feed/>
          </div>
          <div className="table-container">
            <LeagueTable leagueName={'Premier League'}/>
          </div>
        </Fragment>
      : route === "profile"?
        <div className="profile-container">
          <Profile/>
        </div>
      : 
        <div className="form-container">
          <HomeForm isRegistering={route !== "signIn"}/>
        </div>
      }
    </div>
  );
}

export default App;

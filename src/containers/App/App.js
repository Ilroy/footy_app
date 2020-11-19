import React, { Fragment, useEffect, useReducer } from 'react';
import './App.css';
import Feed from "../Feed/Feed";
import NavBar from "../NavBar/NavBar";
import LeagueTable from "../LeagueTable/LeagueTable";
import HomeForm from "../../components/HomeForm/HomeForm";
import Profile from "../../components/Profile/Profile";
import appReducer from "./appReducer";
import INITIAL_STATE from "./appConstants";


const App = () => {  
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);

  const {user,route, isSignedIn} = state;

  return (
    <div className='container'>
      <div className="nav-container">
        <NavBar isSignedIn={isSignedIn} dispatch={dispatch}/>
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
          <HomeForm isRegistering={route !== "signIn"} dispatch={dispatch}/>
        </div>
      }
    </div>
  );
}

export default App;

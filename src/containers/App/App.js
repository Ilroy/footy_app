import React from 'react';
import './App.css';
// import Feed from "../Feed/Feed";
// import NavBar from "../NavBar/NavBar";
// import LeagueTable from "../Table/LeagueTable";
import HomeForm from "../HomeForm/HomeForm";
import Profile from "../../components/Profile/Profile";

const App = () => {
  return (
    <Profile/>
    // <div className='container'>
    //   <div className="nav-container">
    //     <NavBar/>
    //   </div>
    //   <div className="feed-container">
    //     <Feed/>
    //   </div>
    //   <div className="table-container">
    //     <LeagueTable leagueName={'Premier League'}/>
    //   </div>
    // </div>
  );
}

export default App;

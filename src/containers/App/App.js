import React from 'react';
import './App.css';
import Feed from "../Feed/Feed";
import NavBar from "../NavBar/NavBar";
import Table from "../Table/Table";

const App = () => {
  return (
    <div className='container'>
      <div className="nav-container">
        <NavBar/>
      </div>
      <div className="feed-container">
        <Feed/>
      </div>
      <div className="table-container">
        <Table/>
      </div>
    </div>
  );
}

export default App;

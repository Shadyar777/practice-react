import React from "react";
import {Route} from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import Navbar from "./components/setting/navbar";

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/profile' render={() => <Profile />} />
      </div>
    </div>
  );
}

export default App;

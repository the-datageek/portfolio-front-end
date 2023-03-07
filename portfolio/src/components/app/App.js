import React,{useState} from 'react';
import './App.css'
import Login2 from '../login2/login2'
import Registration from '../registration/registration';
import Navbar from '../navbar/navbar';
import {Route, Routes} from "react-router-dom"




function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [userName, setUserName] = React.useState('');


  function handleLogin(name){
        // Set the loggedIn state to true after successful login

    setLoggedIn(true);
    setUserName(name);

  }
  function handleLogout(){
    // Set the loggedIn state to false after successful logout
    setLoggedIn(false);
    setUserName('');

  }

  return (
   <>
    
    <div className="nav-container">
    <Navbar  />
      <Routes>
        <Route path="/" element={<Login2/>} />
        <Route path="/bio" element={<Registration/>} />
        <Route path="/register" element={<Registration />} />
        <Route path="/logout" element={<Login2 />} />
      </Routes>
    
    </div>
   </>
 
  );

}

export default App;

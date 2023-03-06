import React from 'react';
import './App.css'
import Profile from '../my-profile/my-profile';
import Login2 from '../login2/login2'
import Registration from '../registration/registration';
import Navbar from '../navbar/navbar';

import {Route, Routes} from 'react-router-dom';



function App() {

  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Login2/>} />
        <Route path='/profile' element={<Registration/>} />
        <Route path='/login' element={<Profile/>} />
        

      </Routes>
    </div>
  );

}

export default App;

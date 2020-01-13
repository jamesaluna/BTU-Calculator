import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  eRelative,
  eWetBulb,
  eDewPoint
} from './psych.js'

function Header() {
  return (
    <div className='Header'>
      <div className='headerContent'>
        <div className='logo'>
          <img src={require('./Icons/header_logo.svg')} />
        </div>
        <div className='menu'>
          
        </div>
      </div>
    </div>
  );
}
function Body() {
  return (
    <div className='Body'>

    </div>
  )
}
function Footer() {
  return (
    <div className='Footer'>

    </div>
  )
}

function App() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;

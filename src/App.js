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
    <div className="Header">
      <div className="headerContent">
        <div className="logo">
          <img src={require("./Icons/header_logo.svg")} />
        </div>
        <div className="menu">
          <svg
            width="43"
            height="31"
            viewBox="0 0 43 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 5.16667V0H43V5.16667H0ZM0 18.0833H43V12.9167H0V18.0833ZM0 31H43V25.8333H0V31Z"
              fill="#F4F4F4"
            />
          </svg>
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

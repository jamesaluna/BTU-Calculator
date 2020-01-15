import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  eRelative,
  eWetBulb,
  eDewPoint
} from './psych.js'
import { findByLabelText } from '@testing-library/react';

// USER PAGES ARE THE FOLLOWING: 'landing', 'guide', 'calculator', and 'about'
// User_Page will change upon onclick event on a linked button.

var User_Page = 'landing'

// Landing Page Component ('landing')

function LandingPage() {
  
  // Custom styling goes here for imported components (positioning, padding, etc).

  let landingVideoPosition = {
    marginTop: '100px',
    paddingBottom: '100px'
  }
  let landingVideoButtons = {
    display: 'flex',
    width: '75vw',
    height: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '75px'
  }
  return (
    <div>
      <Header/>
      <LandingVideo style={landingVideoPosition}/>
      <div style={landingVideoButtons}>
        <BorderButton name='Guide' />
        <BorderButton name='Try' />
        <BorderButton name='About' />
      </div>
    </div>
  );
}

// Header Component (Used in each User_Page)

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

// Landing Video for Landing Page - like will change component name to Video

function LandingVideo(props) {
  return (
    <div className='landingPageVideoWrapper' style={props.style}>
      <video className='landingPageVideo' width='980' height='400'></video>
    </div>
  );
}
function BorderButton(props) {
  let button_name = props.name;
  return (
    <div className='borderButton'>
      <div className='borderName'>
        {button_name}
      </div>
    </div>
  );
}
// Footer Component (to be continued..)

function Footer() {
  return (
    <div className='Footer'>

    </div>
  )
}

function App() {
  switch (User_Page) {
    case 'landing': 
    return (<LandingPage />);
    break;
  }
}

export default App;

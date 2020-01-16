import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  eRelative,
  eWetBulb,
  eDewPoint
} from './psych.js'
import { findByLabelText, render } from '@testing-library/react';

// USER PAGES ARE THE FOLLOWING: 'landing', 'guide', 'calculator', and 'about'
// User_Page will change upon onclick event on a linked button.

var User_Page = 'landing'

// Landing Page Component ('landing')

function LandingPage() {
  // Custom styling goes here for imported components (positioning, padding, etc).
  let landingPageContent = {
    display: 'block',
    width: 'max-content',
    height: 'max-content',
    marginTop: '150px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }

  let landingVideoPosition = {
    paddingBottom: '100px'
  }
  let landingVideoButtons = {
    display: 'flex',
    width: '70vw',
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
      <SideBar />
      <div style={landingPageContent}>
        <LandingVideo style={landingVideoPosition}/>
        <div style={landingVideoButtons}>
          <BorderButton name='Guide' />
          <BorderButton name='Try' />
          <BorderButton name='About' />
        </div>
      </div>
    </div>
  );
}

// Header Component (Used in each User_Page)

function Header() {

  /* Basic show/hide navigation function for side bar (will be generated on all pages) */
  function showNav() {
    let toggled = false;
    return function() {
      const navigation = document.querySelector('.sideBar');
      if (toggled) {
        navigation.style.width = '0px';
        toggled = false;
      } else {
        navigation.style.width = '175px';
        toggled = true;
      }
    }
  }
  const showNavTrigger = showNav();
  return (
    <div className="Header">
      <div className="headerContent">
        <div className="logo">
          <img src={require("./Icons/header_logo.svg")} />
        </div>
        <div className="menu" onClick={showNavTrigger}>
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
function SideBar() {
  return (
    <div className='sideBar'>
      <div className='sideBarLinksWrapper'>
        <div className='sideBarLink'>
          <span>Guide</span>
        </div>
        <div className='sideBarLink'>
          <span>About</span>
        </div>
        <div className='sideBarLink'>
          <span>Try</span>
        </div>
      </div>
    </div>
  )
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

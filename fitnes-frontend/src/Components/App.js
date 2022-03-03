import logo from '../logo.svg';
import React from 'react';
import Calendar from './Calendar';
import TodayWorkout from './TodayWorkout';
import ProfileInfo from './ProfileInfo';
import Dictionary from './Dictionary';



import '../App.css';

function App() {


  return (
    <div className="App">
      <header className="App-header">

      </header>



      <div className="Header">
        <svg width="760" height="138" viewBox="0 0 760 138" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="760" height="138" rx="20" fill="#332A7C" />
        </svg>
      </div>
      <Calendar />
      <TodayWorkout />
      <ProfileInfo />
      <Dictionary />
















    </div>
  );
}

export default App;

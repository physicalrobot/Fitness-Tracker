import powerup from './pictures/goku-saiyan.gif'
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

import TodayWorkout from './TodayWorkout';
import ProfileInfo from './ProfileInfo';
import Dictionary from './Dictionary';



import '../App.css';

function App() {
  const [date, setDate] = useState(new Date());
  const changeDate = (e) => {
    setDate(e)
  }





  return (
    <div className="App">
      <header className="App-header">

      </header>



      <div className="Header">
        <div className="HeaderText">Back at it again.</div>
        <img className="HeaderAnimation" src={powerup} alt='workoutbuddy' />

      </div>
      <div className="Calendar">
        <Calendar onChange={changeDate} value={date} />
      </div>
      <TodayWorkout date={date} />
      <ProfileInfo />
      <Dictionary />
















    </div>
  );
}

export default App;

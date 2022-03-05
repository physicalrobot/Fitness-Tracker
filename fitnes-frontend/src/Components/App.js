import powerup from './pictures/goku-saiyan.gif'
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

import TodayWorkout from './TodayWorkout';
import ProfileInfo from './ProfileInfo';
import Dictionary from './Dictionary';



import '../App.css';

function App() {
  const [date, setDate] = useState(new Date());
  const [workouts, setWorkouts] = useState();
  const [search, setSearch] = useState("");



  const changeDate = (e) => {
    setDate(e)
  }


  //adding the database
  useEffect(() => {
    fetch("http://localhost:9292/workouts")
      .then((r) => r.json())
      .then((workouts) => setWorkouts(workouts));
  }, []);
  console.log(workouts)

  // function handleAddWorkout(newWorkout) {
  //   setWorkouts([...workouts, newWorkout]);
  // }

  function handleDeleteWorkout(id) {
    const updatedWorkouts = workouts.filter((workout) => workout.id !== id);
    setWorkouts(updatedWorkouts);
  }

  // function handleUpdateWorkout(updatedWorkoutObj) {
  //   const updateWorkouts = workouts.map((workout) => {
  //     if (workout.id === updatedWorkoutObj.id) {
  //       return updatedWorkoutObj;
  //     } else {
  //       return workout;
  //     }
  //   });
  //   setWorkouts(updateWorkouts);
  // }



  // const displayedWorkouts = workouts.filter((workout) =>
  //   workout.body.toLowerCase().includes(search.toLowerCase())
  // );







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
      <TodayWorkout date={date}
        workouts={workouts}
        onWorkoutDelete={handleDeleteWorkout}
      // workouts={displayedWorkouts} 
      />
      <ProfileInfo />
      <Dictionary />
















    </div>
  );
}

export default App;

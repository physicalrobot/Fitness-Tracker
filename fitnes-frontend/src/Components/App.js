import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';



import powerup from './pictures/goku-saiyan.gif'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

import TodayWorkout from './TodayWorkout';
import ProfileInfo from './ProfileInfo';
import Dictionary from './Dictionary';
import NewWorkout from './NewWorkout';




import '../App.css';

function App() {
  const [date, setDate] = useState(new Date());
  const [dates, setDates] = useState([])
  const [workouts, setWorkouts] = useState([]);
  const [search, setSearch] = useState("");
  const [routines, setRoutines] = useState([])
  const [catagorizedworkouts, setCatagorizedWorkouts] = useState([])
  // const [routineWorkouts, setRoutineWorkouts] = useState()

  const [workoutsdisplayed, setWorkoutsDisplayed] = useState([])


  function handleAddRoutine(newRoutine) {
    setRoutines([...routines, newRoutine]);

  }




  const changeDate = (e) => {

    setDate(e)

  }



  //adding the database
  useEffect(() => {
    fetch("http://localhost:9292/workouts")
      .then((r) => r.json())
      .then((workouts) => setWorkouts(workouts));

    fetch("http://localhost:9292/days")
      .then((r) => r.json())
      .then((dates) => setDates(dates))

    fetch("http://localhost:9292/day-workout")
      .then((r) => r.json())
      .then((wrk) => setCatagorizedWorkouts(wrk))




  }, []);



  function handleWorkoutDisplayed(newWorkout) {
    setWorkoutsDisplayed([newWorkout]);
  }



  function handleAddWorkout(newWorkout) {
    setWorkouts([...workouts, newWorkout]);
  }

  function handleAddDate(newDate) {
    setDates([...dates, newDate]);
  }

  function handleDeleteRoutine(id) {
    const updateRoutine = catagorizedworkouts.filter((routines) => routines.id !== id);
    setCatagorizedWorkouts(updateRoutine);
  }

  function handleDeleteWorkout(id) {
    const updatedWorkouts = workouts.filter((workout) => workout.id !== id);
    setWorkouts(updatedWorkouts);
  }

  const displayedWorkouts = workouts.filter((workout) =>
    workout.name.toLowerCase().includes(search.toLowerCase())
  )


  function handleUpdateWorkout(updatedWorkoutObj) {
    const updateWorkouts = workouts.map((workout) => {
      if (workout.id === updatedWorkoutObj.id) {
        return updatedWorkoutObj;
      } else {
        return workout;
      }
    });
    setWorkouts(updateWorkouts);
  }



  // setting the state in a parent component isn't working for some reason 
  // function listwrkout() {


  //   var wrkoutdate = date.toLocaleDateString('en-us', { day: "numeric", year: "numeric", month: "short" })
  //   if (catagorizedworkouts.find(function (post, index) {
  //     if (post.name == wrkoutdate)
  //       return true;
  //   }

  //   )) {
  //     var obj = catagorizedworkouts.find(o => o.name === date.toLocaleDateString('en-us', { day: "numeric", year: "numeric", month: "short" }));

  //     let closer = obj.routines;
  //     let cloyster = closer.filter(o => o.workout);
  //     // let cloyster = closer.workout

  //     var nameArray = cloyster.map(function (el) { return el.workout; });

  //     let wrkouttwrk = nameArray.map(function (el) { return el.name; });

  //     // console.log(obj)
  //     // console.log(wrkouttwrk)
  //     return (wrkouttwrk);
  //     console.log(wrkouttwrk)

  //   }

  //   else {
  //     console.log('no workouts')
  //   }
  // }


  // function handleupdateRoutine() {

  //   setRoutineWorkouts(listwrkout())
  // }













  return (
    <div className="App">
      <header className="App-header">

      </header>
      <Routes>
        <Route path="/" element={<ProfileInfo />} />
        <Route path="/new-workout" element={<NewWorkout handleAddWorkout={handleAddWorkout} handleAddDate={handleAddDate} date={date} dates={dates} />} />

      </Routes>

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
        catagorizedworkouts={catagorizedworkouts}
        handleWorkoutDisplayed={handleWorkoutDisplayed}
      // routineworkouts={routineWorkouts}
      // handleDeleteRoutine={handleDeleteRoutine}
      // workouts={displayedWorkouts} 
      />
      <ProfileInfo />
      <Dictionary dates={dates} date={date} setDates={setDates} search={search} handleAddDate={handleAddDate} onUpdateWorkout={handleUpdateWorkout} onWorkoutDelete={handleDeleteWorkout} setSearch={setSearch} workouts={displayedWorkouts} wkout={workouts} setWorkouts={setWorkouts} handleAddRoutine={handleAddRoutine}
        catagorizedworkouts={catagorizedworkouts}
      // handleupdateRoutine={handleupdateRoutine}

      // setCurrentDate={setCurrentDate} 
      // currentDate={currentDate} 


      />

    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';



import powerup from './pictures/goku-saiyan.gif'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

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
  const [catagorizedworkouts, setCatagorizedWorkouts] = useState()


  const [workoutonday, setWorkoutOnDay] = useState()


  const [count, setCounter] = useState([])


  const [currentDate, setCurrentDate] = useState("");
  const [checked, setChecked] = useState(false);



  function addtoCount(stuff) {
    setCounter([...count, stuff])
  }


  function handleAddCategory(stuff) {
    setCatagorizedWorkouts([...catagorizedworkouts, stuff])
    console.log(catagorizedworkouts)
  }


  const [workoutsdisplayed, setWorkoutsDisplayed] = useState([])


  const changeDate = (e) => {
    setDate(e)
  }


  function listwrkout(catagorizedworkouts) {
    var wrkoutdate = date.toLocaleDateString('en-us', { day: "numeric", year: "numeric", month: "short" })


    if (catagorizedworkouts?.find(function (post, index) {
      if (post.name == wrkoutdate)
        return true;
    }

    )) {
      var obj = catagorizedworkouts.find(o => o.name === date.toLocaleDateString('en-us', { day: "numeric", year: "numeric", month: "short" }));

      let closer = obj.routines;
      let cloyster = closer.filter(o => o.workout);

      var nameArray = cloyster.map(function (el) { return el.workout; });
      let wrkouttwrk = nameArray.map(function (el) { return el.name; });

      return (wrkouttwrk);
    }

    else {
      console.log('no workouts')
    }
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
      .then((wrk) => {
        setCatagorizedWorkouts(wrk)
      })
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





  return (
    <div className="App">
      <header className="App-header"></header>

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
        workoutonday={workoutonday}
        setWorkoutOnDay={setWorkoutOnDay}
        count={count}
        listwrkout={listwrkout}



      />
      <ProfileInfo />
      <Dictionary dates={dates} date={date} setDates={setDates} search={search} handleAddDate={handleAddDate} onUpdateWorkout={handleUpdateWorkout} onWorkoutDelete={handleDeleteWorkout} setSearch={setSearch} workouts={displayedWorkouts} wkout={workouts} setWorkouts={setWorkouts}
        catagorizedworkouts={catagorizedworkouts} count={count} setCounter={addtoCount} setCatagorizedWorkouts={setCatagorizedWorkouts} handleAddCategory={handleAddCategory} listwrkout={listwrkout}
      />

    </div>
  );
}

export default App;

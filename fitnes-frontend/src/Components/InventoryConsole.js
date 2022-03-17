import React, { useState } from 'react';

import EditWorkout from './EditWorkout';
import moment from 'moment';

function InventoryConsole({ dates, handleAddDate, date, handleDeleteClick, onUpdateWorkout, workout, setCounter,catagorizedworkouts,
setCatagorizedWorkouts,postRoutine}) {

    const { id, name, body, group } = workout
    const [isEditing, setIsEditing] = useState(false);
    const [currentDate, setCurrentDate] = useState("");
    const [checked, setChecked] = useState(false);



    const [workroutines, setWorkroutines] = useState([])






    function addworkRoutine(count) {
        setWorkroutines([...workroutines, count])
    }


    function handleDelete() {
        fetch(`http://localhost:9292/workouts/${id}`, {
            method: "DELETE",
        });
        handleDeleteClick(id)
    }

    function handleUpdate(updatedWorkout) {
        setIsEditing(false);
        onUpdateWorkout(updatedWorkout);
    }


    var rightnowdate = date.toLocaleDateString('en-us', { day: "numeric", year: "numeric", month: "short" })


    function handleDateCheck() {

        if (dates.find(function (post, index) {
            if (post.name == rightnowdate)
                return true;
        }

        )) {
            return (console.log('day already exists'));
        }
        else {

            fetch("http://localhost:9292/days", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: rightnowdate,

                }),
            })
                .then((r) => r.json())
                .then(dateData => handleAddDate(dateData))
        }
    }



    function onDateCheckbox(e) {
        setCurrentDate(date.toLocaleDateString('en-us', { day: "numeric", year: "numeric", month: "short" }))
        handleDateCheck()
        setChecked(!checked)
    }

    
    function handleAddRoutine(stuff) {
        setCatagorizedWorkouts([...catagorizedworkouts, stuff])
        console.log(catagorizedworkouts)
    }



    function postRoutine() {

        var dayindex = (dates.map(function (e) { return e.name; }).indexOf(currentDate) + 1);

        var workoutindex = workout.id
        console.log(workout)
        setChecked(!checked)

        //you can replace currentDate with this? 
        var rndate = date.toLocaleDateString('en-us', { day: "numeric", year: "numeric", month: "short" })
        if (dates.find(function (post, index) {
            if (post.name == rndate)
                return true;
        }

        )) {

            fetch("http://localhost:9292/routines", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    day_id: dayindex,
                    workout_id: workoutindex,
                    name: rndate


                }),
            })
                .then((r) => r.json())

                .then(setCounter(workout.name))

                .then(fetch("http://localhost:9292/day-workout")
                    .then((r) => r.json())



                    .then((wrk) => {

                        setCatagorizedWorkouts(wrk)

             
                    }))



        }
        else {
            console.log("the routine doesn't exist");
        }



        console.log(workroutines)

    }


    return (
        <div className="ConsoleContent">

            <h2 className='listHeaders'>{name}
                <button className='trashcan'
                    onClick={handleDelete}
                >
                    <span role="img" aria-label="delete">
                        🗑
                    </span>
                </button>

                <button className='editpencil'
                    onClick={() => setIsEditing((isEditing) => !isEditing)}>
                    <span role="img" aria-label="edit">
                        ✏️
                    </span>
                </button>

                <button className='addtocalendar' onClick={postRoutine}
                >
                    <span >
                        📅
                    </span>
                </button>

            </h2>

            <p
                className='addworkoutDateDictionary'>
                add to date: <b>{moment(date).format('MMMM Do YYYY')}</b> <input type='checkbox' onChange={onDateCheckbox} checked={checked}></input>
            </p>







            {isEditing ? (
                <EditWorkout
                    id={id}
                    body={body}
                    onUpdateWorkout={onUpdateWorkout}
                />
            ) : (

                <li>
                    <p>{body}</p>
                </li>
            )}
        </div>
    );


}

export default InventoryConsole
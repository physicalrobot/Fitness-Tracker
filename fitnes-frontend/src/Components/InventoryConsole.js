import React, { useState } from 'react';

import EditWorkout from './EditWorkout';
import Routine from './Routine';
import moment from 'moment';
import TodayWorkout from './TodayWorkout';

function InventoryConsole({ dates, handleAddDate, date, handleDeleteClick, onUpdateWorkout, workout, setGroupedworkouts, wkouts, handleAddRoutine, catagorizedworkouts }) {

    const { id, name, body, group } = workout
    const [isEditing, setIsEditing] = useState(false);
    const [calendarSelect, setcalendarSelect] = useState(false);
    const [routines, setRoutines] = useState()
    const [currentDate, setCurrentDate] = useState("");
    const [checked, setChecked] = useState(false);








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



    function handleDateCheck() {
        var rightnowdate = date.toLocaleDateString('en-us', { day: "numeric", year: "numeric", month: "short" })

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
        console.log(e.target.checked)
        setChecked(!checked)



    }



    function postRoutine(e) {
        // e.preventDefault()


        // setCurrentDate(date.toLocaleDateString('en-us', { day: "numeric", year: "numeric", month: "short" }))
        var dayindex = (dates.map(function (e) { return e.name; }).indexOf(currentDate) + 1);

        var workoutindex = workout.id

        console.log(workout)

        setChecked(!checked)



        //you can replace currentDate witht this? 
        // date.toLocaleDateString('en-us', { day: "numeric", year: "numeric", month: "short" })
        if (dates.find(function (post, index) {
            if (post.name == currentDate)
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
                    workout_id: workoutindex


                }),
            })
                .then((r) => r.json())
                .then(day => handleAddRoutine(day))


        }
        else {
            console.log("the routine doesn't exist");

        }



        console.log(currentDate)
        console.log(dayindex)

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



            {/* <Routine date={date} dates={dates} handleAddDate={handleAddDate} handleAddRoutine={handleAddRoutine} /> */}


            {/* {calendarSelect ? (
                    <Routine date={date} dates={dates} handleAddDate={handleAddDate} handleAddRoutine={handleAddRoutine} />
                ) : console.log('no routine added')} */}


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
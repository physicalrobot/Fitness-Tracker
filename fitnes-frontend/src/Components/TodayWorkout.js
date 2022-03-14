import React, { useState } from 'react';
import moment from 'moment';
import Workout from './Workout'
import { v4 as uuidv4 } from 'uuid';


function TodayWorkout({ date, workouts, onWorkoutDelete, catagorizedworkouts, setWorkoutOnDay, count }) {
    const [workroutines, setWorkroutines] = useState([])


    const { id, name, body, group } = workouts


    function handleDeleteRoutine() {
        fetch(`http://localhost:9292/workouts/${id}`, {
            method: "DELETE",
        });
        handleDeleteRoutine(id)
    }



    // filters the join table for the names of the workouts associated with the specific day//
    function listwrkout() {


        var wrkoutdate = date.toLocaleDateString('en-us', { day: "numeric", year: "numeric", month: "short" })
        if (catagorizedworkouts?.find(function (post, index) {
            if (post.name == wrkoutdate)
                return true;
        }

        )) {
            var obj = catagorizedworkouts.find(o => o.name === date.toLocaleDateString('en-us', { day: "numeric", year: "numeric", month: "short" }));
            let closer = obj.routines;
            let cloyster = closer.filter(o => o.workout);
            // let cloyster = closer.workout

            var nameArray = cloyster.map(function (el) { return el.workout; });

            let wrkouttwrk = nameArray.map(function (el) { return el.name; });

            // console.log(obj)
            // console.log(wrkouttwrk)

            return (wrkouttwrk);
        }

        else {
            console.log('no workouts')
        }
    }
    var routineworkouts = listwrkout()

    //all the workouts saved to the day
    console.log(routineworkouts)


    //the currently selected workouts 
    console.log(count)


    return (
        <div className='TodayWorkout'>
            <div className='TodayW'>Workouts:</div>
            <p className='WorkoutDate'>Current selected date: <b>{moment(date).format('MMMM Do YYYY')}</b></p>


            <div className='TodaysWorkoutList'>


                {/* {/*  */}
                <p>{count}</p>



                {routineworkouts?.map((workout) => (


                    <ul key={uuidv4()} >

                        < Workout
                            workout={workout}
                        />

                    </ul>
                ))}




            </div>


        </div >

    )
}

export default TodayWorkout;
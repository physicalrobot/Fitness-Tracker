import React, { useState } from 'react';
import moment from 'moment';
import Workout from './Workout'
import { v4 as uuidv4 } from 'uuid';


function TodayWorkout({ date, workouts, onWorkoutDelete, catagorizedworkouts, setWorkoutOnDay, count, routineworkouts, listwrkout, bookie }) {
    const [workroutines, setWorkroutines] = useState([])


    const { id, name, body, group } = workouts


    function handleDeleteRoutine() {
        fetch(`http://localhost:9292/workouts/${id}`, {
            method: "DELETE",
        });
        handleDeleteRoutine(id)
    }


    var bookie = listwrkout(catagorizedworkouts)

    console.log(bookie)



    return (
        <div className='TodayWorkout'>
            <div className='TodayW'>Workouts:</div>
            <p className='WorkoutDate'>Current selected date: <b>{moment(date).format('MMMM Do YYYY')}</b></p>


            <div className='TodaysWorkoutList'>



                {bookie?.map((workout) => (


                    <ul key={uuidv4()} >

                        <li>
                            <p className='thelistofworkoutsintoday'>{workout}
                            </p>
                        </li>

                    </ul>
                ))}




            </div>


        </div >

    )
}

export default TodayWorkout;
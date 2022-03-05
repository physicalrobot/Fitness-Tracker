import React, { useState } from 'react';
import moment from 'moment';
import Workout from './Workout'



function TodayWorkout({ date, workouts, onWorkoutDelete }) {
    const [day, setDay] = useState()

    // Can't isolate the Day Name for some reason
    // const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // function changeDay() {
    //     setDay(weekday[moment(date).format(' d ')]);
    //     console.log(day);
    // }
    // const daynum = moment(date).format(' d ')
    // console.log(weekday[daynum])




    return (
        <div className='TodayWorkout'>
            <div className='TodayW'>Workouts:</div>
            <p className='WorkoutDate'>Current selected date: <b>{moment(date).format('MMMM Do YYYY')}</b></p>


            <div className='TodaysWorkoutList'>
                {/* <ul>
                    {workouts.map((workout) => (
                        <Workout
                            key={workout.id}
                            workout={workout}
                            onWorkoutDelete={onWorkoutDelete}
                        />
                    ))}
                </ul> */}

            </div>


        </div>

    )
}

export default TodayWorkout;
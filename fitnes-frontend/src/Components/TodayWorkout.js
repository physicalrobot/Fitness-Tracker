import React from 'react';
import moment from 'moment';



function TodayWorkout({ date }) {

    return (
        <div className='TodayWorkout'>
            <div className='TodayW'>Today's Workout</div>
            <p className='WorkoutDate'>Current selected date: <b>{moment(date).format('MMMM Do YYYY')}</b></p>


        </div>

    )
}

export default TodayWorkout;
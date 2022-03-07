
import React, { useState } from 'react';
import { Link } from "react-router-dom";



function NewWorkout({ handleAddWorkout }) {

    const [workout, setWorkout] = useState({});

    const [name, setName] = useState('');
    const [body, setBody] = useState('');





    function handleSubmit(e) {
        e.preventDefault();
        const workoutData = {
            name: name,
            body: body
        };

        // fetches data and sets it to
        fetch("http://localhost:9292/workouts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            workout: JSON.stringify({
                name: "",
                body: "",
            }),
        })
            .then((r) => r.json())
            .then(workoutData => {
                handleAddWorkout(workoutData)


            })
    }



    return (
        <div>
            <form className="addform"
                onSubmit={handleSubmit}
            >

                <div className='NewWorkoutBackground'>

                    <input
                        className='AddWorkoutInputName'
                        type="text"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}


                    ></input>

                    <div className='AddToCategory'>
                        <input type="radio" value="cardio" name="category" /> Cardio
                        <input type="radio" value="arms" name="category" /> Arms
                        <input type="radio" value="core" name="category" /> Core
                        <input type="radio" value="yoga" name="category" /> Yoga

                    </div>



                    <textarea
                        className='AddWorkoutInputBody'
                        placeholder='Description'
                        type="text"
                        onChange={(e) => setBody(e.target.value)}


                    ></textarea>


                    <div className='NewWorkoutButtons'>

                        <button type="submit" className="AddWorkoutButton" >Add<span></span>
                        </button>

                        <Link to="/"><button className="CancelAddWorkoutButton">Cancel<span></span>
                        </button></Link>
                    </div>

                </div>
            </form>



        </div >

    )
}

export default NewWorkout;
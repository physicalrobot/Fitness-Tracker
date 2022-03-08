
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { RadioGroup, Radio } from 'react-radio-group'



function NewWorkout({ handleAddWorkout }) {

    const [workout, setWorkout] = useState({});

    const [name, setName] = useState('');
    const [body, setBody] = useState('');
    const [group, setGroup] = useState("");







    function handleSubmit(e) {
        e.preventDefault();


        // fetches data and sets it to
        fetch("http://localhost:9292/workouts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                body: body,
                group: group
            }),
        })
            .then((r) => r.json())
            .then(workoutData => {
                handleAddWorkout(workoutData)
                setName("")
                setBody("")
                setGroup("")

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
                        value={name}
                        onChange={(e) => setName(e.target.value)}


                    ></input>

                    <div className='AddToCategory'>


                        <input type="radio" value="cardio" name="category" onChange={(e) => setGroup(e.target.value)} /> Cardio
                        <input type="radio" value="arms" name="category" onChange={(e) => setGroup(e.target.value)} /> Arms
                        <input type="radio" value="core" name="category" onChange={(e) => setGroup(e.target.value)} /> Core
                        <input type="radio" value="yoga" name="category" onChange={(e) => setGroup(e.target.value)} /> Yoga




                    </div>



                    <textarea
                        className='AddWorkoutInputBody'
                        placeholder='Description'
                        type="text"
                        onChange={(e) => setBody(e.target.value)}
                        value={body}


                    ></textarea>


                    <div className='NewWorkoutButtons'>

                        <button type="submit" className="AddWorkoutButton" >Add<span></span>
                        </button>

                        <Link to="/"><button className="CancelAddWorkoutButton">X<span></span>
                        </button></Link>
                    </div>

                </div>
            </form>
        </div >
    )
}

export default NewWorkout;
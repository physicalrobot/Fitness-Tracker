
import React from 'react';
import { Link } from "react-router-dom";



function NewWorkout() {



    return (
        <div>
            <div className='NewWorkoutBackground'>

                <input
                    className='AddWorkoutInputName'
                    type="text"
                    placeholder="Name"

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

                ></textarea>


                <div className='NewWorkoutButtons'>

                    <Link to="/"><button className="AddWorkoutButton">Add<span></span>
                    </button></Link>

                    <Link to="/"><button className="CancelAddWorkoutButton">Cancel<span></span>
                    </button></Link>
                </div>

            </div>



        </div>

    )
}

export default NewWorkout;
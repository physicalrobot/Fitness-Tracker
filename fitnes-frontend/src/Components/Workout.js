import React, { useState } from 'react';

function Workout({ workout }) {
    const [isEditing, setIsEditing] = useState(false);
    const [workoutDay, setWorkoutDay] = useState();




    // function handleDeleteClick() {
    //     fetch(`http://localhost:9292/workouts/${id}`, {
    //         method: "DELETE",

    //     });

    //     onWorkoutDelete(id);
    // }








    return (
        // <li>
        //     <p>{name}</p>
        //     <div className="actions">

        //         <button onClick={handleDeleteClick}>
        //             <span role="img" aria-label="delete">
        //                 🗑
        //             </span>
        //         </button>
        //     </div>
        // </li>
        <li  >
            <p className='thelistofworkoutsintoday'>{workout}

                {/* <button className='trashcan' onClick={handleDeleteRoutine}>
                     <span role="img" aria-label="delete">
                          🗑
                     </span>
                </button> */}

            </p>
        </li>

    )

}

export default Workout; 
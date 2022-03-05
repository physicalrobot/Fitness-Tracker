import React, { useState } from 'react';

function Workout({ workout, onWorkoutDelete }) {
    const [isEditing, setIsEditing] = useState(false);


    const { id, body, created_at: createdAt } = workout


    function handleDeleteClick() {
        fetch(`http://localhost:9292/workouts/${id}`, {
            method: "DELETE",
        });

        onWorkoutDelete(id);
    }




    return (
        <li>
            <p>{body}</p>
            <div className="actions">

                <button onClick={handleDeleteClick}>
                    <span role="img" aria-label="delete">
                        🗑
                    </span>
                </button>
            </div>
        </li>
    )

}

export default Workout; 
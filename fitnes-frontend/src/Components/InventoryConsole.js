import React, { useState } from 'react';

import EditWorkout from './EditWorkout';

function InventoryConsole({ handleDeleteClick, onUpdateWorkout, workout, setGroupedworkouts, wkouts }) {

    const { id, name, body, group } = workout
    const [isEditing, setIsEditing] = useState(false);



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

            </h2>


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

export default InventoryConsole;
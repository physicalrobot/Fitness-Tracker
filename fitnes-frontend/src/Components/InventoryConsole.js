import React from 'react';

function InventoryConsole({ handleDeleteClick, workout, setGroupedworkouts, wkouts }) {

    const { id, name, body } = workout


    function handleDelete() {
        fetch(`http://localhost:9292/workouts/${id}`, {
            method: "DELETE",
        });
        handleDeleteClick(id)
        setGroupedworkouts(wkouts)

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
            </h2>
            <li>
                <p>{body}</p>
            </li>
        </div>
    );
}

export default InventoryConsole;
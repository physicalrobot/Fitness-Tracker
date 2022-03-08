import React, { useState } from "react";


function EditWorkout({ id, body, onUpdateWorkout }) {

    const [description, setDescription] = useState(body);


    function handleFormSubmit(e) {
        e.preventDefault();

        fetch(`http://localhost:9292/workouts/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                body: description,
            }),
        })
            .then((r) => r.json())
            .then((updatedDescription) => onUpdateWorkout(updatedDescription));
    }

    return (
        <form className="edit-message" onSubmit={handleFormSubmit}>
            <textarea
                className="descriptiontextbox"
                type="text"
                name="body"
                autoComplete="off"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input className="edit-save" type="submit" value="Save" />
        </form>
    );
}
export default EditWorkout;






import React, { useState } from "react";
import moment from 'moment';


function Routine({ date, dates, handleAddDate, handleAddRoutine }) {

    const [currentDate, setCurrentDate] = useState("");

    console.log(date)


    setCurrentDate(moment(date).format('MMMM Do YYYY'))
    var index = dates.map(function (e) { return e.name; }).indexOf(currentDate);
    const dayid = index + 1;


    function createRoutine() {

        function postRoutine() {

            fetch("http://localhost:9292/routines", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    day_id: dayid,

                }),
            })
                .then((r) => r.json())
                .then(day => handleAddRoutine(day))
        }

        //makes finding id cleaner


        //if date name matches with another object set day_id to object's id if not create day object and set day_id to object's id
        if (dates.find(function (post, index) {
            if (post.name == currentDate)
                return true;
        }

        )) {

            fetch("http://localhost:9292/routines", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    day_id: dayid,

                }),
            })
                .then((r) => r.json())
                .then(day => handleAddRoutine(day))
        }
        else {
            console.log("the routine doesn't exist");


            ////////////////////////////////////////////////////

            // fetch("http://localhost:9292/days", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify({
            //         name: currentDate,

            //     }),
            // })
            //     .then((r) => r.json())
            //     .then(dateData => handleAddDate(dateData))
            //     .then(
            //         postRoutine()

            //     )
            ///////////////////////////////////////////////////////////////////////
        }
    }

    return (

        createRoutine
    )

}

export default Routine; 

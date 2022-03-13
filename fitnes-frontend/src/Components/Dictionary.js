import React, { useState } from 'react';
import { Link } from "react-router-dom";
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';



import InventoryConsole from './InventoryConsole';


function Dictionary({ handleAddDate, setDates, dates, date, wkouts, search, onUpdateWorkout, onWorkoutDelete, setSearch, workouts, setWorkouts, handleAddRoutine, handleupdateRoutine }) {

    const [groupedworkouts, setGroupedworkouts] = useState([workouts]);


    function WorkoutSearch(e) {

        setSearch(e.target.value)
    }






    function All() {
        fetch("http://localhost:9292/workouts")
            .then((r) => r.json())
            .then((workouts) => setWorkouts(workouts))

    }


    function Arms() {

        fetch("http://localhost:9292/workouts/arms")
            .then((r) => r.json())
            .then((workouts) => setWorkouts(workouts))
    };


    function Cardio() {

        fetch("http://localhost:9292/workouts/cardio")
            .then((r) => r.json())
            .then((workouts) => setWorkouts(workouts))
    };


    function Yoga() {

        fetch("http://localhost:9292/workouts/yoga")
            .then((r) => r.json())
            .then((workouts) => setWorkouts(workouts))
    };


    function Core() {

        fetch("http://localhost:9292/workouts/core")
            .then((r) => r.json())
            .then((workouts) => setWorkouts(workouts))
    };




    // const [index, setIndex] = useState();


    // function IndexSetter() {
    //     setCurrentDate(moment(date).format('MMMM Do YYYY'))
    //     setIndex(dates.map(function (e) { return e.name; }).indexOf(currentDate) + 1);


    // }

    // const [currentDate, setCurrentDate] = useState("");




    // function postRoutine() {
    //     setCurrentDate(moment(date).format('MMMM Do YYYY'))
    //     var index = (dates.map(function (e) { return e.name; }).indexOf(currentDate) + 1);

    //     //getting a value behind the updated value for some reason. 
    //     console.log(currentDate)
    //     console.log(index)


    //     if (dates.find(function (post, index) {
    //         if (post.name == currentDate)
    //             return true;
    //     }

    //     )) {


    //         fetch("http://localhost:9292/routines", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 day_id: index,

    //             }),
    //         })
    //             .then((r) => r.json())
    //             .then(day => handleAddRoutine(day))
    //     }
    //     else {
    //         console.log("the routine doesn't exist");


    //     }

    // }



    return (


        <div className='WorkoutInventoryConsole'>
            <div className="InventoryTitle">Workout Inventory</div>

            <input
                className='Search'
                name="Search"
                type="text"
                placeholder="Search Workouts"
                value={search}
                onChange={WorkoutSearch}
            ></input>



            <div className='searchandnewbutton'>
                <button className="SearchButton" onClick={All}>All</button>
                <Link to="/new-workout"><button className="AddNewWorkout"> New<span></span>

                </button></Link>
            </div>

            <div className='Buttons'>
                <button className='Cardiobutton' onClick={Cardio}>
                    <div className="Cardiobuttontitle"><h1>Cardio</h1></div>
                    <div className='Cardiobuttonvector'>
                        <svg width="157" height="157" viewBox="0 0 157 157" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M69.4269 47.5382L47.7871 74.588L74.8369 101.638L61.3153 131.402M85.0419 39.2499C88.5118 39.2499 91.8396 37.8715 94.2932 35.4179C96.7468 32.9643 98.1252 29.6365 98.1252 26.1666C98.1252 22.6967 96.7468 19.3689 94.2932 16.9153C91.8396 14.4617 88.5118 13.0833 85.0419 13.0833C81.572 13.0833 78.2442 14.4617 75.7906 16.9153C73.337 19.3689 71.9586 22.6967 71.9586 26.1666C71.9586 29.6365 73.337 32.9643 75.7906 35.4179C78.2442 37.8715 81.572 39.2499 85.0419 39.2499Z" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21.8688 140.888L122.009 127.804V52.3332M28.8488 55.6564L51.0054 34.01L69.4267 47.5382L88.3649 69.178H99.6296L28.8488 55.6564ZM45.0852 96.2278L36.967 101.638H15.3271L45.0852 96.2278Z" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M136.662 142.02L122.008 127.805M136.668 39.25L122.002 52.3333L111.208 62.1458L136.668 39.25Z" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </div>
                </button>

                <button className='Armsbutton'
                    onClick={Arms}
                >
                    <div className="Armsbuttontitle"><h1>Arms</h1></div>
                    <div className='Armsbuttonvector'>
                        <svg width="151" height="151" viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M149.733 107.948C149.552 105.963 149.378 104.093 149.505 102.679C150.625 90.1901 146.986 78.9309 138.981 70.1263C129.901 60.1366 115.586 54.1716 100.692 54.1716C79.9522 54.1716 62.569 65.0383 54.1892 83.2413C54.1693 83.2885 54.1445 83.3357 54.1271 83.3829C52.2017 76.295 50.2589 71.3759 48.7037 67.4332C46.0752 60.7652 44.6641 57.1902 45.7945 49.3495C47.8459 49.1263 49.7698 48.2441 51.2775 46.8353C51.5384 46.8527 51.8092 46.8651 52.0825 46.8651C54.9022 46.8651 57.3468 45.7968 59.1132 43.8938L59.3319 43.8963C62.8423 43.8963 65.831 42.3783 67.821 39.7002C72.6754 39.2927 76.0293 36.3661 76.6927 31.857C77.587 25.805 75.4704 8.86658 70.8966 3.53511C69.083 1.41594 67.0806 0.96875 65.7242 0.96875C57.9853 0.96875 45.8815 2.75502 35.6061 5.41081C16.8789 10.2504 13.9523 15.1371 13.4877 18.8562C11.5872 34.2022 8.76987 47.8911 6.28053 59.9702C2.75271 77.0825 -0.0322702 90.6 1.31426 101.228C1.83846 105.375 2.88439 108.932 3.89304 112.368C5.1551 116.656 6.45443 121.091 6.89417 127.155C7.49787 135.585 16.6006 140.419 31.8696 140.419C37.8544 140.419 43.9586 139.639 48.9671 138.25C55.1084 141.192 75.3735 150.031 97.0173 150.031C104.461 150.031 111.394 148.968 117.635 146.871C149.567 136.124 151 121.749 149.733 107.948ZM6.24575 100.6C4.09428 83.6239 13.8653 56.2585 18.4217 19.4749C19.1943 13.2515 47.5212 6.73747 63.1031 6.03439C62.4696 6.54369 62.015 7.21198 61.9554 7.92251C63.8236 7.07534 66.6136 6.80206 67.9825 9.5945C68.0545 9.12744 68.0843 8.71255 68.0843 8.32498C68.7998 9.72617 69.4532 11.6367 70.0047 13.813C70.6979 16.9433 71.0854 20.1531 71.0929 23.3753C71.0979 25.6137 71.5848 33.5936 67.9005 32.5551C65.6298 31.9141 65.5726 29.8198 64.9242 27.6634C63.9255 24.2921 62.1665 20.4065 62.3802 16.824C61.5131 20.3394 62.5442 24.5579 62.9268 28.113C63.1454 30.1825 64.5764 35.7748 62.0423 36.5375C60.6411 36.9673 59.0164 35.981 57.8562 35.2581C57.4139 34.9798 57.0835 32.9451 56.922 32.3737C55.9233 28.8807 54.1346 24.8635 54.3631 21.194C53.4886 24.5032 54.3408 28.4907 54.619 31.8818C54.7904 33.9836 55.8513 38.54 53.4812 39.5983C50.798 41.002 50.3856 37.5984 49.8888 35.8146C48.9671 32.5029 47.469 28.8807 47.5087 25.4075C46.5721 29.6384 47.6727 34.5923 47.8541 38.925C47.9509 41.0765 43.4418 43.0193 41.7599 41.6678C39.124 39.5486 38.6793 34.5873 38.3811 31.38C39.1712 32.4582 40.304 33.8519 41.7425 33.7103C40.5202 32.3166 40.0009 29.9266 39.1836 28.2323C38.4333 26.841 36.9104 23.5294 35.1191 23.4747C35.3949 24.0685 36.9054 28.1602 36.6719 28.5925C35.944 29.9465 35.2359 31.3228 34.426 32.6197C33.7378 33.7103 31.7404 37.186 30.128 36.1351C28.3865 35.0072 27.2934 29.9564 27.2934 29.9564C27.2934 29.9564 27.358 36.2543 29.6088 37.7127C31.7404 39.0989 34.1701 36.9127 35.5812 35.3525C35.862 38.3462 36.6719 41.8566 38.483 44.172C33.1615 67.7711 42.9574 67.5351 49.5608 99.0817C49.5608 99.0817 53.9134 92.6645 57.7195 84.399C66.0248 66.3575 83.3483 58.3181 100.048 58.3181C116.609 58.3181 134.343 66.7848 140.787 81.4227C142.916 86.2573 143.445 92.036 142.869 98.401C141.927 108.768 152.158 125.635 113.996 138.307C83.7135 148.362 46.4678 129.083 46.4678 129.083C36.252 132.422 12.3623 133.88 11.8579 126.805C11.0257 115.215 7.34632 109.315 6.24575 100.6Z" fill="white" />
                        </svg>
                    </div>
                </button>


                <button className='Corebutton' onClick={Core}>
                    <div className="Corebuttontitle"><h1>Core</h1></div>
                    <div className='Corebuttonvector'>
                        <svg width="168" height="168" viewBox="0 0 168 168" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_19_1244)">
                                <path d="M84 36.75C94.1482 36.75 102.375 28.5232 102.375 18.375C102.375 8.22677 94.1482 0 84 0C73.8518 0 65.625 8.22677 65.625 18.375C65.625 28.5232 73.8518 36.75 84 36.75Z" fill="white" />
                                <path d="M143.391 42.0001H24.6094C22.2597 42.0001 20.0063 42.9335 18.3449 44.5949C16.6834 46.2564 15.75 48.5098 15.75 50.8595C15.75 53.2091 16.6834 55.4625 18.3449 57.124C20.0063 58.7854 22.2597 59.7188 24.6094 59.7188H58.0387C60.3061 59.7188 62.9606 60.7327 64.4634 64.6407C66.2189 69.1787 65.3592 77.9429 64.2764 84.7318L62.8589 92.7544C62.8615 92.7753 62.8594 92.7965 62.8525 92.8164C62.8457 92.8363 62.8344 92.8544 62.8195 92.8693L51.4664 157.448C51.0547 159.792 51.5882 162.204 52.9503 164.155C54.3124 166.107 56.3921 167.44 58.7344 167.862C59.8924 168.067 61.0796 168.04 62.227 167.782C63.3744 167.524 64.4592 167.041 65.4183 166.361C66.3775 165.68 67.1919 164.816 67.8143 163.818C68.4367 162.821 68.8547 161.709 69.0441 160.548L76.8895 115.661C76.8895 115.661 79.4062 105 84 105C88.6692 105 91.1334 115.661 91.1334 115.661L98.9789 160.588C99.1687 161.759 99.5896 162.88 100.217 163.887C100.845 164.893 101.666 165.765 102.634 166.451C103.602 167.136 104.697 167.623 105.854 167.881C107.012 168.14 108.21 168.165 109.377 167.956C110.545 167.747 111.659 167.308 112.655 166.663C113.651 166.019 114.509 165.184 115.179 164.205C115.849 163.226 116.317 162.123 116.556 160.961C116.796 159.8 116.801 158.602 116.573 157.438L105.217 92.8594C105.219 92.8388 105.217 92.818 105.211 92.7982C105.205 92.7784 105.194 92.7601 105.18 92.7446L103.76 84.722C102.677 77.933 101.817 69.1688 103.573 64.6309C105.069 60.7327 107.809 59.709 109.899 59.709H143.391C145.74 59.709 147.994 58.7756 149.655 57.1141C151.317 55.4527 152.25 53.1993 152.25 50.8496C152.25 48.5 151.317 46.2465 149.655 44.5851C147.994 42.9236 145.74 41.9902 143.391 41.9902V42.0001Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_19_1244">
                                    <rect width="168" height="168" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>



                    </div>
                </button>

                <button className='Yogabutton' onClick={Yoga}>
                    <div className="Yogabuttontitle"><h1>Yoga</h1></div>
                    <div className='Yogabuttonvector'>
                        <svg width="179" height="179" viewBox="0 0 179 179" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M96.958 14.9167C93.0019 14.9167 89.2077 16.4883 86.4103 19.2857C83.6129 22.0832 82.0413 25.8773 82.0413 29.8334C82.0413 33.7896 83.6129 37.5837 86.4103 40.3811C89.2077 43.1785 93.0019 44.7501 96.958 44.7501C105.237 44.7501 111.875 38.1122 111.875 29.8334C111.875 25.8773 110.303 22.0832 107.506 19.2857C104.708 16.4883 100.914 14.9167 96.958 14.9167ZM29.833 52.2084V67.1251H74.583V111.875L36.7693 149.689L47.2855 160.354L97.4055 110.16L126.791 127.761V156.625H141.708V123.585C141.708 120.9 140.366 118.513 137.979 117.17L111.875 101.433V67.1251H156.625V52.2084H29.833Z" fill="white" />
                        </svg>


                    </div>
                </button>








            </div>

            <div className='InventoryOutput'>

                <ul key={uuidv4()}>
                    {workouts.map((workout) => (
                        <InventoryConsole
                            dates={dates}
                            date={date}
                            key={workout.id}
                            workout={workout}
                            handleDeleteClick={onWorkoutDelete}
                            setGroupedworkouts={setGroupedworkouts}
                            onUpdateWorkout={onUpdateWorkout}
                            handleAddDate={handleAddDate}
                            handleAddRoutine={handleAddRoutine}
                            handleupdateRoutine={handleupdateRoutine}
                        // postRoutine={postRoutine}
                        />
                    ))}

                </ul>


            </div>


        </div>


    )
}
export default Dictionary;
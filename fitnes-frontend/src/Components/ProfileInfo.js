import React from "react";
// import ozaru from "./pictures/profilepic.png"


function ProfileInfo() {

    return (
        <div className='ProfileInfo'>
            <svg className='ProfilePic' width="153" height="153" viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="76.5" cy="76.5" r="76.5" fill="#169C9C" />
                <path d="M32.8333 135C32.8333 135 24 135 24 126.167C24 117.333 32.8333 90.8333 77 90.8333C121.167 90.8333 130 117.333 130 126.167C130 135 121.167 135 121.167 135H32.8333ZM77 82C84.0282 82 90.7686 79.208 95.7383 74.2383C100.708 69.2686 103.5 62.5282 103.5 55.5C103.5 48.4718 100.708 41.7314 95.7383 36.7617C90.7686 31.792 84.0282 29 77 29C69.9718 29 63.2314 31.792 58.2617 36.7617C53.292 41.7314 50.5 48.4718 50.5 55.5C50.5 62.5282 53.292 69.2686 58.2617 74.2383C63.2314 79.208 69.9718 82 77 82V82Z" fill="white" />
            </svg>
            {/* <img className="ProfilePic" src={ozaru} alt='oozaru' /> */}
            <h1 className="User">Vikalp Malhotra</h1>
            <div className="Info">Male <br></br> 170lbs </div>





        </div>

    )
}

export default ProfileInfo;
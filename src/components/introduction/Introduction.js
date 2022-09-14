import React from "react";
import './Introduction.css';

export default function Introduction() {
    return (
        <div>
            <div>
                <p className="major text-3xl">Hi, <span className="my-name">I'm Renee Bogdany.</span></p>
                <p className="major italic">-- third-year human centered computing student --</p>
                <p className="my-introduction major text-xl">
                   I'm a third-year human-centered computing student at Rochester Institute of Technology. I'm interested in UX Design and Research.
                </p>
            </div>
            {/* <div><p>Don't have a lot of time? Follow this link for a summary of my work: </p><a href="">Summary</a></div> */}
            <hr />
         </div>


    );
}

// w-72 sm:w-1 fixed left-1/2 -translate-x-1/2 drop-shadow-xl rounded-xl p-10">

import React from "react";
import './Introduction.css';

export default function Introduction() {
    return (
        <div>
            <div className="ml-2 mr-2">
                <p className="major text-3xl">Hi, <span className="my-name">I'm Renee Bogdany.</span></p>
                <p className="major italic">UX Design and Research</p>
                <p className="mx-auto max-w-5xl my-introduction major text-xl intro-text">
                I'm a fourth year student at Rochester Institute of Technology (RIT), double majoring in human-centered computing (UX) and web & mobile computing. I'm passionate about
                creating intuitive and accessible interfaces. I'm currently looking for a position in UX Design or Research. I'm open to a summer internship in 2024, or a full time position
                starting in 2025.
                </p>
                <hr class="mx-auto max-w-5xl"/>
            </div>
            {/* <div><p>Don't have a lot of time? Follow this link for a summary of my work: </p><a href="">Summary</a></div> */}
            
         </div>


    );
}

// w-72 sm:w-1 fixed left-1/2 -translate-x-1/2 drop-shadow-xl rounded-xl p-10">

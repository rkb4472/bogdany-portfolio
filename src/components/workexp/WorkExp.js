import React from "react";
import './WorkExp.css';

export default function WorkExp() {
    return (
        <div className="fullWorkExp mx-auto max-w-5xl">
            <hr></hr>
            <div className="outerExp">
                <h2 class="we-font"> Work Experience </h2>
                <div class="timeline">
                    <div class="circle circle1"></div>                    
                    <div class="line"></div>
                    <div class="circle"></div>
                    <div class="line"></div>
                    <div class="circle circle3"></div>
                </div>

                <div class="flex flex-row justify-between text-center mx-3.5 innerExp"> 
                    <div className="exp flex-col w-1/3">
                        <p class="text-xl">UX Design Intern</p>
                        <p className="mg">Ab Initio</p>
                        <p class="italic">June 2023 - August 2023</p>
                    </div>
                    <div className="exp flex-col w-1/3">
                        <p class="text-xl">XD Technology Intern</p>
                        <p className="mg">Johnson & Johnson</p>
                        <p class="italic">January 2023 - June 2023</p>
                    </div>
                    <div className="exp flex-col w-1/3">
                        <p class="text-xl">Front-End Dev Intern</p>
                        <p className="mg">Liberty Mutual</p>
                        <p class="italic">May 2022 - August 2022</p>
                    </div>
                </div>
            </div>
            <p className="right">Learn more about my co-op projects at <a>something.com</a>. Contact me for the password.</p>
        </div>
        
    );
}
import React from "react";
import { Routes, Route, Link } from 'react-router-dom'
import './Navigation.css';

export default function Navigation() {
    return (
        <nav class=" flex items-center justify-between flex-wrap white p-6">

            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                    <Link to = "/">
                        <a href="" class="block mt-4 lg:inline-block text-base lg:mt-0 text-black hover:text-cyan-800 mr-4">
                        HOME
                        </a>
                    </Link>
                    <Link to = "/rcnproject">
                        <a href="" class="block mt-4 lg:inline-block text-base lg:mt-0 text-black hover:text-cyan-800 mr-4">
                        RCN Project
                        </a>
                    </Link>
                    <Link to = "/mylifeproject">
                        <a href="" class="block mt-4 lg:inline-block text-base lg:mt-0 text-black hover:text-cyan-800 mr-4">
                        MyLife Project
                        </a>
                    </Link>
                    {/* <Link to = "/wfssproject">
                        <a href="" class="block mt-4 lg:inline-block text-base lg:mt-0 text-black hover:text-cyan-800 mr-4">
                        WFSS Project
                        </a>
                    </Link> */}
                    {/* <img href="../img/Bogdany_UX_Resume.pdf" alt="hello" /> */}
                    {/* <Link to = "../img/Bogdany_UX_Resume.pdf">
                    <a href="./img/Bogdany_UX_Resume.pdf" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white">
                        RESUME
                    </a>
                        
                    </Link> */}
                    
                </div>
            </div>
        </nav>
    );
}
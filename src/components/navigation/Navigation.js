import React from "react";
import { Routes, Route, Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <nav class="flex items-center justify-between flex-wrap white p-6">

            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                    <Link to = "/">
                        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
                        HOME
                        </a>
                    </Link>
                    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
                        PROJECTS
                    </a>
                    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white">
                        RESUME
                    </a>
                </div>
            </div>
        </nav>
    );
}
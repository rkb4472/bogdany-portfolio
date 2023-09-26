import React from "react";
import './Card.css';

export default function Card(props) {

    // var learnMore = "Learn more ->";


    return (
        <div class="max-w-sm rounded overflow-hidden ">
            {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" /> */}
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{props.title}</div>
                {/* {props.tags.map(title => {
                    return <span class="tag inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{title}</span>
                })} */}
                <p class="text-gray-700 text-base">
                    {props.description}
                </p>
                {/* <p className="mt-2 mb-3 learn-more">
                    {learnMore}
                </p> */}
                <button className="button">View Project -{">"}</button>
            </div>
        </div>
    );
}

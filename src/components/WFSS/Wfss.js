import React from "react";
import './wfss.css';
import sketch1 from '../../img/sketch1.jpg';
import sketch2 from '../../img/popupsketch2.jpg';
import popup from '../../img/popup.png';
import Footer from '../Footer/Footer.js';
import wfss from '../../img/wfss_overview.png';
import Navigation from '../navigation/Navigation'

export default function Wfss() {
    var arrow = " -> ";
    return (
        <div>
            <Navigation />

            <div className="mx-auto main">
                <p className="text-center text-4xl font-bold text-blue-300 mt-3 mb-8">WFSS Redesign</p>
                <img src={wfss} alt="rcn" width="100%" className="mx-auto mb-10" />
                <div className="section">
                    <h1>
                        Background
                    </h1>
                    <p>
                        I was involved in a competition at RIT, where we were challenged to redesign a charity's website and create a prototype of our new design.
                        The organization, Water for South Sudan (WFSS), presented their current website, as well as the problems they had with the design of their current website.
                    </p>
                </div>
                {/* <div className="section">
                    <h1>
                        Design Process
                    </h1>
                    <p>
                        We followed the design thinking process, with emphasis on iteration and application of user feedback.
                    </p>
                </div> */}

                <div className="section">
                    <h1>
                        Problem Statements
                    </h1>
                    <p> Water for South Sudan is a charity organization that is dedicated to providing clean water and other services, such as well rehabilitation and hygiene education, to South Sudan. Their website is used both for American donors to donate to the
                        cause and for people who live in South Sudan to request services from WFSS. </p>
                    <div className="mt-4 mb-4">
                        <ol>
                            <li className="font-bold">
                                The problem WFSS found with their website is that it was confusing for these two distinct audiences
                                to find the correct part of the website that they needed.
                            </li>
                            <li>
                                something about organization?
                            </li>
                        </ol>
                    </div>

                </div>

                <div className="section">
                    <h1>
                        Process
                    </h1>
                    <p>
                        We were given a week to create a new design and then present it to representatives from the charity.
                        We started by thinking about the audience of the website and brainstorming different ideas for how to redesign the website and tackle
                        the problem that the original website had.
                        Then, we began by making different sketches to visualize the ideas we had for the redesign of the website.
                    </p>
                    <p className="mini-heading"> Sketch Examples </p>
                    <div className="flex">
                        <img src={sketch1} alt="rcn" width="50%" className="mx-auto mb-10" />
                        <img src={sketch2} alt="rcn" width="50%" className="mx-auto mb-10" />
                    </div>

                    <p>
                        Utimately, our group decided to use a pop-up that would appear when a user first visits the site. This pop-up would ask the user why they were visiting the site and based on their choice, it would
                        redirect them to the correct website (American site for donors, South Sudan website for others).
                    </p>
                    <img src={popup} alt="rcn" width="100%" className="mx-auto mt-3 mb-10" />
                    <p className="mini-heading">Next Steps</p>
                    <ul className="list-disc list-outside">
                        <li>We made more sketches for the website, including what the homepage would look like and what the page for requesting services from WFSS would look like. We also finalized our popup sketch design, which
                            ultimately was a combination of all of our groups' original ideas and sketches. We decided the popup should take up the entire page when a user first gets on the website, instead of having of having the
                            popup be on top of the website, which was another possibility that we were thinking about. Ultimately, we chose it taking up the whole page because it was important to redirect people to the correct page and did
                            not want people to ignore the popup or be confused about whether they actually needed to answer the question or not.
                        </li>
                        <li>After we had completed our sketches and made our final decisions on the popup and the home page and services page, we created a wireframe of our ideas utilizing figma.
                            We took some of the pictures and sections from their original website, but reorganized and redesigned it.
                        </li>
                        <li>The last part of our design process was turning the wireframe in a prototype. We added links from the popup to the correct pages and also the links that would lead to
                            the Services page.
                        </li>
                        <li>Once we completed our prototype, we were able to move into one of the last steps in our design process, which was user testing. </li>
                    </ul>

                </div>

                <div className="section">
                    <h1>
                        First Iteration and User Testing
                    </h1>
                    {/* <p>
                        description?
                    </p> */}
                    <p>In order to test our prototype, we found five participants to use our prototype. We made five different scenarios and asked our participants to pretend they were a certain part of the audience that would use this website (for example a donor).
                        Next, we presented our prototype to the participant and see if they clicked on the correct link and were brought to the correct website. We also tested to see if users could find their way from the homepage to the Services page (where users
                        could request services from WFSS).</p>
                    <p className="mini-heading"> Tasks </p>
                    <div>
                        <ol>
                            <li>You are an RIT Student and you need to log in and set up a housing and meal plan for the next school year.</li>
                            <li>Submit a maintenance request for your bedroom.</li>
                            <li>Go back and change the meal plan that you selected for next year.</li>
                            <li>Find the roommate agreement.</li>
                        </ol>
                    </div>
                    <p className="mini-heading">Findings</p>
                    <div>
                        <ol>
                            <li>One participant explained that they did not read two of the buttons on the pop-up because they were too confusing.</li>
                            <li>Another participant explained that the pop-up was quick and easy for them to use.</li>
                            <li>As we observed participants using the website, we noticed that the path to the Services page was confusing and misleading.</li>

                        </ol>
                    </div>
                    <p className="mini-heading">Changes</p>
                    <li>The popup questions did work and having the popup ask the users about the goal was able to direct people to the correct site.</li>
                    <li>The wording of the questions on the popup were important. They had to be simple so that people could quickly and easily read it, but still detailed enough to still direct people to the correct place. </li>
                    <li>Having more links between pages was helpful for users to navigate to the desired page, and helped to make the path to the Services page less confusing.</li>

                </div>

                <div className="section">
                    <h1>
                        Final Prototype and Outcome
                    </h1>
                    <p>We implemented the changes from the usability test results.</p>
                    <div className="figma-link mx-auto link-div">
                        <a href="https://www.figma.com/proto/7SmNjQZxzJrV4i3fTalAR8/WFSS-Prototype?node-id=6%3A13&scaling=scale-down&page-id=0%3A1&starting-point-node-id=6%3A13&show-proto-sidebar=1">Figma Prototype link</a>
                    </div>
                    <p>Ultimately,
                        we did not end up winning the competition, and the organization chose another group's design over ours. But our group did receive an honorable mention, as they were impressed with our design,
                        as well as our user testing.
                    </p>
                </div>



                <div className="section">
                    <h1>What Did I learn?</h1>
                    <ul className="list-disc list-outside">
                        <li>The user testing was super helpful for pointing out certain flaws that we did not realize ourselves.</li>
                        <li>Time management and planning were important for completing the prototype in time, as we only had a week to finish it. We stayed on track by creating a schedule
                            and dividing up tasks between members.</li>
                        <li>Communication between team members about our ideas and plans was critical to the success of our project. We would meet everyday over zoom to discuss what we had finished so far, brainstorm more ideas together, and plan our next meeting. </li>
                        <li>The winning design combined the two websites into one, which might be simpler than our design, but still easily
                            direct people to the correct information.
                        </li>
                    </ul>
                </div>
                {/* <div className="section">
                    <h1>
                        Second Usability Test
                    </h1>
                    <p>
                        info here
                    </p>
                </div> */}
                {/* <div className="section">
                    <h1>
                        What did I learn? What would I change?
                    </h1>
                    <p>
                        info here
                    </p>
                </div> */}
            </div>


            <Footer />

        </div>


    );
}
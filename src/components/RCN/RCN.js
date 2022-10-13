import React from "react";
import './RCN.css';
import rcn from '../../img/rcn_overview.png';
import Footer from '../Footer/Footer.js';
import map from '../../img/user-journey-map.png';
import homescreen from '../../img/homescreen.png';
import homescreen2 from '../../img/homescreen2.png';
import text from '../../img/text_message.png';
import widget from '../../img/widget.png';
import Navigation from '../navigation/Navigation'

export default function RCN() {

    var arrow = " -> ";

    return (
        <div>
            <Navigation />
            

            <div className="mx-auto main">
            <p className="text-center text-4xl font-bold text-green-700 mt-3 mb-8">RCN Prototype</p>
            <img src={rcn} alt="rcn" width="100%" className="mx-auto mb-10"/>
                <div className="section">
                    <h1>
                        Background
                    </h1>
                    <p>
                        I worked in a group of 4 people, in order to solve a problem presented by a business called Rochester Childfirst Network (RCN). They are a daycare in the Rochester area.
                        We wanted to make the parental experience more informed and convenient for a non-profitable childcare service.
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
                        Stakeholder Concerns
                    </h1>
                    <p>
                        Due to COVID-19 and restrictions in how many people could be in the building at a time, RCN was concerned with the uncertainty of pick and drop off from the school.
                    </p>
                    <ul className="list-disc list-outside">
                        <li>Notifying parents about last minute changes in the school timings is difficult.</li>
                        <li>If the pickup person is unauthorized the school is uncertain whether to handover the child to that person. </li>
                        <li>If there is any latency in pickup from the parents' side, there is currently no way to notify the school about the delay.</li>
                    </ul>
                </div>

                {/* <div className="section">
                    <h1>Approach</h1>
                </div> */}

                <div className="section">

                    <p className="mini-heading"> User Journey Map </p>
                    <p>
                        Using the information from the stakeholders' presentation, we created user journey maps from the users' point of view, in order
                        to improve our understanding of the tasks they carry out and opportunities for improvement to this process using an app.
                    </p>
                    <img src={map} alt="rcn" width="100%" className="mx-auto mt-7 mb-7"/>
                    <p>From here, we concluded that we wanted to focus on three main principles: safe, convenient, and updated.</p>
                </div>

                <div className="section">
                    <h1>
                        First Challenge
                    </h1>
                    <p className="mini-heading"> How do we address the user who has limited access to the internet/smartphone? </p>
                    <p> We designed a text message that would sent announcements and alerts to the parent. </p>
                    <img src={text} alt="rcn" width="100%" className="mx-auto mt-7 mb-7"/>
                </div>
                
                <div className="section">
                    <h1>
                        Prototype
                    </h1>
                    {/* <p className="mt-4">any description?</p> */}
                    <div className="figma-link mx-auto link-div">
                        <a href="https://www.figma.com/proto/svDdzXKIth37iXbnoy2NFr/Rochester-Childfirst-Network-App?node-id=51%3A928&starting-point-node-id=51%3A928&scaling=scale-down&show-proto-sidebar=1">Figma Prototype Link</a>
                    </div>
                </div>

                <div className="section">
                    <h1>My Part in the Project</h1>
                    <p>We didn't have a lot of time to complete this project, so we all collaborated and discussed ideas for the entire app. However, my main focus was solving the following question:</p>
                    <p className="mini-heading">
                        How do we create an easy to use home screen for parents?
                    </p>
                    <div className="imgDiv">
                    <img src={homescreen} alt="homescreen" width="200" />
                    <img src={homescreen2} alt="homescreen" width="200"/>
                    </div>
                   
                    <p>One important thing that we had to consider when building this app was that some of the parents would not be too familiar with technology.
                        We really wanted to focus on making something that was simple and easy to use. One important part of the app was designing the home screen of
                        the app. This had one of the most important functions that RCN wanted on it, which was parents notifying the school that they would be late to picking up their
                        kid. Instead of having the usual bottom navigation that apps have, we decided to hide away the options of schedule and profile. These could be important parts of the app
                        and we still wanted parents to be able to find them, and we thought by having the 'More Options' text and the bottom arrow, parents would still be able to find these options.
                        But we thought the best way to achieve our stakeholder's goals was by having the only information on the home screen be the most important parts of the app to the business,
                        so parents would not be distracted by other parts of the app.
                        This is why we included the reminder for the parents to pick up or drop off their child in the biggest and boldest font. We also included important information for parents,
                        such as reminders and location. And one of the most important things to RCN was parents reporting a change of plans, so we included a button for that functionality in a place
                        that would easily be found and accessed by parents. If it is easier for parents to find and complete this action, it would be more likely that they would complete it.
                    </p>

                </div>

                <div className="section">
                    <h1>
                        Second Challenge
                    </h1>
                    <p className="mini-heading">
                        How do we make the app quickly identifiable on the parents' home screen?
                    </p>
                    <img src={widget} alt="rcn" width="100%" className="mx-auto mt-7 mb-7"/>
                    <p>
                        We allow parents to choose to make the app icon to be a picture of their child.
                        We also encourage parents to make a widget for this app, so it takes up a larger part of the
                        home screen, and so it's easier to find.
                    </p>
                </div>
                <div className="section">
                    <h1>
                        Next Directions
                    </h1>
                    <p>It would be ideal to set up a usability test on our current parent side of the app. We also started designing a school side of the app.</p>
                    <div className="figma-link mx-auto link-div">
                        <a href="https://www.figma.com/proto/svDdzXKIth37iXbnoy2NFr/Rochester-Childfirst-Network-App?node-id=205%3A3048&starting-point-node-id=205%3A3048&scaling=scale-down&show-proto-sidebar=1">Figma Prototype link</a>
                    </div>
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
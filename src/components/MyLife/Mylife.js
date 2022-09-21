import React from "react";
import './mylife.css';
import Footer from '../Footer/Footer.js';
import mylife from '../../img/mylife_overview.png';
import empathy from '../../img/empathy_map.png';
import newflow from '../../img/new_flow.png';
import oldflow from '../../img/old_flow.png';
import Navigation from '../navigation/Navigation'

export default function Mylife() {

    var x1 = "There was confusion when users were trying edit the meal plan (after they already selected it once). Users did not know where to go to edit meal plan. Some users went to the modify or cancel section (not realizing this was only for housing).";
    var arrow = " -> ";
    var y1 = "We would like to improve the housing and dining application process by separating the housing process from the meal plan process to elimate confusion. The subsections for housing would be under housing, and all the meal plan subsections would be grouped as well. This would make the process to change and edit less confusing. When the user is first filling out the application, the button will say ‘start’ and then when they are finished, this button will be ‘edit’ so it is clear that they are able to go back and edit.";

    return (
        <div>
            <Navigation />

            <div className="mx-auto main">
            <p className="text-center text-4xl font-bold text-orange-400 mt-3 mb-8">MyLife Redesign</p>
            <img src={mylife} alt="rcn" width="100%" className="mx-auto mb-10"/>
                <div className="section">
                    <h1>
                        Background
                    </h1>
                    <p>
                        For a class project, I worked in a group of three, in order to "tackle a design problem."
                        My group wanted to find a problem with a doable scope and a meaningful impact. We decided to redesign
                        the myLife website, which is an RIT website that handles a variety of aspects of student life. One of
                        the main uses of the website is for students to fill out the housing and dining application, which is how
                        students apply for housing on campus, as well as a meal plan. It also has some other uses, such as submitting
                        maintenance requests, filling out forms, and completing job applications.
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
                        First Steps
                    </h1>
                    <p>
                        In order to gain insight into problems with the current RIT website, as well as possible opportunities
                        to improve the experience, we had informal interviews with RIT students who had utilized the website.
                        These interviews helped us understand the goals of the user, as well as pain points in the current user experience.
                    </p>
                    <p className="mini-heading"> Findings </p>
                    <ul className="list-disc list-outside">
                        <li>The students goals are to easily and quickly use the myLife website in order to complete many different actions, including completing housing applications, dining applications, receiving messages, and submitting maintenance requests. And for incoming students, their goals include easily learning to use and understand how to use the website without any and much experience with something similar because they have to use it before coming to RIT and will have many other applications and websites to figure out as well.</li>
                        <li>The students worries include ensuring that they enter all the correct information and that they complete the correct actions, so that they will be able to achieve their goal for using the website. An example would be filling out the correct roommate and building information for housing applications. However, myLife often does not provide correct feedback for students’ submissions and students are worried that they have not completed the correct actions. </li>
                        <li>Talking to students revealed some changes needed to be made. One is an easier way to login. Logging in is not as simple a task as it should be because it takes the user too many unnecessary clicks and through too many unnecessary screens. A simpler, more understandable navigation was another idea because students often got annoyed trying to get back to the homepage. Another important change that was needed is some sort of feedback for various actions. An example that multiple students had struggled with was attempting to submit a roommate request, but the students never received confirmation that the request was submitted, so they ended up submitting multiple times, which ended up confusing both the students, as well as housing.</li>
                    </ul>
                    <p className="mini-heading"> Empathy Map </p>
                    <p>
                        We created an empathy map based to organize and understand user's responses.
                    </p>
                    <img src={empathy} alt="rcn" width="50%" className="mx-auto mt-3 mb-10"/>
                    <p className="mini-heading"> Heuristic Evaluation </p>
                    <p>
                        We conducted a heuristic evaluation of the current website, in order to identify other pain points and areas of improvement.
                        Some of findings matched with critiques from our student interviews
                    </p>
                    <p className="mini-heading">Issues with navigation:</p>
                    <ul className="list-disc list-outside">
                        <li>No global navigation, you can only get to main pages from home</li>
                        <li>The home button is inconsistant and unclear, some pages have one, others do not</li>
                        <li>Entire header takes you home, which is unclear at first, and creates room for accidental errors and clicks</li>
                        <li>Clicking your name takes you to a “page not found” and a link to click to return home</li>
                        <li>There is an odd grouping of information for each page</li>
                        <li>Unnecessary steps to login, there is a blank page at first, have to click “login” twice</li>
                    </ul>
                    <p className="mini-heading">Issues with layout:</p>
                    <ul className="list-disc list-outside">
                        <li>There is ineffective spacing between things</li>
                        <li>There is lots of open space, items could be redistributed for clarity</li>
                        <li>Text in buttons is hard to read, it is small and in poor resolution</li>
                    </ul>
                    <p className="mini-heading">Other issues:</p>
                    <ul className="list-disc list-outside">
                        <li>Poor user confirmation - more  feedback on actions with form submission</li>
                        <li>Lack of clarity in instructions and actions</li>
                    </ul>

                </div>
                <div className="section">
                    <h1>
                        Problem Statements
                    </h1>
                    <p> We took the issues we found and made some concrete problem statements that we would ideate on how to improve in our prototypes. </p>
                    <div className="mt-4 mb-4">
                        <ol>
                            <li>
                                RIT students have to use the myLife website for a lot of different parts of student life and there are a lot of different elements on the website.
                                Students spend a long time trying to navigate around the website because the navigation is inconsistant and confusing. This is a problem because it may prevent
                                students from filling out their applications correctly or not at all, which could cause problems for both the student and the university.
                            </li>
                            {/* <li>
                                Many of the web pages have a poor layout. Ther
                            </li> */}
                            <li className="font-bold">
                                The housing and dining application is inconsistant and confusing for users. Many users struggle with navigating and filling out certain areas
                                of this application. This housing and dining application is a major part of the website and an important aspect of student life.
                            </li>
                        </ol>
                    </div>
                    <p>From our informal interviews, we found that using myLife for housing and dining applications was the most common usage of the website, and there were many pain points in this process, so we chose to focus strongly on this.</p>
                </div>
                <div className="section">
                    <h1>
                        Lo-fi Prototype
                    </h1>
                    <p>
                        We started by sketching out ideas and discussing ideas between us. We realized the user flow for the housing and dining application needed to be changed,
                        and so that was the first thing we focused on.
                    </p>
                    <p className="mini-heading">Old User Flow</p>
                    <img src={oldflow} alt="rcn" width="100%" className="mx-auto mb-10"/>
                    <p className="mini-heading">New User Flow</p>
                    <img src={newflow} alt="rcn" width="100%" className="mx-auto mb-10"/>
                    {/* <p> Our new user flow changed blah blah blah.</p> */}
                    <p className="mt-4">For our lo-fi prototype, we didn't use color or typography. We didn't use any transitions either, but instead used arrows to explain relationships between screens.</p>
                    <div className="figma-link mx-auto link-div">
                        <a href="https://www.figma.com/file/HlYKqKjuSkH1MM4Rj6noa8/Homework-2?node-id=0%3A1">Lo-fi prototype Figma link</a>
                    </div>

                </div>
                <div className="section">
                    <h1>
                        First Usability Test
                    </h1>
                    <p className="mini-heading">
                        Procedure
                    </p>
                    <p>
                        We met with participants in person and had them walk through certain tasks. We also had them speak aloud
                        their process and their thoughts, as they were trying to complete the tasks. We based the tasks on the information
                        we gained from the informal interviews about the most common uses of the website. We used a welcome script, in order
                        to ensure that we stayed consistent with our explanation and wording for all participants. In order to gain additional feedback,
                        we also had participants fill out a short survey with questions based on heuristics.
                    </p>
                    <p className="mini-heading"> Welcome Script</p>
                    <p>We are looking to test our prototype for the RIT myLife website to see if it works as we planned it. We want to make it known that you can’t make any mistakes or do anything wrong. We are doing this to test our design. And we also really appreciate your honest feedback on our design. So don’t worry about criticizing it or worry that you will hurt our feelings, we just want your honest reaction. If you have any questions, feel free to ask them, although we may not want to answer at the time since we want to pretend as if you are trying to use this on your own. Feel free to ask any questions at the end as well. We are going to ask you to complete some tasks and we would appreciate if you would talk your way through the interactions and explain your thinking. After we complete the tasks, we are just going to ask you to fill out a quick survey about the prototype.</p>
                    <p className="mini-heading"> Tasks </p>
                    <div>
                        <ol>
                            <li>You are an RIT Student and you need to log in and set up a housing and meal plan for the next school year.</li>
                            <li>Submit a maintenance request for your bedroom.</li>
                            <li>Go back and change the meal plan that you selected for next year.</li>
                            <li>Find the roommate agreement.</li>
                        </ol>
                    </div>
                    <p className="mini-heading">Survey</p>
                    <p>We had participants fill out a short survey that had questions based on heuristics. These questions used a 7-point Likert scale for answers. There is also one long response question for participants to give any additional feedback.</p>
                    <div className="mt-4 mb-4">
                        <ol>
                            <li>How would you rate the ability to navigate through the website and understand what you are doing?</li>
                            <li>How familiar is the wording/phrasing used on the website?</li>
                            <li>Overall, how easy was the website to use?</li>
                            <li>How consistent is the layout and structure throughout the website?</li>
                            <li>How common was it for you to make errors when you used the website? (Examples - clicking the wrong button for what you wanted to do, navigating to the wrong page, etc.)</li>
                            <li>How would you rate the ability to find the information you need for each screen (for example - is it on the same page or do you have to go searching for it)?</li>
                            <li>How would you rate the relevance of the features / content on the website? (In other words - is everything on the screen relevant to the purpose of the app or are there unnecessary features)</li>
                            <li>Do you have any additional comments about the website design? (Especially anything about navigation or layout)</li>
                        </ol>
                    </div>
                    <p className="mini-heading">Findings and Changes</p>
                    <div>
                        <ol>
                            <li>{x1}<span className="arrow font-bold">{arrow}</span>{y1} </li>
                            {/* <li>Users were also confused if they had to click submit again after editing the application or if they could just hit save and continue (some went through and hit submit again and some did not).</li> */}
                            <li>One user (who had never filled out a housing application before) was at first confused about filling out the application and skipped to the room preference section thinking that might be all that needed to be completed, but they eventually figured out that they had to go through all of the sections to complete the application.<span className="arrow font-bold">{arrow}</span>We would also like to add more instruction before completing the application for first time users, so they do not get confused.</li>
                            <li>It is unclear if they can jump from section to section on the housing application when they go back to edit. One user went through all of the pages (and clicked save and continue each time) in order to get back to the meal plan, and they noted in the last question of the google form that “The only thing that was a little difficult was getting to the meal plan from the housing and dining tab, it took a lot of clicks.”<span className="font-bold">{arrow}</span>It should also be made more clear that users can click on the left links when going back to edit their housing application (so they don’t have to navigate through all the pages again if they want to go to a certain section). The first time they fill out these sections, this would be blocked, so they cannot jump forward (to prevent first time users from making mistakes and ensure that the user knows they have to complete all the sections on the application).</li>
                            <li>Some users wanted feedback at the end of the housing and dining application for confirmation. One user said, “Everything is finished, so there’d be a page that says thank you for filling it out right?”<span className="arrow font-bold">{arrow}</span>It would also be helpful to add a feedback page after they submit the housing and dining application to thank them for submitting, so that they know they have submitted it correctly, and maybe add links to follow up forms (such as the roommate agreement form), so these can more easily be found. There should also be feedback for other actions, such as editing the meal plan, so that users know they have been successful (and know that they don’t have to go through and submit the application again).</li>
                            <li>Users were also confused on what the meal plan options meant (stripes, tiger, claws, etc). For example, when one user was deciding which meal plan to pick they said, “I don’t know I don’t have a meal plan.”<span className="arrow font-bold">{arrow}</span>The specific meal plan options link should be more clear, so that users know they can find more information on each plan or there should be an explanation on what each meal plan option entails added directly on the page in order to help the user.</li>

                        </ol>
                    </div>
                </div>
                <div className="section">
                    <h1>
                        Hi-fi Prototype
                    </h1>
                    <p>We implemented the changes from the first usability test results. And we added color, typography, and transitions between pages.</p>
                    <div className="figma-link mx-auto link-div">
                        <a href="https://www.figma.com/proto/rzILLYdQGzcSFDDgBNa0kf/Hi-Fi-Prototype?node-id=6%3A1767&scaling=scale-down&page-id=2%3A47&starting-point-node-id=6%3A1767&show-proto-sidebar=1">Hi-fi prototype Figma link</a>
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
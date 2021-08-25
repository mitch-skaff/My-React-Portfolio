import React from 'react';

import "./About.css";


export default function About() {
    return (
        <div className="container-fluid about">
            <div><br /><br /></div>
            <h1 className="heading">Bio</h1>

            <div class="row align-items-start">
                <div class="col">

                </div>
                {/* add image here */}
                <div class="col">
                    <img src="" alt="self" className="img-responsive" height="300px" />
                </div>
                <div class="col">
                </div>
            </div>

            <p className="text-centered">Born and raised in Jacksonville, Fl. Graduated from The University of Florida with
                a bachelors in Economics. Shortly after graduating I began my career at a FinTech company, SS&C
                Technologies,
                where I was a portfolio/data analyst. In this role I began to work deeply with our Custom Engineering
                team and became fascinated with the endless possibilities! After soon realizing this was the field for
                me, I enrolled in the UCF Coding Bootcamp in early 2021 and began my engineering career. Below you will
                see several of the key projects I have
                worked on to this point.
            </p>
            <p className="text-centered">On a more personal note, some of my favorite hobbies include playing sports,
                lifting weights, traveling, and finding good food! I'm also a highly motivated individual
                who is consistently looking to not only progress my career but to also learn as much as possible along
                the way.
            </p>


            <div><br /><hl /><br /></div>

            <h1 className="heading">Skills <i className="fa fa-code"></i></h1>
            <ul class="twocolumns">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>jQuery</li>
                <li>MySQL2</li>
                <li>NoSQL</li>
                <li>MongoDB</li>
                <li>React</li>
                <li>Express.js</li>
                <li>Node.js</li>
            </ul>

            <div><br /><br /><br /><br /><br /><br /><br /><br /></div>
        </div>
    );
}
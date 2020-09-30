import React from 'react';


import ProfilePicture from './ProfilePicture/ProfilePicture';
import Toolbar from '../Layout/Toolbar/Toolbar';

import './AboutLayout.css';



var description1 = "Hi, I'm Cody Hancock."

var description2 = "I'm a Front-End React Developer";

var subDescription1 = 'I began my career as a Biochemist. After a few years in research and clinical labs, I learned that the lab life wasn\'t for me.';

var subDescription2 = 'I continued to work full time in a clinical chemistry lab when I returned to school in January, 2019. A year and eight months later, I finished my second bachelor\'s in Computer Science. '

var subDescription3 = 'Beyond the CS coursework, I taught myself how to use industry-relevant technologies on the side such as HTML, CSS, JavaScript, React, and more.'


function AboutLayout() {
    return (
        <div className={'about-layout'}>
            <Toolbar />
            <h1 className={'about'}>About</h1>
            <div className={'about-content'}>
                <ProfilePicture className={'p-pic'}/>
                <div className={'about-bio'}>
                    <div className={'title'}>
                        <p>{description1}</p>
                        <p>{description2}</p>
                    </div>
                    <div className={'subheadings'}>
                        <p>{subDescription1}</p>
                        <p>{subDescription2}</p>
                        <p>{subDescription3}</p>
                        <div className={'spacer'}></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutLayout;
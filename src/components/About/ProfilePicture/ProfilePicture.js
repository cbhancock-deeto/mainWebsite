import React from 'react';

import myImage from '../../../assets/images/profilepic.jpg';
import './ProfilePicture.css';

const ProfilePicture = (props) => (
    <div className={'pic-container'}>
        <img className={'profile-pic'} src={myImage} alt="Profile Image"/>
    </div>
);

export default ProfilePicture;
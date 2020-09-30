import React from 'react';
import './SocialMedia.css';

function SocialMedia() {
    return (
        
        <h1 className={"social-icons"}>
            
            <a className={'sm-icon'} href="https://github.com/cbhancock-deeto"><i className="individual-icon fab fa-github"></i></a>
            
            <a className={'sm-icon'} href="https://twitter.com/CodyHan72291441"><i className="individual-icon fab fa-twitter" ></i></a>
            <a className={'sm-icon'} href="https://linkedin.com/in/cody-hancock-ab0110181"><i className="individual-icon fab fa-linkedin-in" ></i></a>
        </h1>
    )
}

export default SocialMedia;
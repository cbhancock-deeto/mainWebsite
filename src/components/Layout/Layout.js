import React from 'react';
import Toolbar from './Toolbar/Toolbar';
import SocialMedia from './SocialMedia/SocialMedia';
import WebsiteFront from './WebsiteFront/WebsiteFront';
import './Layout.css';

function Layout() {
    return (
        <div className = {'Layout'}>
            <Toolbar />
            <WebsiteFront />
            <SocialMedia />
        </div>
    )
}


export default Layout;
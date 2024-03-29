//FirstPage.js

import React from "react";
import { Link } from 'react-router-dom';
import "./css/FirstPage.css";
import logo from './images/Pi-t.png'
import SignUpButton from './images/SignUpButton.png'
import LoginButton from './images/LoginButton.png'
import main from "./videos/main_background.mp4";

const FirstPage = () => {
    return (
        <body class='FirstPage_body'>
        <div className="img">
            <img className="logo" src={logo} />
        </div>

        <Link to="/login">
            <img className="LoginButton" src={LoginButton} />
        </Link>

        <Link to="/register">
            <img className="SignUpButton" src={SignUpButton} />
        </Link>

        <div className='video-container'>
            <video className="background-video"
                   muted={true}
                   autoPlay={true}
                   loop={true}
                   controls={false}
                   playsInline={true}>
                <source src={main} type="video/mp4" />
            </video>
        </div>
        </body>

    );
};

export default FirstPage;
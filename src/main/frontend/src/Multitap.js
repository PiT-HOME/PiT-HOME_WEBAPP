import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./css/IotDevice.css"
import Menu from './Menu';
import on_1 from './images/on_1.png'
import on_2 from './images/on_2.png'
import off_1 from './images/off_1.png'
import off_2 from './images/off_2.png'
import star from './videos/star_background.mp4'

function MultiTap() {
    const [isOn, setIsOn] = useState(true);

    const handleOn = async () => {
        setIsOn(true);
        try {
            const response = await axios.post('http://43.203.124.111:8080/powerbar/on');
            console.log(response.data); // 필요에 따라 사용
        } catch (error) {
            console.error(error);
        }
        };

    const handleOff = async () => {
        setIsOn(false);
        try {
            const response = await axios.post('http://43.203.124.111:8080/powerbar/off');
            console.log(response.data); // 필요에 따라 사용.
        } catch (error) {
            console.error(error);
        }
        };

    return (
        <body>
        <div className='container'>
            <Menu />
            <div className='video-container'>
                <video className="background-video"
                       muted={true}
                       autoPlay={true}
                       loop={true}
                       controls={false}
                       playsInline={true}>
                    <source src={star} type="video/mp4" />
                </video>
            </div>

            <div className='image_grid_onoff'>
                <img className='on' src={isOn ? on_1 : on_2} alt="" onClick={handleOn} />
                <img className='off' src={isOn ? off_2 : off_1} alt="" onClick={handleOff} />
            </div>
        </div>
        </body>
    );
}

export default MultiTap;
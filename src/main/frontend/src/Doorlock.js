import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./css/IotDevice.css"
import Menu from './Menu';
import  open_1 from './images/open_1.png'
import  open_2 from './images/open_2.png'
import  close_1 from './images/close_1.png'
import  close_2 from './images/close_2.png'

import star from './videos/star_background.mp4'

function Doorlock() {
    const [isOn, setIsOn] = useState(true);


    const handleOpen = async () => {
        setIsOn(true);
        try {
            const response = await axios.post('http://43.203.124.111:8080/door/open'); //백엔드에서 제공하는 실제 주소로 대체
            console.log(response.data); // 필요에 따라 응답 데이터 사용
        } catch (error) {
            console.error(error);
        }
    };

    const handleClose = async () => {
        setIsOn(false);
        try {
            const response = await axios.post('http://43.203.124.111:8080/door/close');
            console.log(response.data); // 필요에 따라 사용
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
                <img className='device_button' src={isOn ? open_1 : open_2} alt="" onClick={handleOpen} />
                <img className='device_button' src={isOn ? close_2 : close_1} alt="" onClick={handleClose} />
            </div>

            <div className='image_grid_onoff'>

            </div>
        </div>
        </body>
    );
}

export default Doorlock;
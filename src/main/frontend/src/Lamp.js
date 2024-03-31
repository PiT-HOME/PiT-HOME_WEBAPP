import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./css/Iot.css"
import "./css/IotDevice.css"
import Menu from './Menu';
import  livingOn1 from './images/거실on_1.png'
import  livingOn2 from './images/거실on_2.png'
import  livingOff1 from './images/거실off_1.png'
import  livingOff2 from './images/거실off_2.png'
import  roomOn1 from './images/안방on_1.png'
import  roomOn2 from './images/안방on_2.png'
import  roomOff1 from './images/안방off_1.png'
import  roomOff2 from './images/안방off_2.png'
import star from './videos/star_background.mp4'

function Lamp() {

    const [isOn, setIsOn] = useState(true);
    const [isOn2, setIsOn2] = useState(true);

    const handleOn = async () => {
        setIsOn(true);
        try {
            const response = await axios.post('http://127.0.0.1:8080/led/on');
            console.log(response.data); // 필요에 따라 사용
        } catch (error) {
            console.error(error);
        }
    };

    const handleOff = async () => {
        setIsOn(false);
        try {
            const response = await axios.post('http://127.0.0.1:8080/led/off');
            console.log(response.data); // 필요에 따라 사용
        } catch (error) {
            console.error(error);
        }
    };


    const handleOn2 = async () => {
        setIsOn2(true);
        try {
            const response = await axios.post('http://127.0.0.1:8080/led/on');
            console.log(response.data); // 필요에 따라 사용
        } catch (error) {
            console.error(error);
        }
    };

    const handleOff2 = async () => {
        setIsOn2(false);
        try {
            const response = await axios.post('http://127.0.0.1:8080/led/off');
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

            <div className='image_grid_lamp'>
                <div className='image_grid_livingroom'>
                    <img className='LivingRoom' src={isOn2 ? livingOn1 : livingOn2} alt="" onClick={handleOn2} />
                    <img className='LivingRoom' src={isOn2 ? livingOff2 : livingOff1} alt="" onClick={handleOff2} />
                </div>
                <div className='image_grid_bedroom'>
                    <img className='BedRoom' src={isOn ? roomOn1 : roomOn2} alt="" onClick={handleOn} />
                    <img className='BedRoom' src={isOn ? roomOff2 : roomOff1} alt="" onClick={handleOff} />
                </div>
            </div>
        </div>

        </body>
    );
}

export default Lamp;
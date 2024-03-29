import React from 'react';
import { Link } from 'react-router-dom';
import "./css/Iot.css"
import Menu from './Menu';
import camera from './images/camera.png'
import multitab from './images/multitab.png'
import key from './images/key.png'
import light from './images/light.png'

function Iot() {
    return (
        <body class="Main_body">
        <div>

            <div>
                <Menu />
            </div>

            <div className='image_grid'>
                <Link to="/Camera">
                    <img className="Iot_item" src={camera} />
                    <h3 className='Link_style'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;카메라</h3>
                </Link>
                <Link to="/MultiTap">
                    <img className="Iot_item" src={multitab} />
                    <h3 className='Link_style'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;멀티탭</h3>
                </Link>
                <Link to="/DoorLock">
                    <img className="Iot_item" src={key} />
                    <h3 className='Link_style'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;도어락</h3>
                </Link><Link to="/Lamp">
                <img className="Iot_item" src={light} />
                <h3 className='Link_style'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LED 전등</h3>
            </Link>
            </div>


        </div>
        </body>

    );
}

export default Iot;
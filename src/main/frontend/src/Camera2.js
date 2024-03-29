import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CameraStream from './CameraStream'; //스트리밍 컴포넌트 import 

function Camera2() {
    const [isCamera2On, setCamera2On] = useState(false); // 두 번째 카메라 상태 

    const handleOn2 = async () => {
        try {
            const response = await axios.post('백엔드 두 번째 카메라 켜기 API 주소');
            console.log(response.data); // 필요에 따라 사용
            setCamera2On(true); // 두 번째 카메라 켜기 성공 시 isCameraOn 상태를 true로 변경
        } catch (error) {
            console.error(error);
        }
    };

    const handleOff2 = async () => {
        try {
            const response = await axios.post('백엔드 두 번째 카메라 끄기 API 주소');
            console.log(response.data); // 필요에 따라 사용
            setCamera2On(false); // 두 번째 카메라 끄기 성공 시 isCameraOn 상태를 false로 변경
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div>
            <h1>카메라2</h1>


                <button onClick={handleOn2}>Camera 2 ON</button>
                <button onClick={handleOff2}>Camera 2 OFF</button>
                {isCamera2On && <CameraStream />}

            {/*isCameraOn 상태가 true일 때 CameraStream 컴포넌트를 렌더링*/}

        </div>
    );
}

export default Camera2;
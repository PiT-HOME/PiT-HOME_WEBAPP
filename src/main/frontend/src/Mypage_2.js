import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import axios from 'axios';


function Mypage_2() {
    const [devices, setDevices] = useState([]);
    const [newDevice, setNewDevice] = useState('');
    const [selectedDevice, setSelectedDevice] = useState('');

    //useEffect(() => {
    //const fetchDevices = async () => {
    //    const response = await axios.get('/devices');
    //    setDevices(response.data);
    //  };

    //fetchDevices();
    //}, []);

    const handleAddDevice = async () => {
        //if (newDevice) {
        //const response = await axios.post('/devices/add', { name: newDevice });
        //if (response.status === 200) {
        setDevices([...devices, newDevice]);
        setNewDevice('');
        //    }
    }


    const handleDeleteDevice = async () => {
        //const response = await axios.post('/devices/delete', { name: selectedDevice });
        //if (response.status === 200) {
        setDevices(devices.filter(device => device !== selectedDevice));
        setSelectedDevice('');
        //}
    }

    return (
        <div>
            <h1>환경설정</h1>
            <input
                type="text"
                placeholder='새 기기 입력'
                value={newDevice}
                onChange={(e) => setNewDevice(e.target.value)}
            />
            <button onClick={handleAddDevice}>기기 추가</button>
            <p></p>

            <select
                value={selectedDevice}
                onChange={(e) => setSelectedDevice(e.target.value)}
            >
                <option value="">기기 선택</option>
                {devices.map((device, index) => (
                    <option key={index} value={device}>
                        {device}
                    </option>
                ))}
            </select>
            <button onClick={handleDeleteDevice}>기기 삭제</button>

            <h2>현재 기기 목록</h2>
            <ul>
                {devices.map((device, index) => (
                    <li key={index}>{device}</li>
                ))}
            </ul>

            {/*<Link to="/Mypage">
                <button>IoT 기기 추가</button>
            </Link>
            
            <Link to="/Iot">
                <button>IoT 기기 삭제</button>
        </Link>   */}

        </div>
    );
}

export default Mypage_2;
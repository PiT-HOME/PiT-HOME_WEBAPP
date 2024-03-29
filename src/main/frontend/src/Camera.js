// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import CameraStream from './CameraStream'; //스트리밍 컴포넌트 import
//
// function Camera() {
//     const [isCamera1On, setCamera1On] = useState(false); // 첫 번째 카메라 상태
//
//     const handleOn1 = async () => {
//         try {
//             const response = await axios.post('백엔드 첫 번째 카메라 켜기 API 주소');
//             console.log(response.data); // 필요에 따라 사용
//             setCamera1On(true); // 첫 번째 카메라 켜기 성공 시 isCameraOn 상태를 true로 변경
//         } catch (error) {
//             console.error(error);
//         }
//     };
//
//     const handleOff1 = async () => {
//         try {
//             const response = await axios.post('백엔드 첫 번째 카메라 끄기 API 주소');
//             console.log(response.data); // 필요에 따라 사용
//             setCamera1On(false); // 첫 번째 카메라 끄기 성공 시 isCameraOn 상태를 false로 변경
//         } catch (error) {
//             console.error(error);
//         }
//     };
//
//     return (
//         <div>
//             <h1>카메라</h1>
//
//             <button onClick={handleOn1}>Camera 1 ON</button>
//             <button onClick={handleOff1}>Camera 1 OFF</button>
//             {isCamera1On && <CameraStream />}
//
//             {/*isCameraOn 상태가 true일 때 CameraStream 컴포넌트를 렌더링*/}
//
//         </div>
//     );
// }
//
// export default Camera;
//
//
//camera.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import "./css/IotDevice.css"
// import Menu from './Menu';
// import  on_1 from './images/on_1.png'
// import  on_2 from './images/on_2.png'
// import  off_1 from './images/off_1.png'
// import  off_2 from './images/off_2.png'
// import star from './videos/star_background.mp4'
//
// function Camera() {
//     const [isOn, setIsOn] = useState(true);
//
//     const handleOn = () => {
//         setIsOn(true);
//     };
//
//     const handleOff = () => {
//         setIsOn(false);
//     };
//
//     return (
//         <body>
//         <div className='container'>
//             <Menu />
//
//
//
//             <div className='home_camera'>
//                 <div className='video-container'>
//                     <video className="background-video"
//                            muted={true}
//                            autoPlay={true}
//                            loop={true}
//                            controls={false}
//                            playsInline={true}>
//                         <source src={star} type="video/mp4" />
//                     </video>
//                 </div>
//                 <div className='video_home'></div>
//
//                 <div className='image_grid_camera_onoff'>
//                     <img className='camera_on' src={isOn ? on_1 : on_2} alt="" onClick={handleOn} />
//                     <img className='camera_off' src={isOn ? off_2 : off_1} alt="" onClick={handleOff} />
//                 </div>
//             </div>
//
//         </div>
//         </body>
//     );
// }
//
// export default Camera;



// Camera.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import CameraStream from './CameraStream'; // 스트리밍 컴포넌트 import
//
// function Camera() {
//     const [isCamera1On, setCamera1On] = useState(false); // 첫 번째 카메라 상태
//
//     const handleOn1 = async () => {
//         try {
//             const response = await axios.post('백엔드 첫 번째 카메라 켜기 API 주소');
//             console.log(response.data); // 필요에 따라 사용
//             setCamera1On(true); // 첫 번째 카메라 켜기 성공 시 isCameraOn 상태를 true로 변경
//         } catch (error) {
//             console.error(error);
//         }
//     };
//
//     const handleOff1 = async () => {
//         try {
//             const response = await axios.post('백엔드 첫 번째 카메라 끄기 API 주소');
//             console.log(response.data); // 필요에 따라 사용
//             setCamera1On(false); // 첫 번째 카메라 끄기 성공 시 isCameraOn 상태를 false로 변경
//         } catch (error) {
//             console.error(error);
//         }
//     };
//
//     return (
//         <div>
//             <h1>카메라</h1>
//
//             <button onClick={handleOn1}>Camera 1 ON</button>
//             <button onClick={handleOff1}>Camera 1 OFF</button>
//             {isCamera1On && <CameraStream />}
//         </div>
//     );
// }
//
// export default Camera;


// // Camera.js
// import React, { useState, useEffect } from 'react';
// import ReactPlayer from 'react-player';
// import axios from 'axios';
//
// function Camera() {
//     const [videoFiles, setVideoFiles] = useState([]);
//     const [selectedVideo, setSelectedVideo] = useState(null);
//
//     useEffect(() => {
//         // Azure Storage에서 비디오 파일 목록을 가져오는 API 호출
//         fetch('/videos') // 이 경로는 실제 API 엔드포인트로 수정해야 합니다.
//             .then(response => response.json())
//             .then(data => setVideoFiles(data))
//             .catch(error => console.error('Error fetching video files:', error));
//     }, []);
//
//     const handleVideoClick = (video) => {
//         setSelectedVideo(video);
//     };
//
//     return (
//         <div>
//             <h1>카메라</h1>
//
//             {videoFiles.map((video, index) => (
//                 <div key={index} onClick={() => handleVideoClick(video)}>
//                     <h3>Video {index + 1}</h3>
//                 </div>
//             ))}
//
//             {selectedVideo && (
//                 <div>
//                     <h3>Selected Video</h3>
//                     <ReactPlayer
//                         url="https://kdjpistorage.blob.core.windows.net/kdj-video/2023-11-28-10:15:04.avi" // Azure Storage에서 얻은 비디오 URL
//                         controls
//                         width="640px"
//                         height="360px"
//                     />
//                 </div>
//             )}
//         </div>
//     );
// }
//
// export default Camera;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import "./css/IotDevice.css"
// import Menu from './Menu';
// import  on_1 from './images/on_1.png'
// import  on_2 from './images/on_2.png'
// import  off_1 from './images/off_1.png'
// import  off_2 from './images/off_2.png'
// import star from './videos/star_background.mp4'
//
// function Camera() {
//     const [isOn, setIsOn] = useState(true);
//
//     const handleOn = () => {
//         setIsOn(true);
//     };
//
//     const handleOff = () => {
//         setIsOn(false);
//     };
//
//     return (
//         <body>
//         <div className='container'>
//             <Menu />
//
//
//
//             <div className='home_camera'>
//                 <div className='video-container'>
//                     <video className="background-video"
//                            muted={true}
//                            autoPlay={true}
//                            loop={true}
//                            controls={false}
//                            playsInline={true}>
//                         <source src={star} type="video/mp4" />
//                     </video>
//                 </div>
//                 <div className='video_home'></div>
//
//                 <div className='image_grid_camera_onoff'>
//                     <img className='camera_on' src={isOn ? on_1 : on_2} alt="" onClick={handleOn} />
//                     <img className='camera_off' src={isOn ? off_2 : off_1} alt="" onClick={handleOff} />
//                 </div>
//             </div>
//
//         </div>
//         </body>
//     );
// }
//
// export default Camera;




import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./css/IotDevice.css";
import Menu from './Menu';
import on_1 from './images/on_1.png';
import on_2 from './images/on_2.png';
import off_1 from './images/off_1.png';
import off_2 from './images/off_2.png';
import star from './videos/star_background.mp4';

function Camera() {
    const [isOn, setIsOn] = useState(true);

    const handleOn = () => {
        setIsOn(true);
    };

    const handleOff = () => {
        setIsOn(false);
    };

    useEffect(() => {
        const videoPlayer = document.getElementById('videoPlayer');
        if (isOn) {
            setTimeout(() => {
                const blobUrl = 'https://kdjpistorage.blob.core.windows.net/kdj-video/2023-12-01-073605.mp4';
                playVideo(videoPlayer, blobUrl);
            }, 0);
        } else {
        }
    }, [isOn]);

    const playVideo = (player, blobUrl) => {
        player.src = blobUrl;
        player.play();
    };

    return (
        <body>
        <div className='container'>
            <Menu />
            <div className='home_camera'>
                <div className='video-container'>
                    <video
                        className="background-video"
                        muted={true}
                        autoPlay={true}
                        loop={true}
                        controls={false}
                        playsInline={true}
                    >
                        <source src={star} type="video/mp4" />
                    </video>
                </div>
                <div className='video_home'>
                    <div className="video-box">
                        <video id="videoPlayer" controls></video>
                    </div>
                </div>

                <div className='image_grid_camera_onoff'>
                    <img
                        className='camera_on'
                        src={isOn ? on_1 : on_2}
                        alt=""
                        onClick={handleOn}
                    />
                    <img
                        className='camera_off'
                        src={isOn ? off_2 : off_1}
                        alt=""
                        onClick={handleOff}
                    />
                </div>
            </div>
        </div>
        </body>
    );
}

export default Camera;

// VideoPlayer.js
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

function VideoPlayer() {
    const [videoFiles, setVideoFiles] = useState([]);

    useEffect(() => {
        // Azure Storage에서 비디오 파일 목록을 가져오는 API 호출
        fetch('/videos') // 이 경로는 실제 API 엔드포인트로 수정해야 합니다.
            .then(response => response.json())
            .then(data => setVideoFiles(data))
            .catch(error => console.error('Error fetching video files:', error));
    }, []);

    return (
        <div>
            <h1>Video Player</h1>
            <div>
                {videoFiles.map((video, index) => (
                    <div key={index}>
                        <h3>Video {index + 1}</h3>
                        <ReactPlayer
                            url= "https://kdjpistorage.blob.core.windows.net/kdj-video/2023-11-28-07:36:22.avi" // Azure Storage에서 얻은 비디오 URL
                            controls
                            width="640px"
                            height="360px"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default VideoPlayer;

import React, { useRef, useEffect } from 'react';

function CameraStream() {
    const videoRef = useRef(null); // useRef Hook을 이용하여 videoRef를 생성하고 초기값을 null로 설정, 이 ref는 비디오 요소에 직접 접근하는 데 사용

    useEffect(() => {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {   //브라우저가 미디어 장치에 접근하고 사용자의 미디어를 가져오는 기능을 지원하는지 확인
            navigator.mediaDevices.getUserMedia({ video: true })    //비디오 미디어를 가져옴
                .then(stream => {    //비디오 미디어를 성공적으로 가져왔을 때 실행될 코드를 정의
                    let video = videoRef.current;    //videoRef를 이용하여 비디오 요소에 접근
                    video.srcObject = stream;   //비디오 요소의 srcObject에 미디어 스트림을 설정하여 비디오 요소가 스트림을 표시하게 함.
                    video.play();    //비디오 재생
                })
                .catch((err) => {    //미디어를 가져오는 데 실패했을 때 실행될 코드를 정의
                    console.log(err);    //오류를 콘솔에 출력
                });
        }
    }, [videoRef]);    //videoRef가 변경될 때마다 useEffect 안의 코드를 다시 실행

    return (
        <div>
            <video ref={videoRef} width="640" height="480" />
            {/* videoRef를 사용하여 React가 이 비디오 요소에 접근할 수 있게 함. 비디오의 너비와 높이를 설정 */}
        </div>
    );
}

export default CameraStream;
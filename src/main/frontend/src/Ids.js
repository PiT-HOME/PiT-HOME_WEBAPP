// import React from 'react';
// import { Link } from 'react-router-dom';
// import Menu from './Menu';
//
// function Mypage() {
//     return (
//         <body class="Main_body">
//         <div>
//             <div>
//                 <Menu />
//             </div>
//
//             <h1 style={
//                 {textAlign: 'center',
//                     height: '500px', /* 부모 요소의 높이에 맞게 조정 */
//                     lineHeight: '70vh',
//                     color: 'gray'
//                 }}>to be continued</h1>
//         </div>
//         </body>
//
//     );
// }
//
// export default Mypage;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import Menu from './Menu';
// import "./css/Ids.css";
// import dashboard from './images/dashBoard.png'
// import safe from './images/safe.png'
// import danger from './images/danger.png'
//
// function Ids() {
//     return (
//         <body class="Main_body">
//         <div>
//             <div>
//                 <Menu />
//             </div>
//
//             <div class='board_box'>
//                 <img className='dashboard_box' src={dashboard} />
//                 <img className='safe_box' src={safe} />
//             </div>
//
//         </div>
//         </body>
//
//     );
// }
//
// export default Ids;

import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import "./css/Ids.css";
import dashboard from './images/dashBoard.png'
import safe from './images/safe.png'
import danger from './images/danger.png';

function Ids() {
    useEffect(() => {
        // 백엔드에서 POST 요청을 받아서 알림을 처리하는 코드
        const handleNotification = (notificationData) => {
            // 여기서는 받은 알림 데이터를 로깅하거나 필요한 작업을 수행합니다.
            console.log('Received notification:', notificationData);

            // 받은 알림 데이터를 푸시 알림으로 띄우기
            toast.info(notificationData, {
                position: toast.POSITION.TOP_RIGHT // 알림 위치 설정
            });
        };

        // POST 요청을 받는 엔드포인트 설정
        const endpoint = 'http://43.203.124.111:8080/Ids';

        // 서버에서 알림을 받는 함수
        const receiveNotification = (event) => {
            const notificationData = event.data;
            handleNotification(notificationData);
        };

        // SSE(EventSource)를 사용하여 서버에서 알림을 받음
        const eventSource = new EventSource(endpoint);
        eventSource.addEventListener('message', receiveNotification);

        return () => {
            // 컴포넌트가 언마운트될 때 SSE(EventSource) 연결 해제
            eventSource.close();
        };
    }, []);

    return (
        <body className="Main_body">
        <div>
            <div>
                <Menu />
            </div>

            <div className='board_box'>
                <img className='dashboard_box' src={dashboard} />
                <img className='safe_box' src={safe} />
            </div>
        </div>
        </body>
    );
}

export default Ids;


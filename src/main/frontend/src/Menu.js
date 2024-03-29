// //Menu.js
//
// import React from "react";
// import { Link } from 'react-router-dom';
// import "./css/Menu.css";
// import Menu_logo from './images/Menu_Pi-t.png'
//
//
// const Menu = () => {
//     return (
//         <div>
//             <div className="Menu_bar">
//                 <div className="img">
//                     <Link to="/Main">
//                         <img className="Menu_logo" src={Menu_logo} />
//                     </Link>
//                 </div>
//                 <h4 className="item">
//                     <Link to="/Main" className="Menu_Link_style">메인</Link>
//                 </h4>
//                 <h4 className="item">
//                     <Link to="/Iot" className="Menu_Link_style">홈제어</Link>
//                 </h4>
//                 <h4 className="item">
//                     <Link to="/MyPage" className="Menu_Link_style">마이페이지</Link>
//                 </h4>
//                 <h4 className="item">
//                     <Link to="/Ids" className="Menu_Link_style">보안</Link>
//                 </h4>
//                 <h6 className="item_">
//                     <Link to="/" className="Menu_Link_style2">로그아웃</Link>
//                 </h6>
//             </div>
//         </div>
//     );
// };
//
// export default Menu;



//Menu.js

// import React from "react";
// import { Link } from 'react-router-dom';
// import "./css/Menu.css";
// import Menu_logo from './images/Menu_Pi-t.png'
//
//
// const Menu = () => {
//
//     const handleLogout = async () => {
//         try {
//             // POST 요청을 보냅니다.
//             const response = await fetch('/logout', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     // 여기에 필요한 경우 인증 토큰 등의 헤더를 추가할 수 있습니다.
//                 },
//                 // body에는 필요한 경우 POST 요청에 함께 보낼 데이터를 넣습니다.
//                 // 예: JSON.stringify({ key: 'value' })
//             });
//
//             // 응답 확인
//             if (response.ok) {
//                 console.log('로그아웃 성공');
//                 // 로그아웃 성공 후 필요한 작업 수행
//             } else {
//                 console.error('로그아웃 실패');
//                 // 로그아웃 실패 시 필요한 작업 수행
//             }
//         } catch (error) {
//             console.error('로그아웃 오류:', error);
//             // 오류 발생 시 필요한 작업 수행
//         }
//     };
//
//
//     return (
//         <div>
//             <div className="Menu_bar">
//                 <div className="img">
//                     <Link to="/Main">
//                         <img className="Menu_logo" src={Menu_logo} />
//                     </Link>
//                 </div>
//                 <h4 className="item">
//                     <Link to="/Main" className="Menu_Link_style">메인</Link>
//                 </h4>
//                 <h4 className="item">
//                     <Link to="/Iot" className="Menu_Link_style">홈제어</Link>
//                 </h4>
//                 <h4 className="item">
//                     <Link to="/MyPage" className="Menu_Link_style">마이페이지</Link>
//                 </h4>
//                 <h4 className="item">
//                     <Link to="/Ids" className="Menu_Link_style">보안</Link>
//                 </h4>
//                 <h6 className="item_" onClick={handleLogout}>
//                     <Link to="/" className="Menu_Link_style2">로그아웃</Link>
//                 </h6>
//             </div>
//         </div>
//     );
// };
//
// export default Menu;


// Menu.js

import React from "react";
import { Link } from 'react-router-dom';
import "./css/Menu.css";
import Menu_logo from './images/Menu_Pi-t.png';

const Menu = () => {
    const handleLogout = async () => {
        try {
            // POST 요청을 보냅니다.
            const response = await fetch('/logout', {
                method: 'POST',  // HTTP POST 요청으로 변경
                headers: {
                    'Content-Type': 'application/json',
                    // 여기에 필요한 경우 인증 토큰 등의 헤더를 추가할 수 있습니다.
                },
                // body에는 필요한 경우 POST 요청에 함께 보낼 데이터를 넣습니다.
                // 예: JSON.stringify({ key: 'value' })
            });

            // 응답 확인
            if (response.ok) {
                console.log('로그아웃 성공');
                // 로그아웃 성공 후 페이지 리로딩
                window.location.reload();
            } else {
                console.error('로그아웃 실패');
                // 로그아웃 실패 시 필요한 작업 수행
            }
        } catch (error) {
            console.error('로그아웃 오류:', error);
            // 오류 발생 시 필요한 작업 수행
        }
    };

    return (
        <div>
            <div className="Menu_bar">
                <div className="img">
                    <Link to="/Main">
                        <img className="Menu_logo" src={Menu_logo} />
                    </Link>
                </div>
                <h4 className="item">
                    <Link to="/Main" className="Menu_Link_style">메인</Link>
                </h4>
                <h4 className="item">
                    <Link to="/Iot" className="Menu_Link_style">홈제어</Link>
                </h4>
                <h4 className="item">
                    <Link to="/MyPage" className="Menu_Link_style">마이페이지</Link>
                </h4>
                <h4 className="item">
                    <Link to="/Ids" className="Menu_Link_style">보안</Link>
                </h4>
                <h6 className="item_" onClick={handleLogout}>
                    <Link to="/" className="Menu_Link_style2">로그아웃</Link>
                </h6>
            </div>
        </div>
    );
};

export default Menu;

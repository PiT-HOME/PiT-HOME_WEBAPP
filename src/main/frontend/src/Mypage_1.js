// import React from 'react';
// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
//
// function Mypage_1() {
//     const [password, setPassword] = useState('');
//     const [newpassword, setnewPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [alert, setAlert] = useState('');
//     const navigate=useNavigate();
//
//     const handleChangePassword = async () => {
//
//         // 새 비밀번호와 재확인 비밀번호가 일치하는지 확인
//         if (newpassword !== confirmPassword) {
//             alert('새 비밀번호가 일치하지 않습니다.');
//             return;
//         }
//
//        try {
//             // 백엔드에 비밀번호 변경 요청
//            const response = await axios.put('/password', { password, newpassword });
//            if (response.status === 200) {
//                 // 비밀번호 변경이 성공했을 때 알림창 띄우기
//                 alert('변경되었습니다.');
//                 navigate('/Mypage'); //변경하고 마이페이지로 돌아가기
//            }
//        } catch (error) {
//            console.error(error);
//        }
//     };
//
//     return (
//         <div>
//             <h1>pi-t!'s 정보수정</h1>
//             <input
//                 type="password"
//                 placeholder="현재 비밀번호 입력"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//             /><p></p>
//
//             <input
//                 type="password"
//                 placeholder="새 비밀번호 입력"
//                 value={newpassword}
//                 onChange={(e) => setnewPassword(e.target.value)}
//             /><p></p>
//
//             <input
//                 type="password"
//                 placeholder="새 비밀번호 재입력"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//             /><p></p>
//
//             <button onClick={handleChangePassword}>수정하기</button>
//
//             <Link to="/Mypage">
//                 <button>수정취소</button>
//             </Link>
//         </div>
//     );
// }
//
// export default Mypage_1;



import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import MyPage_1 from './css/MyPage_1.css';
import modifying_info from './images/modifying_info.png'


function Mypage_1() {
    const [password, setPassword] = useState('');
    const [newpassword, setnewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <body class="Main_body">
        <div>
            <Menu />
        </div>

        <div class='box'>
            <img className='modifying_info' src={modifying_info} />

            <div className='MyPage_input_box'>
                <input
                    type="password"
                    placeholder="현재 비밀번호 입력"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="newpassword"
                    placeholder="새 비밀번호 입력"
                    value={newpassword}
                    onChange={(e) => setnewPassword(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="새 비밀번호 재입력"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <button class="true_button" onClick={() => alert('변경되었습니다.')}>수정하기</button>
                <Link to="/Mypage">
                    <button class="false_button">수정취소</button>
                </Link>

            </div>
        </div>
        </body>

    );
}


export default Mypage_1;
// import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom';
// import axios from 'axios';
//
// import "./css/SignUp.css";
// import welcome from './images/welcome.png'
// import Swal from "sweetalert2";
//
// const Register = () => {
//     const navigate = useNavigate();
//
//     const [user, setUser] = useState({
//         name: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//     });
//
//     const handleInputChange = (e) => {
//         setUser({ ...user, [e.target.name]: e.target.value });
//     };
//
//     const handleRegister = () => {
//         // 비밀번호가 일치하지 않을 경우
//         if (user.password !== user.confirmPassword) {
//             Swal.fire({
//                 title: "비밀번호가 일치하지 않습니다",
//                 text: "다시 확인해주세요",
//                 icon: "warning",
//                 confirmButtonColor: "#007BBE",
//                 confirmButtonText: "확인"
//             });
//             navigate('/register');
//             return; // 비밀번호가 일치하지 않으면 회원가입 진행하지 않음
//         }
//
//         axios.post('http://localhost:8080/register', user)
//             .then(response => {
//                 console.log(response.data);
//                 Swal.fire({
//                     title: "회원가입에 성공하였습니다!",
//                     text: "환영합니다 :)",
//                     icon: "success",
//                     confirmButtonColor: "#007BBE",
//                     confirmButtonText: "확인"
//                 });
//                 navigate('/login');
//             })
//             .catch(error => {
//                 console.error(error.response.data);
//                 Swal.fire({
//                     title: "회원가입에 실패하였습니다.",
//                     icon: "error",
//                     confirmButtonColor: "#007BBE",
//                     confirmButtonText: "확인"
//                 });
//                 navigate('/register');
//             });
//     };
//
//     return (
//         <div className='box'>
//             <img className="welcome" src={welcome} />
//
//             <div className='signup_input_box'>
//                 <input type="name" name="name" placeholder="이름 입력" onChange={handleInputChange} />
//                 <input type="email" name="email" placeholder="이메일 입력" onChange={handleInputChange} />
//                 <input type="password" name="password" placeholder="비밀번호 입력" onChange={handleInputChange} />
//                 <input type="password" name="confirmPassword" placeholder="비밀번호 재입력" onChange={handleInputChange} />
//             </div>
//
//             <div className='signup_box'>
//                 <Link to="/Login">
//                     <button class="true_button" onClick={handleRegister}>가입하기</button>
//                 </Link>
//                 <Link to="/FirstPage">
//                     <button class="false_button">가입취소</button>
//                 </Link>
//             </div>
//         </div>
//     );
// };
//
// export default Register;
//


import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';

import "./css/SignUp.css";
import welcome from './images/welcome.png'
import Swal from "sweetalert2";

const Register = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handleInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        setPasswordsMatch(true);
    };

    const handleRegister = () => {
        if (user.password !== user.confirmPassword) {
            setPasswordsMatch(false);
            Swal.fire({
                title: "비밀번호가 일치하지 않습니다",
                text: "다시 확인해주세요",
                icon: "warning",
                confirmButtonColor: "#007BBE",
                confirmButtonText: "확인"
            });
            return;
        }

        axios.post('http://127.0.0.1:8080/register', user)
            .then(response => {
                console.log(response.data);
                Swal.fire({
                    title: "회원가입에 성공하였습니다!",
                    text: "환영합니다 :)",
                    icon: "success",
                    confirmButtonColor: "#007BBE",
                    confirmButtonText: "확인"
                });
                navigate('/login');
            })
            .catch(error => {
                console.error(error.response.data);
                Swal.fire({
                    title: "회원가입에 실패하였습니다.",
                    icon: "error",
                    confirmButtonColor: "#007BBE",
                    confirmButtonText: "확인"
                });
            });
    };

    // 가입 취소 버튼 클릭 시
    const handleCancel = () => {
        // 페이지 이동 전에 비밀번호 일치 여부 상태를 초기화
        setPasswordsMatch(true);
        // FirstPage로 이동
        navigate('/');
    };

    return (
        <div className='box'>
            <img className="welcome" src={welcome} />

            <div className='signup_input_box'>
                <input type="name" name="name" placeholder="이름 입력" onChange={handleInputChange} />
                <input type="email" name="email" placeholder="이메일 입력" onChange={handleInputChange} />
                <input type="password" name="password" placeholder="비밀번호 입력" onChange={handleInputChange} />
                <input type="password" name="confirmPassword" placeholder="비밀번호 재입력" onChange={handleInputChange} />
            </div>


            <div className='signup_box'>
                <button className="true_button" onClick={handleRegister}>가입하기</button>
                {/* 가입 취소 버튼의 클릭 이벤트를 handleCancel 함수로 변경 */}
                <button className="false_button" onClick={handleCancel}>가입취소</button>
            </div>
        </div>
    );
};

export default Register;



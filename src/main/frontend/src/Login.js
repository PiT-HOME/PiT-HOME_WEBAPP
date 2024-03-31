// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
//
//
// function Login() {
//   const [userEmail, setEmail] = useState('');
//   const [userPassword, setPassword] = useState('');
//   const navigate=useNavigate();
//
//     const handleLogin = async () => {
//         try {
//             const response = await axios.post('http://localhost:8080/user/login', { userEmail, userPassword });
//             console.log('Request Data:', { userEmail, userPassword }); // 확인용 로그
//             if (response.status === 200) {
//                 alert('로그인이 성공적으로 완료되었습니다.');
//                 navigate('/Main');
//             } else {
//                 alert('로그인에 실패했습니다.');
//             }
//         } catch (error) {
//             console.error(error);
//             alert('로그인에 실패했습니다.');
//         }
//     };
//
//
//
//     return (
//     <div>
//       <h1>Welcome to pi-t! </h1>
//       <input
//         type="text"
//         placeholder="이메일을 입력해 주세요."
//         value={userEmail}
//         onChange={(e) => setEmail(e.target.value)}
//       /><p></p>
//       <input
//         type="password"
//         placeholder="비밀번호를 입력해 주세요."
//         value={userPassword}
//         onChange={(e) => setPassword(e.target.value)}
//       /><p></p>
//     <button onClick={handleLogin}>로그인</button>
//
//     {/*<Link to="/Main">
//         <button>로그인</button>
//     </Link>*/}
//     </div>
//   );
// }
//
// export default Login;


import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import "./css/Login.css";
import welcome from './images/welcome.png';
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';

const Login = () => {
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
    };

    const handleLogin = () => {
        axios.post('http://127.0.0.1:8080/login', loginInfo)
            .then(response => {
                const token = response.data;
                localStorage.setItem('token', token);
                Swal.fire({
                    title: "로그인 성공!",
                    text: "안녕하세요 :)",
                    icon: "success",
                    confirmButtonColor: "#007BBE",
                    confirmButtonText: "확인"
                });
                navigate('/Main');
                // 로그인 성공 시 메인 화면으로
            })
            .catch(error => {
                console.error(error.response.data);
                Swal.fire({
                    title: "로그인에 실패하였습니다",
                    text: "다시 확인해주세요",
                    icon: "warning",
                    confirmButtonColor: "#007BBE",
                    confirmButtonText: "확인"
                })
                // 로그인 실패 시 로그인 화면에 남아있음
            });
    };

    return (

        <body className='Login_body'>
        <div className='box'>
            <img className="welcome" src={welcome} />

            <div className='login_input_box'>
                <input type="email" name="email" placeholder="이메일을 입력하세요." onChange={handleInputChange} />
                <input type="password" name="password" placeholder="비밀번호를 입력하세요" onChange={handleInputChange} />
            </div>

            <div class='login_box'>
                    <button class="login_button" onClick={handleLogin}>로그인</button>
            </div>

        </div>
        </body>
);
};

export default Login;

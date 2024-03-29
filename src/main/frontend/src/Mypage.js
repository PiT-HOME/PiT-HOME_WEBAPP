import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import './css/MyPage.css';
import modify from './images/modify.png'
import setting from './images/setting.png'

function Mypage() {
    return (
        <body class="Main_body">
        <div>
            <div>
                <Menu />
            </div>

            <div className='image_grid2'>
                <Link to="/Mypage_1">
                    <img className='Mypage_item' src={modify} />
                    <h3 className='Link_style'>회원 정보 수정</h3>
                </Link>

                <Link to="/Mypage_2">
                    <img className='Mypage_item' src={setting} />
                    <h3 className='Link_style'>&nbsp;&nbsp;&nbsp;&nbsp;환경 설정</h3>
                </Link>
            </div>

        </div>
        </body>

    );
}

export default Mypage;
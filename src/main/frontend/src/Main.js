// import React from 'react';
// import { Link } from 'react-router-dom';
// import Menu from './Menu';
// import "./css/Main.css";
// import Main_Iot from './images/Main_Iot.png'
// import Main_IDS from './images/Main_IDS.png'
// import Main_Mypage from './images/Main_Mypage.png'
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import Main_banner from './images/Main_banner.png'
// import Main_banner2 from './images/Main_banner2.png'
// import Main_banner3 from './images/Main_banner3.png'
//
//
//
// const Main = () => {
//     const imageData = [
//         {
//             label: 'Main_banner',
//             alt: 'Main_banner',
//             url: Main_banner,
//         },
//         {
//             alt: 'Main_banner2',
//             url: Main_banner2,
//         },
//         {
//             alt: 'Main_banner3',
//             url: Main_banner3,
//         },
//
//     ];
//
//     return (
//         <body className="Main_body">
//         <div>
//             <div>
//                 <Menu />
//             </div>
//
//             <div className="Main_box">
//                 <Carousel
//                     showArrows={true}
//                     infiniteLoop={true}
//                     showThumbs={false}
//                     autoPlay={true}
//                     interval={3000}
//                     emulateTouch={true}
//                 >
//                     {imageData.map((image) => (
//                         <div key={image.alt}>
//                             <img src={image.url} alt={image.alt} />
//                         </div>
//                     ))}
//                 </Carousel>
//             </div>
//
//             <div className="Main_">
//                 <Link to="/Iot">
//                     <img className='Main_item' src={Main_Iot} alt="" />
//                 </Link>
//
//                 <Link to="/MyPage">
//                     <img className='Main_item' src={Main_Mypage} alt="" />
//                 </Link>
//
//                 <Link to="/Main">
//                     <img className='Main_item' src={Main_IDS} alt="" />
//                 </Link>
//             </div>
//
//             <div className='copyright'>
//                 <h6>Seoul Women’s University Department of Information Security 2023 PBL @Pi-t
//                     <br></br>Copyright 2023. Pi-t. All rights reserved </h6>
//
//             </div>
//         </div>
//         </body>
//     );
// }
//
// export default Main;

//main.js

import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import "./css/Main.css";
import Main_Iot from './images/Main_Iot.png'
import Main_IDS from './images/Main_IDS.png'
import Main_Mypage from './images/Main_Mypage.png'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Main_banner from './images/Main_banner.png'
import Main_banner2 from './images/Main_banner2.png'
import Main_banner3 from './images/Main_banner3.png'
import copyright from './images/copyright.png'


const Main = () => {
    const imageData = [
        {
            label: 'Main_banner',
            alt: 'Main_banner',
            url: Main_banner,
        },
        {
            alt: 'Main_banner2',
            url: Main_banner2,
        },
        {
            alt: 'Main_banner3',
            url: Main_banner3,
        },

    ];

    return (
        <body className="Main_body">
        <div>
            <div>
                <Menu />
            </div>

            <div className="Main_box">
                <Carousel
                    showArrows={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    autoPlay={true}
                    interval={3000}
                    emulateTouch={true}
                >
                    {imageData.map((image) => (
                        <div key={image.alt}>
                            <img src={image.url} alt={image.alt} />
                        </div>
                    ))}
                </Carousel>
            </div>

            <div className="Main_">
                <Link to="/Iot">
                    <img className='Main_item' src={Main_Iot} alt="" />
                </Link>

                <Link to="/MyPage">
                    <img className='Main_item' src={Main_Mypage} alt="" />
                </Link>

                <Link to="/Ids">
                    <img className='Main_item' src={Main_IDS} alt="" />
                </Link>
            </div>

            <div className='copyright'>
                <h6>Seoul Women’s University Department of Information Security 2023 PBL @Pi-t
                    <br></br>Copyright 2023. Pi-t. All rights reserved </h6>

            </div>
        </div>
        </body>
    );
}

export default Main;
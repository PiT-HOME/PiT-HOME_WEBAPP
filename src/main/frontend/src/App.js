import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstPage from "./FirstPage";
import Login from './Login';
import Main from './Main';
import Iot from './Iot';
import Camera from './Camera';
import Camera2 from './Camera2';
import Doorlock from './Doorlock';
import Multitap from './Multitap';
import Lamp from './Lamp';
import Mypage from './Mypage';
import Mypage_1 from './Mypage_1';
import Mypage_2 from './Mypage_2';
import Register from "./Register";
import Ids from './Ids';
import VideoPlayer from './VideoPlayer';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Iot" element={<Iot />} />
        <Route path="/Camera" element={<Camera />} />
        <Route path="/Camera2" element={<Camera2 />} />
        <Route path="/doorlock" element={<Doorlock />} />
        <Route path="/Multitap" element={<Multitap />} />
        <Route path="/Lamp" element={<Lamp />} />
        <Route path="/Mypage" element={<Mypage />} />
        <Route path="/Mypage_1" element={<Mypage_1 />} />
        <Route path="/Mypage_2" element={<Mypage_2 />} />
        <Route path="/Ids" element={<Ids />} />
        <Route path="/VideoPlayer" element={<VideoPlayer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

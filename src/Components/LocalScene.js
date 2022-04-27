import React from 'react';
import { Routes, Route, Link, Outlet } from "react-router-dom";
import '../Styles/LocalScene.css';
import Calender from './Calender';
import Header from './Header'

function LocalScene() {
    return (
        <div className='LocalScene'>
            <Header />
            <Routes>
                <Route path='/see' element={<Calender />} />
            </Routes>
            <Outlet />
        </div>
    );
}

export default LocalScene;
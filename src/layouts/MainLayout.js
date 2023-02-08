import React from 'react';

import './MainLayout.styles.css'
import { Outlet } from "react-router-dom";
import {Header} from "../components";

export const MainLayout = () => {
    return (
        <div className="main-container">
            <Header />
            <Outlet />
        </div>
    );
};
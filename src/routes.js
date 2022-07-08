import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/home";

const RoutesApp = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<HomeScreen/>} />
        </Routes>
    </BrowserRouter>
);

export default RoutesApp;
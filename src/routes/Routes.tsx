import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "../views/Home";
import Search from "../views/Search";

const RoutesApp = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/items"} element={<Search />} />
        </Routes>
    )
};

export default RoutesApp;

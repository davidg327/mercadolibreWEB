import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "../views/Home";
import Search from "../views/Search";
import Header from "../components/Header";
import Detail from "../views/Detail";

const RoutesApp = () => {
    return (
       <div>
           <Header />
           <Routes>
               <Route path={"/"} element={<Home />} />
               <Route path={"/items"} element={<Search />} />
               <Route path={"/items/:id"} element={<Detail />} />
           </Routes>
       </div>
    )
};

export default RoutesApp;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import { Favorites } from "../pages/Favorites";
import Home from "../pages/Home";

const RoutesComp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComp;

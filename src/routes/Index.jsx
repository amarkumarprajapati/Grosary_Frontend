import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Container/Pages/Home/Home";
import Login from "../Components/userLogin/Login";
import LazyLoad from "react-lazyload";
import NearestStore from "../Container/Store/Nearest/Nearseststore";
import Navbar from "../common/Navbar";
import Search from "../Container/search/Search";

const Index = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <LazyLoad height={200} once>
                <Login />
              </LazyLoad>
            }
          />
          <Route path="/nearstore" element={<NearestStore />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Index;

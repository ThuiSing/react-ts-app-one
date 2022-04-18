import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import About from "../about/About";

const Home = React.lazy(() => import("../home/Home"));
const Login = React.lazy(() => import("../Login/Login"));
const SingleProduct = React.lazy(
  () => import("../singleProduct/SingleProduct")
);

const Main = () => {
  return (
    <div className="py-5">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Main;

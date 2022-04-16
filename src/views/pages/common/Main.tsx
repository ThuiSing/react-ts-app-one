import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import About from "../about/About";
import SingleProduct from "../singleProduct/SingleProduct";

const Home = React.lazy(() => import("../home/Home"));

const Main = () => {
  return (
    <div className="py-5">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Main;

import React from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Kids from "./Pages/Kids";
import Courses from "./Pages/Courses";
import CourseDetail from "./Pages/CourseDetail";
import Nav2 from "./Components/Nav2";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Nav2 />
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Product /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/product" element={<Product />} />
        <Route path="/product/men" element={<Men />} />
        <Route path="/product/women" element={<Women />} /> */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />

        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

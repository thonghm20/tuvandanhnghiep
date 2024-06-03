import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import DetailServices from "./components/DetailServices";
import Services from "./pages/Services";
import Footer from "./components/Footer";

const App = () => {
  return(
    <BrowserRouter>
    <Header/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/detail" element={<DetailServices/>}/>
          <Route path="/services" element={<Services/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
};

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Signup from "./components/signup";
import Signin from "./components/signin";
import Features from "./components/features";
import Pricing from "./components/pricing";
import About from "./components/about";

export default function App() {
  return (
    <div className="scroll-smooth">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
        <section id="features-section">
            <Features />
          </section>
          <section id="pricing-section">
            <Pricing />
          </section>
          <section id="about-section">
            <About />
          </section>

      </BrowserRouter>
    </div>
  );
}

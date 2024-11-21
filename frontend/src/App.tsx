import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Signup from './components/signup';
import Signin from './components/signin';
import Features from './components/features';
import Pricing from './components/pricing';
import About from './components/about';
import Brain from './UI/brain';
import Whiteboard from './UI/whiteboard';

const isAuthenticated = () => !!localStorage.getItem('token');

export default function App() {
  return (
    <div className="scroll-smooth">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/Brain" element={isAuthenticated() ? <Brain /> : <Navigate to="/signin" />} />
          <Route path="/Whiteboard" element={<Whiteboard tool="defaultTool" />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import { AnimatePresence,
  motion } from "framer-motion";

const App = () => {
  return (
    <div className="App border-2 w-72 h-96 text-center flex justify-center  items-center flex-col ">
      <Router>
        <AnimatePresence
        >

        <Routes
        
        >
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Dashboard />
        </AnimatePresence>
      </Router>
    </div>
  );
};

export default App;

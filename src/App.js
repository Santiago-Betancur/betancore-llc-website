// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Endeavours from "./components/Endeavours";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <Header />
      <main className="content">
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/endeavours" element={<Endeavours />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </main>
      <Footer />
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;

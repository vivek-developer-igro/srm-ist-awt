import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home Page: Welcome to the SPA!</h2>;
}

function About() {
  return <h2>About Page: This is a simple React Router example.</h2>;
}

function Contact() {
  return <h2>Contact Page: Get in touch here.</h2>;
}

function App() {
  return (
    <Router>
      <nav style={{ margin: "20px", display: "flex", gap: "15px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

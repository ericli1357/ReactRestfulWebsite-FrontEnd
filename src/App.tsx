import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./Home";
import Contact from "./Contact";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Container, Row } from "react-bootstrap";
import { About } from "./About";

function App() {
  return (
    <BrowserRouter>
      <div id="appBody">
        <Header />
        <Container
          id="appMain"
          className="d-flex align-items-center justify-content-center"
        >
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="Home" element={<Home />} />
            <Route path="Contact" element={<Contact />}></Route>
            <Route path="About" element={<About />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

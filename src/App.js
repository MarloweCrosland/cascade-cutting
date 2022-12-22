import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";


import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import Services from "./pages/Services";
import NoMatch from "./pages/NoMatch"
import "./App.css";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <>
        <section id="bg">
        <Header/>
            <Router>
                <div className="flex-column justify-flex-start min-100-vh">
                    <div className="page-container">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/mission" element={<Mission />} />
                            <Route path="*" element={<NoMatch />} />
                        </Routes>
                    </div>
                </div>
            </Router>
            <Footer />
            </section>
        </>
    );
}

export default App;

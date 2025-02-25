import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Property from "./Property";
import News from "./News";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import PropertyDetail from "./PropertyDetail";
import Calculators from "./Calculators";
import PageNotFound from "./PageNotFound";

function Main() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/property" element={<Property />} />
                <Route path="/news" element={<News />} />
                <Route path="/contact"element={<Contact/>} />
                <Route path="/calculators" element={<Calculators />} />
                <Route path="/property/:id" element={<PropertyDetail />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            {/* <Contact/> */}
            <Footer />
        </Router>
    );
}

export default Main;

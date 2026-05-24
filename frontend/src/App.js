import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "@/App.css";

import Home from "@/pages/Home";
import K12 from "@/pages/K12";
import CollegeStrategy from "@/pages/CollegeStrategy";
import CollegeAdmissions from "@/pages/CollegeAdmissions";
import Graduate from "@/pages/Graduate";
import Research from "@/pages/Research";
import International from "@/pages/International";
import Contact from "@/pages/Contact";

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
    return null;
}

function App() {
    return (
        <div className="App" data-testid="app-root">
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/k-12" element={<K12 />} />
                    <Route path="/college/strategic-planning" element={<CollegeStrategy />} />
                    <Route path="/college/admissions-consulting" element={<CollegeAdmissions />} />
                    <Route path="/graduate" element={<Graduate />} />
                    <Route path="/research" element={<Research />} />
                    <Route path="/international" element={<International />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

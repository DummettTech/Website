import React, { useMemo } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@/index.css";
import "@/i18n";
import NavBar from "@components/navbar";
import Footer from "@components/footer";
import Homepage from "@views/Homepage";
import AboutUs from "@views/AboutUs";
import ContactUs from "@views/ContactUs";
import DarkAges from "@views/Events/DarkAges";

const App: React.FC = () => {
  const memoizedNavBar = useMemo(() => <NavBar />, []);
  return (
    <Router>
      {memoizedNavBar}
      <div className="pt-20 app">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/darkages" element={<DarkAges />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

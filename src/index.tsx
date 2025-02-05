import React, { useMemo } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@/index.css";
import "@/i18n";
import NavBar from "@components/navbar";
import Footer from "@components/footer";
import Homepage from "@/views/Homepage/Homepage";
import AboutUs from "@views/AboutUs";
import ContactUs from "@views/ContactUs";
import DarkAges from "@views/Events/DarkAges";

const App: React.FC = () => {
  const memoizedNavBar = useMemo(() => <NavBar />, []);
  return (
    <Router>
      {memoizedNavBar}
      <main className="pt-20 flex flex-col min-h-screen flex-grow">
        <div className="pt-10 flex-grow">
          <div data-testid="main-body" className="bg-gray-200 relative h-full">
            <div
              data-testid="ribbon"
              className="mx-auto max-w-7xl px-4 py-20 sm:px-6 bg-white lg:px-8 h-full shadow-lg pt-10 divide-y-10 flex-grow flex flex-col"
            >
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/darkages" element={<DarkAges />} />
              </Routes>
            </div>
          </div>
        </div>
      </main>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const footerRoot = ReactDOM.createRoot(
  document.getElementById("footer") as HTMLElement
);

footerRoot.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);

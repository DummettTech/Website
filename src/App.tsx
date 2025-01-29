import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./index.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Test React Proj</p>
      </header>
    </div>
  );
};

export default App;

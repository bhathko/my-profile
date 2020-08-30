import React from 'react';
import './App.scss';
import Navbar from "./components/layout/navbar";
import Content from "./components/layout/content";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="container">
        <BrowserRouter>
          <Navbar />
          <Content />
        </BrowserRouter>
    </div>
  );
}

export default App;

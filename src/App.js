import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import { useState, useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)
    },100)
  },[])
  return (
    <div className="App">
      {
        loading?
          <PulseLoader color="#ffdf65" loading={loading} aria-label="Loading Spinner"
          data-testid="loader" size={25} speedMultiplier={0.7}/>
      :
        <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
        </Router>
      }
    </div>
  );
}

export default App;

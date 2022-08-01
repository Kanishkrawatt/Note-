import React from "react";
import Login from "./components/login";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from "./components/homepage";
import Notekeep from "./components/notekeep";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path= "/notekeep" element={<Notekeep />} />
    </Routes>
  </BrowserRouter>
    
    
    </>
  );
}

export default App;

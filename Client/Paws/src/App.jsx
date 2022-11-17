import React from "react";
import "./App.css";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>  </Route>
        <Route path="/Login" element={<Login />}>  </Route>
        <Route path="/Register" element={<NotFound />}>  </Route>
        <Route path="/Events" element={<NotFound />}>  </Route>
        <Route path="/SocialService" element={<NotFound />}>  </Route>
        <Route path="*" element={<NotFound />}>  </Route>
        
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;

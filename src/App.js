import React, { useEffect } from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./Components/StateProvider";


function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
        if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Header/>
        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/checkout" element={<Checkout/>}/>
         <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
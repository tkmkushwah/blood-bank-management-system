import React from 'react'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Carousel from './components/CarouselHome'
import Header from './components/Header'
import Login from './components/Login'
import SignUp from './components/SignUp'
import  { useState, useEffect } from "react";


const App = () => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  return (
    <>
     <h1>{message}</h1>
      <BrowserRouter  >
        <Header />
        <Routes>
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/SignUp" element={<SignUp />}  />
        </Routes>
      </BrowserRouter>
      <Carousel />
    </>
  )
}
export default App
import React from 'react'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Carousel from './components/CarouselHome'
import Header from './components/Header'
import Login from './components/Login'
import SignUp from './components/SignUp'

const App = () => {
  return (
    <>
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
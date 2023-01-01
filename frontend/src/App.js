import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/Home/Home';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Login from './components/Login/Login'
import Gallery from './components/Gallery/Gallery'
import './styles/header.scss'
import './styles/app.scss'
import './styles/footer.scss'


const App = () => {

  return (
     <Router>
      <Header/>
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
       </Routes>
    <Footer />
    </Router>
  )
}
export default App
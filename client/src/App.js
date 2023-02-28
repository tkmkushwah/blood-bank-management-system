import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from './components/Home/Home';
import About from './components/About/About'
import Eligibility from './components/About/Eligibility'
import Contact from './components/Contact/Contact'
import Login from './components/Login/Login'
import DonorLogin from './components/Login/DonorLogin';
import PatientLogin from './components/Login/PatientLogin';
import PrivateRoute from "./components/routes/Private";
import Dashboard from './components/user/Dashboard';
import Register from "./components/Login/Register";
import ForgotPassword from "./components/Login/ForgotPassword";

import './styles/header.scss'
import './styles/app.scss'
import './styles/footer.scss'
import './styles/home.scss'
import './styles/login.scss'
import './styles/contact.scss'
import './styles/eligibility.scss'
import './styles/aboutus.scss'
import './styles/register.scss'




const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/about" element={<About />} />
        <Route path="/eligibility" element={<Eligibility />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/donor-login" element={<DonorLogin />} />
        <Route path="/patient-login" element={<PatientLogin />} />
      </Routes>
    </>
  );
}
export default App
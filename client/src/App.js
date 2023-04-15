import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from './components/Home/Home';
import About from './components/About/About';
import Eligibility from './components/About/Eligibility';
import BloodTypes from './components/About/BloodTypes';
import Impact from './components/About/Impact';
import Research from './components/About/Research';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import DonorLogin from './components/Login/DonorLogin';
import PatientLogin from './components/Login/PatientLogin';
import PrivateRoute from "./components/routes/Private";
import Dashboard from './components/user/Dashboard';
import Register from "./components/Login/Register";
import ForgotPassword from "./components/Login/ForgotPassword";
import DashboardLayout from "./components/Layout/DashboardLayout"
import UserRequest from './components/user/UserRequest';
import AdminRoute from "./components/routes/AdminRoute";
import AdminDashborad from "./components/Admin/AdminDashborad";
import DonarDashboard from "./components/Donor/DonorDashboard";
import ProfilePage from './Profile/ProfilePage';
import BankLogin from './components/Login/BankLogin';
import BankRegister from './components/Login/BankRegister';

import './styles/header.scss'
import './styles/app.scss'
import './styles/footer.scss'
import './styles/home.scss'
import './styles/login.scss'
import './styles/contact.scss'
import './styles/eligibility.scss'
import './styles/aboutus.scss'
import './styles/register.scss'
import ReceiverDashboard from './components/Receiver/ReceiverDashboard';
import ApplyDonor from './components/user/ApplyDonor';
import Admin from './components/Admin';
import { DonarById } from './components/Admin/DonarRequests/DonarById';
import DonationRequests from './components/Donor/DonationRequests/DonationRequests';
import { DonarRequestById } from './components/Donor/DonationRequests/DonarRequestById';
import ReceiverRequets from './components/Admin/ReceiverRequests/ReceiverRequets';
import { ReceiverById } from './components/Admin/ReceiverRequests/ReceiverById';
import ReceiverApply from './components/Receiver/ReceiverRequets/ReceiverApply';
import { ReceiverRequestById } from './components/Receiver/ReceiverRequets/ReceiverRequestById';





const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
        </Route> */}

        {/* <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashborad />} />
        </Route> */}

        <Route path="/login" element={<Login />} />
        <Route path="/bloodbanklogin" element={<BankLogin />} />
        <Route path="/bankregister" element={<BankRegister />} />
        {/* <Route path="/profile" element={<ProfilePage />} /> */}
        <Route path="/blood-request" element={<UserRequest />} />

        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/about" element={<About />} />

        <Route path="/eligibility" element={<Eligibility />} />
        <Route path="/bloodTypes" element={<BloodTypes />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/research" element={<Research />} />
        <Route path="/contact" element={<Contact />} />

        {/* <Route path="/dashboardlayout" element={<DashboardLayout />} /> */}

        {/* <Route path="/donor-login" element={<DonorLogin />} />
        <Route path="/patient-login" element={<PatientLogin />} /> */}

        {/* Admim */}
        <Route path="/admin/donar_requests/:id" element={<DonarById />} />
        <Route path="/admin/receiver_requests/:id" element={<ReceiverById />} />
        
        <Route path="/admin/:path" element={<Admin />} />
        {/* <Route path="/admin/donar_requests" element={<Admin />} /> */}

        {/* Donar */}
        <Route path="/donar/dashboard" element={<DonarDashboard />} />
        <Route path="/donar/requests" element={<DonationRequests />} />
        <Route path="/donar/requests/:id" element={<DonarRequestById />} />

        <Route path="/receiver/dashboard" element={<ReceiverDashboard />} />
        <Route path="/receiver/requests" element={<ReceiverApply />} />
        <Route
          path="/receiver/requests/:id"
          element={<ReceiverRequestById />}
        />
        
      </Routes>
    </>
  );
}
export default App
import React from 'react';

//  external imports
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

//  shared components
import Navbar from './components/Shared/Navbar';
import Footer from './components/Shared/Footer';
import RequiredAuth from './components/Auth/RequiredAuth';
import RequiredAdmin from './components/Auth/RequiredAdmin';

//  pages
import HomeIndex from './Pages/Home/Index';
import AppointmentIndex from './Pages/Appointment/Index';
import SignInIndex from './Pages/Authentication/SignIn/Index';
import SignUpIndex from './Pages/Authentication/SignUp/Index';
import TestimonialIndex from './Pages/Testimonials/Index';
import DashboardIndex from './Pages/DashBoard/Index';

//  user pages
import PaymentIndex from './Pages/DashBoard/User/Payment';
import MyAppointment from './Pages/DashBoard/User/MyAppointment';
import AddTestimonial from './Pages/DashBoard/User/AddTestimonial';

//  admin pages
import AllUsers from './Pages/DashBoard/Admin/AllUsers';
import Doctor from './Pages/DashBoard/Admin/Doctor';
import AllDoctors from './Pages/DashBoard/Admin/AllDoctors';

//  404 page
import ErrorIndex from './Pages/Error/Error';

function App() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeIndex />} />
        <Route
          path="/appointment"
          element={
            <RequiredAuth>
              <AppointmentIndex />
            </RequiredAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequiredAuth>
              <DashboardIndex />
            </RequiredAuth>
          }
        >
          <Route index element={<MyAppointment />} />
          <Route path="addreview" element={<AddTestimonial />} />
          <Route
            path="allusers"
            element={
              <RequiredAdmin>
                <AllUsers />
              </RequiredAdmin>
            }
          />
          <Route
            path="addDoctor"
            element={
              <RequiredAdmin>
                <Doctor />
              </RequiredAdmin>
            }
          />
          <Route
            path="doctors"
            element={
              <RequiredAdmin>
                <AllDoctors />
              </RequiredAdmin>
            }
          />
          <Route path="payment/:id" element={<PaymentIndex />} />
        </Route>
        <Route path="/reviews" element={<TestimonialIndex />} />
        <Route path="/signin" element={<SignInIndex />} />
        <Route path="/signup" element={<SignUpIndex />} />
        <Route path="*" element={<ErrorIndex />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;

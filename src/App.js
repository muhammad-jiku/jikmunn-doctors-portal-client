import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Reviews from './Pages/Reviews/Reviews';
import SignIn from './Pages/Authentication/SignIn/SignIn';
import SignUp from './Pages/Authentication/SignUp/SignUp';
import Footer from './Pages/Shared/Footer/Footer';
import RequiredAuth from './Pages/Authentication/RequiredAuth/RequiredAuth';
import { ToastContainer } from 'react-toastify';
import NotFound from './Pages/Shared/NotFound/NotFound';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import MyAppointments from './Pages/DashBoard/MyAppointments/MyAppointments';
import AllUsers from './Pages/DashBoard/AllUsers/AllUsers';
import RequiredAdmin from './Pages/Authentication/RequiredAdmin/RequiredAdmin';
import AddDoctor from './Pages/DashBoard/AddDoctor/AddDoctor';
import ManageDoctors from './Pages/DashBoard/ManageDoctors/ManageDoctors';
import Payment from './Pages/DashBoard/Payment/Payment';
import AddReview from './Pages/DashBoard/AddReview/AddReview';

function App() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/appointment"
          element={
            <RequiredAuth>
              <Appointment />
            </RequiredAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequiredAuth>
              <DashBoard />
            </RequiredAuth>
          }
        >
          <Route index element={<MyAppointments />} />
          <Route path="addreview" element={<AddReview />} />
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
                <AddDoctor />
              </RequiredAdmin>
            }
          />
          <Route
            path="doctors"
            element={
              <RequiredAdmin>
                <ManageDoctors />
              </RequiredAdmin>
            }
          />
          <Route path="payment/:id" element={<Payment />} />
        </Route>
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;

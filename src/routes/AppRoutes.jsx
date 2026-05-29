// src/routes/AppRoutes.jsx

import React from 'react'

import {
  Routes,
  Route,
} from 'react-router-dom'

/* ====================================
   PAGES
==================================== */

import Home from '../pages/Home'

import AboutUs from '../pages/AboutUs'

import ContactUs from '../pages/ContactUs'

function AppRoutes() {

  return (

    <Routes>

      {/* HOME */}

      <Route
        path="/"
        element={<Home />}
      />

      {/* ABOUT */}

      <Route
        path="/about-us"
        element={<AboutUs />}
      />

      {/* CONTACT */}

      <Route
        path="/contact-us"
        element={<ContactUs />}
      />

    </Routes>

  )
}

export default AppRoutes
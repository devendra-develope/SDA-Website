// src/components/layout/Navbar.jsx

import React, { useEffect, useState } from 'react'
import {
  FaTimes,
  FaAngleDown,
} from 'react-icons/fa'

import redLogo from '../../assets/spicetree_red_logo.webp'
import whiteLogo from '../../assets/spicetree_white_logo.webp'
// Import Link

import { Link } from 'react-router-dom'

function Navbar() {

  /* ====================================
      STATES
  ==================================== */

  const [menuOpen, setMenuOpen] = useState(false)

  const [servicesDropdown, setServicesDropdown] = useState(false)

  const [reachDropdown, setReachDropdown] = useState(false)

  const [scrolled, setScrolled] = useState(false)

  /* ====================================
      STICKY HEADER
  ==================================== */

  useEffect(() => {

    const handleScroll = () => {

      if (menuOpen) {

        setScrolled(false)

        return

      }

      if (window.scrollY > 50) {

        setScrolled(true)

      } else {

        setScrolled(false)

      }

    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)

  }, [menuOpen])

  /* ====================================
      BODY SCROLL LOCK
  ==================================== */

  useEffect(() => {

    if (menuOpen) {

      document.body.style.overflow = 'hidden'

    } else {

      document.body.style.overflow = 'auto'

    }

    return () => {

      document.body.style.overflow = 'auto'

    }

  }, [menuOpen])

  return (

    <>

      {/* ====================================
          MAIN NAVBAR
      ==================================== */}

      <header
        className={`main-navbar fixed top-0 left-0 w-full transition-all duration-500 ${menuOpen
          ? 'z-[9997]'
          : 'z-[999]'
          } ${scrolled
            ? 'bg-white shadow-sm py-5'
            : 'bg-transparent py-7'
          }`}
      >



        <div className="main-navbar-container max-w-[1400px] mx-auto px-5 md:px-10 xl:px-16 flex items-center justify-between">

          {/* ====================================
              LOGO
          ==================================== */}

          {!menuOpen && (

<Link to="/">

            <img
              src={redLogo}
              alt="Logo"
              className="main-navbar-logo w-[150px] md:w-[190px] object-contain"
            />
              </Link>

          )}
        

          {menuOpen && (

            <div></div>

          )}

          {/* ====================================
    HAMBURGER
==================================== */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="main-navbar-hamburger relative z-[999999] w-[60px] h-[60px] flex items-center justify-center group"
          >

            <div className="main-navbar-hamburger-wrapper relative w-[40px] h-[40px] flex items-center justify-center">

              {/* TOP LINE */}

              <span
                className={`absolute w-[2px] h-[34px] transition-all duration-500 ease-in-out ${menuOpen
                  ? 'rotate-45 bg-white'
                  : 'left-[10px] bg-[#b1281e]'
                  }`}
              ></span>

              {/* MIDDLE LINE */}

              <span
                className={`absolute w-[2px] h-[34px] transition-all duration-500 ease-in-out ${menuOpen
                  ? 'opacity-0'
                  : 'bg-[#b1281e]'
                  }`}
              ></span>

              {/* BOTTOM LINE */}

              <span
                className={`absolute w-[2px] h-[34px] transition-all duration-500 ease-in-out ${menuOpen
                  ? '-rotate-45 bg-white'
                  : 'right-[10px] bg-[#b1281e]'
                  }`}
              ></span>

            </div>

          </button>

        </div>

      </header>

      {/* ====================================
          FULL MENU OVERLAY
      ==================================== */}

      <div
        className={`main-menu-overlay fixed inset-0 z-[999999] transition-all duration-700 ${menuOpen
          ? 'visible opacity-100'
          : 'invisible opacity-0'
          }`}
      >

        {/* ====================================
    LEFT COLUMN
==================================== */}

        <div
          className={`main-menu-left-column absolute left-0 top-0 w-1/2 h-full bg-[#efefef] transition-all duration-700 ease-in-out hidden lg:block ${menuOpen
            ? 'translate-y-0'
            : '-translate-y-full'
            }`}
        >

          <div className="main-menu-left-inner h-full flex items-center justify-center px-6 md:px-10">

            <div className="main-menu-left-content flex flex-col gap-10">

              <h2 className="main-menu-left-heading text-[50px] md:text-[90px] xl:text-[110px] font-extrabold leading-[0.9] tracking-[-4px] text-transparent stroke-text">
                CREATIVE
              </h2>

              <h2 className="main-menu-left-heading text-[50px] md:text-[90px] xl:text-[110px] font-extrabold leading-[0.9] tracking-[-4px] text-transparent stroke-text">
                DIGITAL
              </h2>

              <h2 className="main-menu-left-heading text-[50px] md:text-[90px] xl:text-[110px] font-extrabold leading-[0.9] tracking-[-4px] text-transparent stroke-text">
                AGENCY
              </h2>

            </div>

          </div>

        </div>

        {/* ====================================
            RIGHT COLUMN
        ==================================== */}

        <div
          className={`main-menu-right-column absolute right-0 top-0 w-full lg:w-1/2 h-full bg-[#b1281e] transition-all duration-700 ease-in-out delay-100 overflow-y-auto ${menuOpen
            ? 'translate-y-0'
            : 'translate-y-full'
            }`}
        >

          {/* ====================================
              TOP BAR
          ==================================== */}

          <div className="main-menu-topbar flex items-center justify-between px-5 md:px-10 xl:px-16 py-7 sticky top-0 bg-[#b1281e] z-50">

            {/* WHITE LOGO */}
            <Link to="/">

            <img
              src={whiteLogo}
              alt="White Logo"
              className={`main-menu-white-logo w-[150px] md:w-[190px] object-contain transition-all duration-700 delay-300 ${menuOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-10'
                }`}
            />
            </Link>

            {/* CLOSE BUTTON */}

            <button
              onClick={() => setMenuOpen(false)}
              className={`main-menu-close-button transition-all duration-700 delay-300 ${menuOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-10'
                }`}
            >

              <FaTimes className="main-menu-close-icon text-white text-[30px]" />

            </button>

          </div>

          {/* ====================================
              MENU LIST
          ==================================== */}

          <div className="main-menu-list-wrapper px-5 md:px-10 xl:px-16 pt-10 pb-20">


            <ul className="main-menu-list flex flex-col gap-7">

              {/* ABOUT */}

              <li className="main-menu-list-item list-none">

                <Link
                  to="/about-us"
                  className="main-menu-link text-white text-[20px] md:text-[26px] xl:text-[32px] font-bold hover:translate-x-3 transition-all duration-300 inline-block"
                >
                  ABOUT
                </Link>

              </li>

              {/* SERVICES */}

              <li className="main-menu-list-item list-none">

                <button
                  onClick={() =>
                    setServicesDropdown(!servicesDropdown)
                  }
                  className="main-menu-dropdown-button flex items-center gap-4"
                >

                  <span className="main-menu-link text-white text-[20px] md:text-[26px] xl:text-[32px] font-bold">

                    SERVICES

                  </span>

                </button>

                {/* DROPDOWN */}

                <ul
                  className={`main-menu-dropdown-list overflow-hidden transition-all duration-500 ${servicesDropdown
                      ? 'max-h-[400px] mt-5'
                      : 'max-h-0'
                    }`}
                >

                  <li className="py-3 list-none">

                    <Link
                      to="/digital-marketing"
                      className="text-white/80 hover:text-white text-[16px] md:text-[18px]"
                    >
                      Digital Marketing
                    </Link>

                  </li>

                  <li className="py-3 list-none">

                    <Link
                      to="/creative-services"
                      className="text-white/80 hover:text-white text-[16px] md:text-[18px]"
                    >
                      Creative Services
                    </Link>

                  </li>

                  <li className="py-3 list-none">

                    <Link
                      to="/web-tech"
                      className="text-white/80 hover:text-white text-[16px] md:text-[18px]"
                    >
                      Web & Tech
                    </Link>

                  </li>

                </ul>

              </li>

              {/* CLIENTS */}

              <li className="main-menu-list-item list-none">

                <Link
                  to="/clients"
                  className="main-menu-link text-white text-[20px] md:text-[26px] xl:text-[32px] font-bold hover:translate-x-3 transition-all duration-300 inline-block"
                >
                  CLIENTS
                </Link>

              </li>

              {/* NEWS */}

              <li className="main-menu-list-item list-none">

                <Link
                  to="/news-media"
                  className="main-menu-link text-white text-[20px] md:text-[26px] xl:text-[32px] font-bold hover:translate-x-3 transition-all duration-300 inline-block"
                >
                  NEWS & MEDIA
                </Link>

              </li>

              {/* BLOG */}

              <li className="main-menu-list-item list-none">

                <Link
                  to="/blog"
                  className="main-menu-link text-white text-[20px] md:text-[26px] xl:text-[32px] font-bold hover:translate-x-3 transition-all duration-300 inline-block"
                >
                  BLOG
                </Link>

              </li>

              {/* REACH US */}

              <li className="main-menu-list-item list-none">

                <button
                  onClick={() =>
                    setReachDropdown(!reachDropdown)
                  }
                  className="main-menu-dropdown-button flex items-center gap-4"
                >

                  <span className="main-menu-link text-white text-[20px] md:text-[26px] xl:text-[32px] font-bold">

                    REACH US

                  </span>

                </button>

                {/* DROPDOWN */}

                <ul
                  className={`main-menu-dropdown-list overflow-hidden transition-all duration-500 ${reachDropdown
                      ? 'max-h-[400px] mt-5'
                      : 'max-h-0'
                    }`}
                >

                  <li className="py-3 list-none">

                    <Link
                      to="/contact-us"
                      className="text-white/80 hover:text-white text-[16px] md:text-[18px]"
                    >
                      Contact Us
                    </Link>

                  </li>

                  <li className="py-3 list-none">

                    <Link
                      to="/careers"
                      className="text-white/80 hover:text-white text-[16px] md:text-[18px]"
                    >
                      Careers
                    </Link>

                  </li>

                </ul>

              </li>

            </ul>

          </div>

        </div>

      </div>

      {/* ====================================
          STROKE TEXT
      ==================================== */}

      <style>
        {`
          .stroke-text {
            -webkit-text-stroke: 2px #575757;
          }
        `}
      </style>

    </>

  )
}

export default Navbar
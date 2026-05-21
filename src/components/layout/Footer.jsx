// src/components/common/Footer.jsx

import React from 'react'

import LayoutWrapper from '../common/LayoutWrapper'

import {
  FaPaperPlane,
} from 'react-icons/fa6'

function Footer() {

  return (

    <footer className="footer-main-wrapper relative overflow-hidden bg-[#0f1012] pt-[100px] pb-[35px]">

      {/* ====================================
          BACKGROUND CIRCLE
      ==================================== */}

      <div className="absolute left-[-260px] bottom-[-260px] w-[620px] h-[620px] rounded-full bg-[#0b0b0b]"></div>

      <div className="absolute left-[-120px] bottom-[-120px] w-[360px] h-[360px] rounded-full border border-[#1d1d1d]"></div>

      {/* ====================================
          LAYOUT WRAPPER
      ==================================== */}

      <LayoutWrapper>

        {/* ====================================
            TOP GRID
        ==================================== */}

        <div className="footer-top-grid-wrapper grid grid-cols-1 xl:grid-cols-[1.1fr_0.7fr_0.7fr] gap-[70px] relative z-10 mb-10">

          {/* ====================================
              LEFT SIDE
          ==================================== */}

          <div className="footer-newsletter-wrapper">

            {/* TITLE */}

            <h2 className="footer-newsletter-title text-white text-[42px] md:text-[58px] xl:text-[68px] leading-[1.1] font-bold tracking-[-2px] mb-12">

              Don’t Missed
              <br />
              Subscribed!

            </h2>

            {/* INPUT */}

            <div className="footer-newsletter-input-wrapper border border-[#23252a] h-[78px] flex items-center px-7 max-w-[620px]">

              <input
                type="email"
                placeholder="Enter Email"
                className="w-full bg-transparent border-none outline-none text-white text-[18px] placeholder:text-[#7b7b7b]"
              />

              <button className="w-[52px] h-[52px] rounded-full bg-[#ab0418] hover:bg-white text-white hover:text-[#ab0418] flex items-center justify-center transition-all duration-500">

                <FaPaperPlane />

              </button>

            </div>

          </div>

          {/* ====================================
              COMPANY
          ==================================== */}

          <div className="footer-links-column">

            <h4 className="footer-column-title text-white text-[34px] font-bold mb-10">

              Company

            </h4>

            <ul className="flex flex-col gap-6">

              <li>

                <a
                  href="#"
                  className="text-[#d0d0d0] text-[24px] hover:text-[#ab0418] transition-all duration-300"
                >

                  About Us

                </a>

              </li>

              <li>

                <a
                  href="#"
                  className="text-[#d0d0d0] text-[24px] hover:text-[#ab0418] transition-all duration-300"
                >

                  Our Team

                </a>

              </li>

              <li>

                <a
                  href="#"
                  className="text-[#d0d0d0] text-[24px] hover:text-[#ab0418] transition-all duration-300"
                >

                  Our Portfolio

                </a>

              </li>

              <li>

                <a
                  href="#"
                  className="text-[#d0d0d0] text-[24px] hover:text-[#ab0418] transition-all duration-300 flex items-center gap-3"
                >

                  Careers

                  <span className="px-3 py-1 rounded-full bg-[#ab0418] text-white text-[12px] font-semibold">

                    Hiring

                  </span>

                </a>

              </li>

              <li>

                <a
                  href="#"
                  className="text-[#d0d0d0] text-[24px] hover:text-[#ab0418] transition-all duration-300"
                >

                  Contact Us

                </a>

              </li>

            </ul>

          </div>

          {/* ====================================
              SOLUTIONS
          ==================================== */}

          <div className="footer-links-column">

            <h4 className="footer-column-title text-white text-[34px] font-bold mb-10">

              Our Solutions

            </h4>

            <ul className="flex flex-col gap-6">

              <li>

                <a
                  href="#"
                  className="text-[#d0d0d0] text-[24px] hover:text-[#ab0418] transition-all duration-300"
                >

                  App Application

                </a>

              </li>

              <li>

                <a
                  href="#"
                  className="text-[#d0d0d0] text-[24px] hover:text-[#ab0418] transition-all duration-300"
                >

                  Web Development

                </a>

              </li>

              <li>

                <a
                  href="#"
                  className="text-[#d0d0d0] text-[24px] hover:text-[#ab0418] transition-all duration-300"
                >

                  UI/UX Design

                </a>

              </li>

              <li>

                <a
                  href="#"
                  className="text-[#d0d0d0] text-[24px] hover:text-[#ab0418] transition-all duration-300"
                >

                  Cyber Security

                </a>

              </li>

              <li>

                <a
                  href="#"
                  className="text-[#d0d0d0] text-[24px] hover:text-[#ab0418] transition-all duration-300"
                >

                  Cloud Service

                </a>

              </li>

            </ul>

          </div>

        </div>

        {/* ====================================
            SOCIAL LINKS
        ==================================== */}

        {/* <div className="footer-social-links-wrapper flex flex-wrap justify-center xl:justify-end items-center gap-6 md:gap-10 pt-[70px] pb-[60px]">

          <a
            href="#"
            className="text-[#8d8d8d] hover:text-white text-[24px] font-medium transition-all duration-300"
          >

            Dribbble

          </a>

          <span className="text-[#555]">•</span>

          <a
            href="#"
            className="text-[#8d8d8d] hover:text-white text-[24px] font-medium transition-all duration-300"
          >

            Behance

          </a>

          <span className="text-[#555]">•</span>

          <a
            href="#"
            className="text-[#8d8d8d] hover:text-white text-[24px] font-medium transition-all duration-300"
          >

            Pinterest

          </a>

          <span className="text-[#555]">•</span>

          <a
            href="#"
            className="text-[#8d8d8d] hover:text-white text-[24px] font-medium transition-all duration-300"
          >

            Facebook

          </a>

        </div> */}

        {/* ====================================
            LOCATION AREA
        ==================================== */}

        <div className="footer-location-area-wrapper border-t border-[#23252a] pt-[55px] pb-[45px]">

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[50px]">

            {/* LOGO */}

            <div>

              <h2 className="text-white text-[58px] font-bold leading-none mb-3">

                spice<span className="text-[#ab0418]">tree</span>

              </h2>

              <p className="text-[#8d8d8d] text-[20px]">

                Digital Agency

              </p>

            </div>

            {/* MUMBAI */}

            <div>

              <h4 className="text-white text-[32px] font-bold mb-3">

                Mumbai

              </h4>

              <div className="w-[42px] h-[2px] bg-[#ab0418] mb-6"></div>

              <p className="text-[#8d8d8d] text-[18px] mb-2">

                Write to

              </p>

              <a
                href="mailto:info@spicetree.com"
                className="block text-white text-[22px] font-semibold mb-7 hover:text-[#ab0418] transition-all duration-300"
              >

                info@spicetree.com

              </a>

              <p className="text-[#8d8d8d] text-[18px] mb-2">

                Speak to us

              </p>

              <a
                href="tel:+919004811786"
                className="block text-white text-[22px] font-semibold hover:text-[#ab0418] transition-all duration-300"
              >

                +91 90048 11786

              </a>

            </div>

            {/* DUBAI */}

            <div>

              <h4 className="text-white text-[32px] font-bold mb-3">

                Dubai

              </h4>

              <div className="w-[42px] h-[2px] bg-[#ab0418] mb-6"></div>

              <p className="text-[#8d8d8d] text-[18px] mb-2">

                Write to

              </p>

              <a
                href="mailto:dubai@spicetree.com"
                className="block text-white text-[22px] font-semibold mb-7 hover:text-[#ab0418] transition-all duration-300"
              >

                dubai@spicetree.com

              </a>

              <p className="text-[#8d8d8d] text-[18px] mb-2">

                Speak to us

              </p>

              <a
                href="tel:+971551500107"
                className="block text-white text-[22px] font-semibold hover:text-[#ab0418] transition-all duration-300"
              >

                +971 5515 00107

              </a>

            </div>

            {/* BANGALORE */}

            <div>

              <h4 className="text-white text-[32px] font-bold mb-3">

                Bangalore

              </h4>

              <div className="w-[42px] h-[2px] bg-[#ab0418] mb-6"></div>

              <p className="text-[#8d8d8d] text-[18px] mb-2">

                Write to

              </p>

              <a
                href="mailto:bangalore@spicetree.com"
                className="block text-white text-[22px] font-semibold mb-7 hover:text-[#ab0418] transition-all duration-300"
              >

                bangalore@spicetree.com

              </a>

              <p className="text-[#8d8d8d] text-[18px] mb-2">

                Speak to us

              </p>

              <a
                href="tel:+919741233599"
                className="block text-white text-[22px] font-semibold hover:text-[#ab0418] transition-all duration-300"
              >

                +91 97412 33599

              </a>

            </div>

          </div>

        </div>

        {/* ====================================
            BOTTOM AREA
        ==================================== */}

        <div className="footer-bottom-wrapper border-t border-[#23252a] pt-[30px] flex flex-col lg:flex-row items-center justify-between gap-7">

          {/* SOCIAL */}

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-[20px]">

            <span className="text-white font-medium">

              Connect with us

            </span>

            <a href="#" className="text-[#d0d0d0] hover:text-[#ab0418] transition-all duration-300">

              In.

            </a>

            <a href="#" className="text-[#d0d0d0] hover:text-[#ab0418] transition-all duration-300">

              Fb.

            </a>

            <a href="#" className="text-[#d0d0d0] hover:text-[#ab0418] transition-all duration-300">

              Ln.

            </a>

            <a href="#" className="text-[#d0d0d0] hover:text-[#ab0418] transition-all duration-300">

              X.

            </a>

            <a href="#" className="text-[#d0d0d0] hover:text-[#ab0418] transition-all duration-300">

              Yt.

            </a>

            <span className="text-[#555]">|</span>

            <a href="#" className="text-[#d0d0d0] hover:text-[#ab0418] transition-all duration-300">

              Privacy Policy

            </a>

          </div>

          {/* COPYRIGHT */}

          <p className="text-[#d0d0d0] text-[18px] text-center lg:text-right">

            © 2026 Spicetree. All Rights Reserved.

          </p>

        </div>

      </LayoutWrapper>

    </footer>

  )
}

export default Footer
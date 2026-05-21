// src/components/home/ContactTalkSection.jsx

import React from 'react'

import LayoutWrapper from '../common/LayoutWrapper'
import SectionLabel from '../common/SectionLabel'

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6'

function ContactTalkSection() {

  return (

    <section className="contact-talk-section-main relative overflow-hidden bg-[#f5f3ee] py-[90px] md:py-[90px]">

      {/* ====================================
          LAYOUT WRAPPER
      ==================================== */}

      <LayoutWrapper>

        {/* ====================================
            MAIN CONTENT
        ==================================== */}

        <div className="contact-talk-content-wrapper flex flex-col xl:flex-row xl:items-center xl:justify-between gap-16">

          {/* ====================================
              LEFT SIDE
          ==================================== */}

          <div className="contact-talk-left-side max-w-[900px] w-full">

            {/* ====================================
                TITLE
            ==================================== */}

            <h2 className="contact-talk-main-title text-[58px] sm:text-[80px] md:text-[120px] xl:text-[120px] font-extrabold leading-[1.2] tracking-[-5px] text-[#17181a] mb-8">

              Let’s TALK

            </h2>

            {/* ====================================
                CONTENT
            ==================================== */}

            <div className="contact-talk-bottom-content">

              <div className="contact-talk-description-wrapper max-w-[620px] xl:ml-[320px]">

                {/* DESCRIPTION */}

                <p className="contact-talk-description text-center xl:text-left text-[22px] md:text-[28px] leading-[1.7] font-medium text-[#5c5c5c] mb-12">

                  Crafting a contact text for a digital agency involves providing essential information for potential clients or collaborators to reach out.

                </p>

                {/* ====================================
                    SOCIAL WRAPPER
                ==================================== */}

                <div className="contact-talk-social-wrapper flex flex-wrap items-center justify-center xl:justify-start gap-6">

                  {/* LABEL */}

                  <div className="contact-talk-social-label-wrapper flex items-center gap-4">

                    <h5 className="contact-talk-social-label text-[24px] mb-4 font-semibold text-[#17181a] whitespace-nowrap">

                      Connect Us

                    </h5>

          <SectionLabel
  textColor="#000"
  lineColor="#ab0418"
  className="mb-4"
/>

                  </div>

                  {/* ICONS */}

                  <div className="contact-talk-social-icons flex items-center gap-3">

                    <a
                      href="#"
                      className="contact-talk-social-icon w-[46px] h-[46px] rounded-full border border-[#d9d9d9] flex items-center justify-center text-[#17181a] hover:bg-[#ab0418] hover:text-white hover:border-[#ab0418] transition-all duration-500"
                    >

                      <FaFacebookF />

                    </a>

                    <a
                      href="#"
                      className="contact-talk-social-icon w-[46px] h-[46px] rounded-full border border-[#d9d9d9] flex items-center justify-center text-[#17181a] hover:bg-[#ab0418] hover:text-white hover:border-[#ab0418] transition-all duration-500"
                    >

                      <FaXTwitter />

                    </a>

                    <a
                      href="#"
                      className="contact-talk-social-icon w-[46px] h-[46px] rounded-full border border-[#d9d9d9] flex items-center justify-center text-[#17181a] hover:bg-[#ab0418] hover:text-white hover:border-[#ab0418] transition-all duration-500"
                    >

                      <FaLinkedinIn />

                    </a>

                    <a
                      href="#"
                      className="contact-talk-social-icon w-[46px] h-[46px] rounded-full border border-[#d9d9d9] flex items-center justify-center text-[#17181a] hover:bg-[#ab0418] hover:text-white hover:border-[#ab0418] transition-all duration-500"
                    >

                      <FaInstagram />

                    </a>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* ====================================
              RIGHT SIDE
          ==================================== */}

          <div className="contact-talk-right-side flex justify-center xl:justify-end">

            <button className="contact-talk-circle-button w-[190px] h-[190px] rounded-full bg-[#ece8e8] hover:bg-[#ab0418] group transition-all duration-500 flex flex-col items-center justify-center">

              <span className="text-[30px] text-[#17181a] group-hover:text-white transition-all duration-500 mb-2">

                ↗

              </span>

              <span className="text-[18px] md:text-[22px] font-semibold leading-[1.4] text-center text-[#17181a] group-hover:text-white transition-all duration-500">

                Contact

                <br />

                Now

              </span>

            </button>

          </div>

        </div>

      </LayoutWrapper>

    </section>

  )
}

export default ContactTalkSection
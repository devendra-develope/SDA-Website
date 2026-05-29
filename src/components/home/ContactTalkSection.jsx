// src/components/home/ContactTalkSection.jsx

import React from 'react'

import LayoutWrapper from '../common/LayoutWrapper'
import SectionLabel from '../common/SectionLabel'
import { FaArrowUp } from "react-icons/fa";

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

  {/* LABEL + ARROW */}

  <div className="contact-talk-social-label-wrapper flex items-center gap-5">

    <h5 className="contact-talk-social-label text-[24px] font-semibold text-[#17181a] leading-none whitespace-nowrap">

      Connect Us

    </h5>

    <SectionLabel
      textColor="#000"
      lineColor="#ab0418"
      className="!mb-0 relative top-[2px]"
    />

  </div>

  {/* ICONS */}

  <div className="contact-talk-social-icons flex items-center gap-3">

    <a
      href="#"
      className="contact-talk-social-icon w-[46px] h-[46px] rounded-full border border-[#d9d9d9] flex items-center justify-center text-[#17181a] text-[16px] hover:bg-[#ab0418] hover:text-white hover:border-[#ab0418] transition-all duration-500"
    >
      <FaFacebookF />
    </a>

    <a
      href="#"
      className="contact-talk-social-icon w-[46px] h-[46px] rounded-full border border-[#d9d9d9] flex items-center justify-center text-[#17181a] text-[16px] hover:bg-[#ab0418] hover:text-white hover:border-[#ab0418] transition-all duration-500"
    >
      <FaXTwitter />
    </a>

    <a
      href="#"
      className="contact-talk-social-icon w-[46px] h-[46px] rounded-full border border-[#d9d9d9] flex items-center justify-center text-[#17181a] text-[16px] hover:bg-[#ab0418] hover:text-white hover:border-[#ab0418] transition-all duration-500"
    >
      <FaLinkedinIn />
    </a>

    <a
      href="#"
      className="contact-talk-social-icon w-[46px] h-[46px] rounded-full border border-[#d9d9d9] flex items-center justify-center text-[#17181a] text-[16px] hover:bg-[#ab0418] hover:text-white hover:border-[#ab0418] transition-all duration-500"
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

<button
  className="
    contact-talk-circle-button
    group
    relative
    w-[150px]
    h-[150px]
    rounded-full
    bg-[#17181a]
    overflow-hidden
    hover:scale-105
    transition-all
    duration-500
  "
>

  {/* HOVER BG */}

  <div
    className="
      absolute
      inset-0
      bg-[#ab0418]
      rounded-full
      scale-0
      group-hover:scale-100
      transition-all
      duration-500
    "
  />

  {/* CONTENT */}

  <div
    className="
      relative
      z-10
      flex
      flex-col
      items-center
      justify-center
      h-full
      text-white
    "
  >

    <FaArrowUp
      className="
        text-[20px]
        rotate-45
        mb-3
        text-current
        group-hover:-translate-y-1
        transition-all
        duration-300
      "
    />

    <span
      className="
        text-[20px]
        md:text-[24px]
        font-bold
        leading-[1.2]
        text-center
        text-current
      "
    >
      Contact
      <br />
      Now
    </span>

  </div>

</button>

          </div>

        </div>

      </LayoutWrapper>

    </section>

  )
}

export default ContactTalkSection
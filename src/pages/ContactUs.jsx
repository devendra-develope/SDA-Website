// src/pages/ContactUs.jsx

import React from 'react'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

import LayoutWrapper from '../components/common/LayoutWrapper'

function ContactUs() {

  return (

    <>

      {/* ====================================
          HEADER
      ==================================== */}

      <Header />

      <main className="bg-[#f5f3ee] overflow-hidden">

        {/* ====================================
            BREADCRUMB
        ==================================== */}

        <section className="relative h-[520px] overflow-hidden">

          {/* BACKGROUND IMAGE */}

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1920&auto=format&fit=crop"
            alt="Contact Banner"
            className="w-full h-full object-cover"
          />

          {/* OVERLAY */}

          <div className="absolute inset-0 bg-black/60"></div>

          {/* CONTENT */}

          <div className="absolute inset-0 flex items-center">

            <LayoutWrapper className="!max-w-full !mx-0">

              <div className="w-full grid grid-cols-1">

                <div className="text-left">

                  {/* TOP LABEL */}

                  <p className="uppercase tracking-[4px] text-white/70 text-[13px] mb-6">

                    Get In Touch

                  </p>

                  {/* TITLE */}

                  <h1 className="text-white text-[60px] md:text-[110px] leading-[0.95] tracking-[-4px] font-bold mb-6">

                    Contact Us

                  </h1>

                  {/* BREADCRUMB */}

                  <div className="flex items-center gap-3 text-white text-[18px]">

                    <a
                      href="/"
                      className="text-white/70 hover:text-white transition-all duration-300"
                    >

                      Home

                    </a>

                    <span>/</span>

                    <span>Contact Us</span>

                  </div>

                </div>

              </div>

            </LayoutWrapper>

          </div>

        </section>

        {/* ====================================
            CONTACT SECTION
        ==================================== */}

        <section className="py-[120px]">

          <LayoutWrapper>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-[100px]">

              {/* LEFT */}

              <div>

                {/* TOP LABEL */}

                <p className="uppercase tracking-[4px] text-[#999] text-[12px] mb-8">

                  Contact Information

                </p>

                {/* TITLE */}

                <h2 className="text-[#17181a] text-[42px] md:text-[72px] leading-[1.05] tracking-[-3px] font-semibold mb-10">

                  Let’s discuss your next creative project.

                </h2>

                {/* DESCRIPTION */}

                <p className="text-[#666] text-[18px] leading-[1.9] mb-14 max-w-[650px]">

                  We help brands grow through creative strategy, digital
                  marketing, branding, website development, and innovative
                  digital experiences tailored for modern businesses.

                </p>

                {/* CONTACT DETAILS */}

                <div className="space-y-10">

                  {/* EMAIL */}

                  <div>

                    <p className="uppercase tracking-[3px] text-[#999] text-[12px] mb-3">

                      Email Address

                    </p>

                    <a
                      href="mailto:hello@spicetree.com"
                      className="text-[#17181a] text-[26px] md:text-[34px] font-semibold hover:text-[#ab0418] transition-all duration-300"
                    >

                      hello@spicetree.com

                    </a>

                  </div>

                  {/* PHONE */}

                  <div>

                    <p className="uppercase tracking-[3px] text-[#999] text-[12px] mb-3">

                      Phone Number

                    </p>

                    <a
                      href="tel:+919876543210"
                      className="text-[#17181a] text-[26px] md:text-[34px] font-semibold hover:text-[#ab0418] transition-all duration-300"
                    >

                      +91 98765 43210

                    </a>

                  </div>

                  {/* ADDRESS */}

                  <div>

                    <p className="uppercase tracking-[3px] text-[#999] text-[12px] mb-3">

                      Office Address

                    </p>

                    <h4 className="text-[#17181a] text-[24px] leading-[1.6] font-medium">

                      Mumbai, Dubai & Bangalore

                    </h4>

                  </div>

                </div>

              </div>

              {/* RIGHT */}

              <div className="bg-white p-8 md:p-12">

                {/* FORM TITLE */}

                <h3 className="text-[#17181a] text-[36px] md:text-[48px] leading-[1.1] font-semibold mb-12">

                  Send us a message

                </h3>

                {/* FORM */}

                <form className="space-y-8">

                  {/* NAME */}

                  <div>

                    <label className="block uppercase tracking-[3px] text-[#999] text-[12px] mb-4">

                      Full Name

                    </label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full border-b border-[#d8d8d8] bg-transparent pb-5 outline-none text-[#17181a] text-[18px] placeholder:text-[#999]"
                    />

                  </div>

                  {/* EMAIL */}

                  <div>

                    <label className="block uppercase tracking-[3px] text-[#999] text-[12px] mb-4">

                      Email Address

                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full border-b border-[#d8d8d8] bg-transparent pb-5 outline-none text-[#17181a] text-[18px] placeholder:text-[#999]"
                    />

                  </div>

                  {/* PHONE */}

                  <div>

                    <label className="block uppercase tracking-[3px] text-[#999] text-[12px] mb-4">

                      Phone Number

                    </label>

                    <input
                      type="text"
                      placeholder="Enter your phone number"
                      className="w-full border-b border-[#d8d8d8] bg-transparent pb-5 outline-none text-[#17181a] text-[18px] placeholder:text-[#999]"
                    />

                  </div>

                  {/* MESSAGE */}

                  <div>

                    <label className="block uppercase tracking-[3px] text-[#999] text-[12px] mb-4">

                      Your Message

                    </label>

                    <textarea
                      rows="5"
                      placeholder="Write your message"
                      className="w-full border-b border-[#d8d8d8] bg-transparent pb-5 outline-none text-[#17181a] text-[18px] placeholder:text-[#999] resize-none"
                    ></textarea>

                  </div>

                  {/* BUTTON */}

                  <button
                    type="submit"
                    className="bg-[#17181a] hover:bg-[#ab0418] text-white px-12 py-5 uppercase tracking-[3px] text-[13px] transition-all duration-300"
                  >

                    Send Message

                  </button>

                </form>

              </div>

            </div>

          </LayoutWrapper>

        </section>

      </main>

      {/* ====================================
          FOOTER
      ==================================== */}

      <Footer />

    </>

  )
}

export default ContactUs
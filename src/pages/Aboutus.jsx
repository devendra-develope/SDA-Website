// src/pages/AboutUs.jsx

import React from 'react'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

import LayoutWrapper from '../components/common/LayoutWrapper'

function AboutUs() {

  const awardsData = [
    {
      title: 'Awwwards',
      year: '2019',
      description:
        'Recognized for outstanding website creativity and modern digital experiences.',
    },
    {
      title: 'Site of the Day',
      year: '2019',
      description:
        'Awarded for delivering premium UI/UX and innovative design solutions.',
    },
    {
      title: 'Best Design Awards',
      year: '2022',
      description:
        'Honored for creative branding and visually engaging user experiences.',
    },
    {
      title: 'Awwwards',
      year: '2023',
      description:
        'Recognized again for high-quality digital product execution and innovation.',
    },
  ]

  const blogsData = [
    {
      image:
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop',
      category: 'Art',
      title: 'Play to Your Strengths and Supercharge Your Business',
    },
    {
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
      category: 'Marketing',
      title: '5 Steps to Create an Outstanding Marketing Plan',
    },
    {
      image:
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop',
      category: 'Copywriting',
      title: '10 Content Proofreading Tips to Catch More Avoidable Goofs',
    },
  ]

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
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1920&auto=format&fit=crop"
            alt="About Banner"
            className="w-full h-full object-cover"
          />

          {/* OVERLAY */}

          <div className="absolute inset-0 bg-black/60"></div>

          {/* CONTENT */}

          <div className="absolute inset-0 flex items-center">

            <LayoutWrapper className="!max-w-full !mx-0">

              <div className="w-full grid grid-cols-1">

                <div className="text-left">

                  <h1 className="text-white text-[60px] md:text-[110px] leading-[0.95] tracking-[-4px] font-bold mb-6">

                    About Us

                  </h1>

                  <div className="flex items-center gap-3 text-white text-[18px]">

                    <a
                      href="/"
                      className="text-white/70 hover:text-white transition-all duration-300"
                    >

                      Home

                    </a>

                    <span>/</span>

                    <span>About Us</span>

                  </div>

                </div>

              </div>

            </LayoutWrapper>

          </div>

        </section>

        {/* ====================================
            STORY SECTION
        ==================================== */}

        <section className="py-[120px]">

          <LayoutWrapper>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-[80px]">

              {/* LEFT */}

              <div>

                <p className="uppercase tracking-[4px] text-[#999] text-[12px] mb-8">

                  Our Story

                </p>

                <h2 className="text-[#17181a] text-[42px] md:text-[72px] leading-[1.05] tracking-[-3px] font-semibold">

                  Writing content like you’ve never had before

                </h2>

              </div>

              {/* RIGHT */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* FIRST PARA */}

                <p className="text-[#666] text-[18px] leading-[1.9]">

                  <span className="float-left text-[#17181a] text-[90px] leading-none font-semibold mr-5 mt-2">

                    S

                  </span>

                  picetree helps businesses grow with strategic branding,
                  creative design, digital marketing, and web development
                  solutions tailored for modern brands.

                </p>

                {/* SECOND PARA */}

                <p className="text-[#666] text-[18px] leading-[1.9]">

                  Our team focuses on combining creativity with performance to
                  create meaningful digital experiences that drive long-term
                  growth and customer engagement.

                </p>

              </div>

            </div>

            {/* ====================================
                IMAGE GRID
            ==================================== */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-[120px]">

              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
                alt=""
                className="w-full h-[380px] object-cover"
              />

              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop"
                alt=""
                className="w-full h-[320px] object-cover mt-[60px]"
              />

              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop"
                alt=""
                className="w-full h-[380px] object-cover"
              />

              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1000&auto=format&fit=crop"
                alt=""
                className="w-full h-[320px] object-cover mt-[60px]"
              />

            </div>



          </LayoutWrapper>

        </section>

        {/* ====================================
            AWARDS SECTION
        ==================================== */}

        <section className="bg-[#efefef] py-[120px]">

          <LayoutWrapper>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-[100px]">

              {/* LEFT */}

              <div>

                <p className="uppercase tracking-[4px] text-[#999] text-[12px] mb-8">

                  Honors & Awards

                </p>

                <h2 className="text-[#5b6166] text-[42px] md:text-[72px] leading-[1.05] tracking-[-3px] font-semibold">

                  We do world-class work. Check out our Awards.

                </h2>

              </div>

              {/* RIGHT */}

              <div>

                <p className="text-[#777] text-[18px] leading-[1.9] mb-12">

                  We continuously push boundaries in creativity, technology, and
                  performance-driven design to deliver premium digital
                  experiences for brands worldwide.

                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                  {awardsData.map((item, index) => (

                    <div
                      key={index}
                      className="border-t border-[#d8d8d8] pt-8"
                    >

                      <div className="flex items-center justify-between mb-4">

                        <h3 className="text-[#17181a] text-[24px] font-semibold">

                          {item.title}

                        </h3>

                        <span className="text-[#c6a15b] text-[16px]">

                          {item.year}

                        </span>

                      </div>

                      <p className="text-[#666] leading-[1.8]">

                        {item.description}

                      </p>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </LayoutWrapper>

        </section>

        {/* ====================================
            CTA SECTION
        ==================================== */}

        <section className="bg-[#d89c2d] py-[50px]">

          <LayoutWrapper>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

              <h2 className="text-[#17181a] text-[30px] md:text-[48px] font-semibold tracking-[-2px]">

                We make the creative solutions for modern brands

              </h2>

              <button className="bg-[#17181a] text-white px-10 py-5 uppercase tracking-[2px] text-[13px] hover:bg-black transition-all duration-300">

                Contact Us

              </button>

            </div>

          </LayoutWrapper>

        </section>

        {/* ====================================
            BLOG SECTION
        ==================================== */}

        <section className="py-[120px]">

          <LayoutWrapper>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-[80px] mb-[80px]">

              {/* LEFT */}

              <div>

                <p className="uppercase tracking-[4px] text-[#999] text-[12px] mb-8">

                  Our Blog

                </p>

                <h2 className="text-[#5b6166] text-[42px] md:text-[72px] leading-[1.05] tracking-[-3px] font-semibold">

                  Most popular blog publication.

                </h2>

              </div>

              {/* RIGHT */}

              <div className="flex flex-col justify-between">

                <p className="text-[#777] text-[18px] leading-[1.9] max-w-[600px]">

                  Explore valuable insights, marketing strategies, branding
                  ideas, and creative inspiration from our latest blogs.

                </p>

                <button className="mt-10 xl:mt-0 uppercase tracking-[3px] text-[13px] font-semibold text-[#17181a]">

                  VIEW ALL →

                </button>

              </div>

            </div>

            {/* BLOG CARDS */}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

              {blogsData.map((item, index) => (

                <div key={index} className="group">

                  <div className="overflow-hidden">

                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-[420px] object-cover group-hover:scale-110 transition-all duration-700"
                    />

                  </div>

                  <div className="pt-8">

                    <p className="uppercase tracking-[3px] text-[#c6a15b] text-[12px] mb-5">

                      {item.category} • August 15, 2023

                    </p>

                    <h3 className="text-[#17181a] text-[32px] leading-[1.3] font-semibold">

                      {item.title}

                    </h3>

                  </div>

                </div>

              ))}

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

export default AboutUs
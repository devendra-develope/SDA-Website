// src/components/home/Hero.jsx

import React, { useEffect, useState } from 'react'
import {
  FaArrowRight,
} from 'react-icons/fa'

import bannerDotPatternBg from '../../assets/banner-dot-pattern-bg.png'

function Hero() {

  /* ====================================
      TYPING WORDS
  ==================================== */

  const words = [
    'progressive',
    'dynamic',
    'innovative',
    'evolving',
    'pioneering',
  ]

  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  const [typedText, setTypedText] = useState('')

  /* ====================================
      TYPING EFFECT
  ==================================== */

  useEffect(() => {

    let charIndex = 0

    const currentWord = words[currentWordIndex]

    const typingInterval = setInterval(() => {

      setTypedText(currentWord.slice(0, charIndex + 1))

      charIndex++

      if (charIndex === currentWord.length) {

        clearInterval(typingInterval)

        setTimeout(() => {

          setTypedText('')

          setCurrentWordIndex((prev) =>
            prev === words.length - 1 ? 0 : prev + 1
          )

        }, 1500)

      }

    }, 110)

    return () => clearInterval(typingInterval)

  }, [currentWordIndex])

  return (

    <section
      className="hero-section relative min-h-screen overflow-hidden bg-[#f5f3ee]"
      style={{
        backgroundImage: `url(${bannerDotPatternBg})`,
      }}
    >

      {/* ====================================
          BACKGROUND GRADIENT
      ==================================== */}

      <div className="hero-gradient absolute top-[-250px] right-[-250px] w-[700px] h-[700px] bg-[#b1281e]/10 rounded-full blur-[140px]"></div>

      <div className="hero-gradient absolute bottom-[-300px] left-[-200px] w-[600px] h-[600px] bg-[#b1281e]/10 rounded-full blur-[140px]"></div>

      {/* ====================================
          OVERLAY
      ==================================== */}

      <div className="hero-overlay absolute inset-0 bg-[#f5f3ee]/80"></div>

      {/* ====================================
          MAIN CONTAINER
      ==================================== */}

      <div className="hero-container relative z-10 max-w-[1500px] mx-auto px-5 md:px-10 xl:px-16 min-h-screen flex items-center pt-[170px] md:pt-[200px] pb-20">

        <div className="hero-content-wrapper w-full grid grid-cols-1 xl:grid-cols-[1fr_180px] gap-16 items-end">

          {/* ====================================
              LEFT CONTENT
          ==================================== */}

          <div className="hero-left-content">

            {/* ====================================
                TOP LABEL
            ==================================== */}

            <div className="hero-top-label flex items-end gap-5 mb-10 animate-fadeUp">

              <div className="hero-top-left flex items-end gap-4">

                <span className="hero-top-number text-[28px] md:text-[40px] font-bold leading-none text-black">

                  01.

                </span>

                <div className="hero-top-line w-[70px] h-[2px] bg-black mb-[6px]"></div>

              </div>

              <h5 className="hero-top-text text-[15px] md:text-[18px] font-semibold text-black leading-none">

                Top digital design agency in Mumbai, Dubai, and Bangalore

              </h5>

            </div>

            {/* ====================================
                MAIN HEADING
            ==================================== */}

            <h1 className="hero-heading max-w-[1200px] text-[52px] sm:text-[72px] md:text-[96px] xl:text-[130px] font-black leading-[0.92] tracking-[-5px] text-black mb-12 animate-fadeUp delay-100">

              Driving brands
              <br />

              towards{' '}

              <span className="hero-typing-text relative inline-flex items-center min-w-[220px] md:min-w-[420px] text-[#b1281e]">

                {typedText}

                <span className="hero-cursor ml-1 w-[3px] h-[0.9em] bg-[#b1281e] animate-pulse"></span>

              </span>

              <br />

              digital paths.

            </h1>

            {/* ====================================
                PARAGRAPH
            ==================================== */}

            <p className="hero-description max-w-[880px] text-[18px] md:text-[24px] xl:text-[28px] leading-[1.6] font-medium text-[#17181a] mb-14 animate-fadeUp delay-200">

              The{' '}

              <span className="hero-highlight-text text-[#b1281e] underline underline-offset-4">

                best digital marketing agency

              </span>{' '}

              in{' '}

              <span className="hero-highlight-text text-[#b1281e] underline underline-offset-4">

                Mumbai, Dubai and Bangalore

              </span>{' '}

              for digital marketing, web design and development, and creative services.

            </p>

            {/* ====================================
                BUTTON WRAPPER
            ==================================== */}

            <div className="hero-button-wrapper flex flex-col sm:flex-row gap-5 items-start animate-fadeUp delay-300">

              {/* MAIN BUTTON */}

              <button className="hero-main-button group relative overflow-hidden bg-[#b1281e] hover:bg-[#981f17] transition-all duration-500 rounded-[18px] px-8 md:px-10 py-5 md:py-6 shadow-[0_20px_60px_rgba(177,40,30,0.25)]">

                <div className="hero-main-button-content flex items-center gap-6 relative z-10">

                  <div className="hero-main-button-text text-left">

                    <h4 className="text-[20px] md:text-[24px] font-bold leading-none text-white mb-2">

                      Let&apos;s grow together

                    </h4>

                    <p className="text-[15px] md:text-[17px] font-medium text-white/90">

                      Connect with us

                    </p>

                  </div>

                  <div className="hero-main-button-icon w-[52px] h-[52px] rounded-full border border-white/30 flex items-center justify-center group-hover:translate-x-1 transition-all duration-300">

                    <FaArrowRight className="text-white text-[18px]" />

                  </div>

                </div>

              </button>

            </div>

          </div>

          {/* ====================================
              RIGHT SIDE FLOATING CARD
          ==================================== */}

          <div className="hero-right-content hidden xl:flex justify-end animate-fadeUp delay-500">

            <div className="hero-floating-card backdrop-blur-md bg-white/70 border border-white/50 rounded-[24px] p-8 shadow-[0_15px_50px_rgba(0,0,0,0.08)]">

              <div className="hero-floating-card-top flex items-center gap-4 mb-8">

                <div className="w-[14px] h-[14px] rounded-full bg-[#b1281e]"></div>

                <span className="text-[15px] font-semibold text-[#17181a]">

                  Digital Innovation

                </span>

              </div>

              <div className="hero-floating-stats flex flex-col gap-8">

                <div>

                  <h3 className="text-[52px] font-black leading-none text-[#b1281e] mb-2">

                    250+

                  </h3>

                  <p className="text-[16px] font-medium text-[#17181a]">

                    Successful Projects

                  </p>

                </div>

                <div>

                  <h3 className="text-[52px] font-black leading-none text-[#b1281e] mb-2">

                    10+

                  </h3>

                  <p className="text-[16px] font-medium text-[#17181a]">

                    Years Experience

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ====================================
          CUSTOM STYLE
      ==================================== */}

      <style>
        {`
          @keyframes fadeUp {

            0% {
              opacity: 0;
              transform: translateY(60px);
            }

            100% {
              opacity: 1;
              transform: translateY(0);
            }

          }

          .animate-fadeUp {

            animation: fadeUp 1s ease forwards;

          }

          .delay-100 {
            animation-delay: 0.1s;
          }

          .delay-200 {
            animation-delay: 0.2s;
          }

          .delay-300 {
            animation-delay: 0.3s;
          }

          .delay-500 {
            animation-delay: 0.5s;
          }
        `}
      </style>

    </section>

  )
}

export default Hero
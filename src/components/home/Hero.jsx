// src/components/home/Hero.jsx

import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

import LayoutWrapper from '../common/LayoutWrapper'
import SectionLabel from '../common/SectionLabel'

import bannerDotPatternBg from '../../assets/banner-dot-pattern-bg.png'

function Hero() {

  /* ====================================
      TYPING WORDS
  ==================================== */

  const words = [
    'Digital',
    'Creative',
    'Modern',
    'Innovative',
    'Strategic',
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

        }, 1400)

      }

    }, 120)

    return () => clearInterval(typingInterval)

  }, [currentWordIndex])

  return (

    <section
      className="
        hero-section
        relative
        overflow-hidden
        bg-[#f5f3ee]
        min-h-screen
        z-[1]
      "
    // style={{
    //   backgroundImage: `url(${bannerDotPatternBg})`,
    // }}
    >

      <LayoutWrapper className="pt-[160px] md:pt-[190px] pb-20">

        {/* ====================================
            TOP LABEL
        ==================================== */}
        <SectionLabel
          text="Top digital design agency in Mumbai, Dubai, and Bangalore"
          textColor="#000"
          lineColor="#ab0418"
        />


        {/* ====================================
            MAIN HEADING
        ==================================== */}

        <div className="hero-heading-wrapper mb-12 animate-fadeUp delay-100">

          <h1
            className="
              hero-main-heading
              text-[42px]
              sm:text-[48px]
              md:text-[48px]
              lg:text-[75px]
              xl:text-[94px]
              font-black
              leading-[0.9]
              tracking-tight
              text-[#17181a]
            "
          >

            CREATIVE{' '}

            <span
              className="
                hero-main-heading-light
                inline-block
                min-w-[220px]
                font-light
              "
            >
              {typedText}
            </span>

            <br />

            <span className="hero-main-heading-bottom">

              Agency.

            </span>

          </h1>

        </div>

        {/* ====================================
            BOTTOM WRAPPER
        ==================================== */}

        <div
          className="
            hero-bottom-wrapper
            grid
            grid-cols-1
            xl:grid-cols-2
            gap-14
            items-end
          "
        >

          {/* ====================================
              LEFT IMAGE
          ==================================== */}

          <div className="hero-image-wrapper relative animate-fadeUp delay-200">

            <div
              className="
                hero-image-shape
                relative
                overflow-hidden
                rounded-[60px]
              "
            >

              {/* LEFT RED BORDER */}

              <div
                className="
                  hero-image-left-border
                  absolute
                  left-0
                  top-0
                  w-[6px]
                  h-full
                  bg-[#ab0418]
                  z-10
                "
              ></div>

              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"
                alt="Creative Team"
                className="
                  hero-main-image
                  w-full
                  h-[320px]
                  md:h-[450px]
                  xl:h-[550px]
                  object-cover
                "
              />

            </div>

          </div>

          {/* ====================================
              RIGHT CONTENT
          ==================================== */}

          <div
            className="
              hero-right-content
              flex
              flex-col
              justify-end
              animate-fadeUp
              delay-300
              xl:pb-6
            "
          >

            {/* DESCRIPTION */}

            <p
              className="
                hero-description
                text-[19px]
                md:text-[24px]
                leading-[1.6]
                font-medium
                text-[#4d4d4d]
                mb-10
                max-w-[520px]
              "
            >


The {' '}
<span
                className="
                  hero-description-bold
                  font-bold
                  text-[#17181a]
                "
              >

best digital marketing agency in Mumbai, Dubai and Bangalore

              </span>{' '}

              for digital marketing, web design and development, and creative services.

            </p>

            {/* TAGS */}

            <div
              className="
                hero-tags-wrapper
                flex
                flex-wrap
                gap-4
                mb-12
              "
            >

              <div
                className="
                  hero-tag
                  hero-success-tag
                  px-6
                  py-3
                  rounded-full
                  border
                  border-[#d9d9d9]
                  bg-white
                  text-[15px]
                  md:text-[17px]
                  font-semibold
                  text-[#17181a]
                "
              >

                Success Rate — 90%

              </div>

              <div
                className="
                  hero-tag
                  hero-spotlight-tag
                  px-6
                  py-3
                  rounded-full
                  border
                  border-[#d9d9d9]
                  bg-white
                  text-[15px]
                  md:text-[17px]
                  font-semibold
                  text-[#17181a]
                  flex
                  items-center
                  gap-2
                "
              >

                Spotlight

                <span
                  className="
                    hero-spotlight-icon
                    text-[#ab0418]
                  "
                >
                  ▶
                </span>

              </div>

            </div>

            {/* BUTTON */}

            <button
              className="
                hero-explore-button
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
                  hero-explore-button-hover-bg
                  absolute
                  inset-0
                  bg-[#ab0418]
                  scale-0
                  group-hover:scale-100
                  rounded-full
                  transition-all
                  duration-500
                "
              ></div>

              {/* BUTTON CONTENT */}

              <div
                className="
                  hero-explore-button-content
                  relative
                  z-10
                  flex
                  flex-col
                  items-center
                  justify-center
                  h-full
                "
              >

                <FaArrowUp
                  className="
                    hero-explore-button-icon
                    text-white
                    text-[20px]
                    rotate-45
                    mb-3
                    group-hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                />

                <span
                  className="
                    hero-explore-button-text
                    text-white
                    text-[20px]
                    font-bold
                    leading-[1.2]
                    text-center
                  "
                >

                  Explore
                  <br />
                  Now

                </span>

              </div>

            </button>

          </div>

        </div>

      </LayoutWrapper>

      {/* ====================================
          ANIMATION STYLE
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

            opacity: 0;
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
        `}
      </style>

    </section>

  )

}

export default Hero
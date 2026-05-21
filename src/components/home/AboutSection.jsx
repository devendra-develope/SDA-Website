// src/components/home/AboutSection.jsx

import React, {
  useEffect,
  useRef,
  useState,
} from 'react'

import {
  FaArrowRight,
} from 'react-icons/fa'

import LayoutWrapper from '../common/LayoutWrapper'
import SectionLabel from '../common/SectionLabel'


import bannerDotPatternBg from '../../assets/banner-dot-pattern-bg.png'

function AboutSection() {

  /* ====================================
      SECTION REF
  ==================================== */

  const sectionRef = useRef(null)

  const counterRef = useRef(null)

  /* ====================================
      VISIBILITY
  ==================================== */

  const [isVisible, setIsVisible] = useState(false)

  const [counterVisible, setCounterVisible] = useState(false)

  /* ====================================
      COUNTER STATES
  ==================================== */

  const [expertCount, setExpertCount] = useState(0)

  const [projectCount, setProjectCount] = useState(0)

  const [clientCount, setClientCount] = useState(0)

  /* ====================================
      SECTION OBSERVER
  ==================================== */

  useEffect(() => {

    const observer = new IntersectionObserver(

      ([entry]) => {

        if (entry.isIntersecting) {

          setIsVisible(true)

        }

      },

      {
        threshold: 0.2,
      }

    )

    if (sectionRef.current) {

      observer.observe(sectionRef.current)

    }

    return () => {

      if (sectionRef.current) {

        observer.unobserve(sectionRef.current)

      }

    }

  }, [])

  /* ====================================
      COUNTER OBSERVER
  ==================================== */

  useEffect(() => {

    const counterObserver = new IntersectionObserver(

      ([entry]) => {

        if (entry.isIntersecting) {

          setCounterVisible(true)

        }

      },

      {
        threshold: 0.4,
      }

    )

    if (counterRef.current) {

      counterObserver.observe(counterRef.current)

    }

    return () => {

      if (counterRef.current) {

        counterObserver.unobserve(counterRef.current)

      }

    }

  }, [])

  /* ====================================
      COUNTER ANIMATION
  ==================================== */

  useEffect(() => {

    if (!counterVisible) return

    let expertStart = 0

    let projectStart = 0

    let clientStart = 0

    const expertInterval = setInterval(() => {

      expertStart += 1

      setExpertCount(expertStart)

      if (expertStart >= 20) {

        clearInterval(expertInterval)

      }

    }, 60)

    const projectInterval = setInterval(() => {

      projectStart += 1

      setProjectCount(projectStart)

      if (projectStart >= 2000) {

        clearInterval(projectInterval)

      }

    }, 5)

    const clientInterval = setInterval(() => {

      clientStart += 1

      setClientCount(clientStart)

      if (clientStart >= 50) {

        clearInterval(clientInterval)

      }

    }, 50)

    return () => {

      clearInterval(expertInterval)

      clearInterval(projectInterval)

      clearInterval(clientInterval)

    }

  }, [counterVisible])

  return (

    <section
      ref={sectionRef}
      className="
        about-section
        relative
        overflow-hidden
        bg-[#17181a]
        py-[90px]
      "
      style={{
        backgroundImage: `url(${bannerDotPatternBg})`,
      }}
    >

      {/* OVERLAY */}

      <div className="about-overlay absolute inset-0 bg-[#17181a]/95"></div>

      {/* CONTAINER */}

      <LayoutWrapper>

        <div className="about-container relative z-10">

          {/* ====================================
              SECTION HEADER
          ==================================== */}

          <div
            className={`
              about-section-header-wrapper
              mb-16
              transition-all
              duration-1000
              ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-[80px]'
              }
            `}
          >

            {/* ====================================
            TOP LABEL
        ==================================== */}
            <SectionLabel
              text="How we go about"
              textColor="#fff"
              lineColor="#ab0418"
            />

            {/* TITLE */}

            <div className="about-title-wrapper">

              <h2
                className="
                  about-title
                  text-[42px]
                  sm:text-[48px]
                  md:text-[64px]
                  xl:text-[70px]
                  font-bold
                  leading-[1.2]
                  tracking-[-3px]
                  text-white
                "
              >

                Strategic blueprint:
                <span
                  className="
                    about-title-accent
                    block
                    text-[#ab0418]
                  "
                >

                  Streamline planning
                </span>
                for outstanding results
              </h2>

            </div>

          </div>

          {/* ====================================
              MAIN CONTENT
          ==================================== */}

          <div
            className="
              about-content-wrapper
              grid
              grid-cols-1
              xl:grid-cols-[1.2fr_0.8fr]
              gap-16
              items-center
            "
          >

            {/* LEFT SIDE */}

            <div className="about-left-wrapper">

              {/* IMAGES */}

              <div
                className="
                  about-images-wrapper
                  flex
                  flex-col
                  sm:flex-row
                  gap-6
                "
              >

                {/* IMAGE 1 */}

                <div
                  className={`
                    about-image-card
                    overflow-hidden
                    rounded-[20px]
                    transition-all
                    duration-[1200ms]
                    delay-300
                    ${isVisible
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-[120px]'
                    }
                  `}
                >

                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                    alt="Team Work"
                    className="
                      about-image
                      w-full
                      h-[320px]
                      md:h-[420px]
                      object-cover
                      hover:scale-110
                      transition-all
                      duration-700
                    "
                  />

                </div>

                {/* IMAGE 2 */}

                <div
                  className={`
                    about-image-card-secondary
                    overflow-hidden
                    rounded-[20px]
                    mt-0
                    sm:mt-16
                    transition-all
                    duration-[1200ms]
                    delay-500
                    ${isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-[120px]'
                    }
                  `}
                >

                  <img
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop"
                    alt="Office"
                    className="
                      about-image
                      w-full
                      h-[320px]
                      md:h-[420px]
                      object-cover
                      hover:scale-110
                      transition-all
                      duration-700
                    "
                  />

                </div>

              </div>

            </div>

            {/* RIGHT SIDE */}

            <div
              className={`
                about-right-wrapper
                flex
                flex-col
                justify-center
                transition-all
                duration-[1200ms]
                delay-700
                ${isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-[120px]'
                }
              `}
            >

              {/* DESCRIPTION */}

              <div className="about-description-wrapper">

                <p
                  className="
                    about-description
                    text-[16px]
                    md:text-[20px]
                    leading-[1.8]
                    text-[#d0d0d0]
                    mb-10
                  "
                >

At Spicetree Digital Agency, “Growth for All, Above All” isn’t just a line, it’s the soul of our existence. It defines how we think, how we create, how we collaborate, and how we help brands rise. Our very name carries this philosophy at its core.



                </p>

              </div>

              {/* BUTTON */}

              <div className="about-button-wrapper mb-16">

                <button
                  className="
                    about-button
                    group
                    flex
                    items-center
                    gap-4
                    text-white
                    text-[20px]
                    font-semibold
                  "
                >

                  <span>

                    About More

                  </span>

                  <FaArrowRight className="group-hover:translate-x-2 transition-all duration-300" />

                </button>

              </div>

              {/* EXTRA ELEMENT */}

              <div
                className="
                  about-extra-wrapper
                  flex
                  items-center
                  justify-between
                "
              >

                {/* SIGNATURE */}

                <h4
                  className="
                    about-signature
                    text-[40px]
                    md:text-[60px]
                    font-light
                    italic
                    text-white
                    opacity-80
                  "
                >

                  natural

                </h4>

                {/* STAR */}

                <div
                  className="
                    about-star
                    text-[#ff6b35]
                    text-[120px]
                    md:text-[160px]
                    leading-none
                    animate-spin-slow
                  "
                >

                  ✱

                </div>

              </div>

            </div>

          </div>

          {/* ====================================
              COUNTER SECTION
          ==================================== */}

          <div
            ref={counterRef}
            className={`
              about-counter-wrapper
              border
              border-[#2f2f2f]
              overflow-hidden
              mt-20
              transition-all
              duration-[1500ms]
              ${counterVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-[100px]'
              }
            `}
          >

            <div className="about-counter-grid grid grid-cols-1 md:grid-cols-3">

              {/* ITEM 1 */}

              <div
                className="
                  about-counter-item
                  group
                  relative
                  p-8
                  md:p-10
                  border-b
                  md:border-b-0
                  md:border-r
                  border-[#2f2f2f]
                  overflow-hidden
                "
              >

                <div
                  className="
                    about-counter-hover-bg
                    absolute
                    inset-0
                    bg-[#ab0418]
                    translate-y-full
                    group-hover:translate-y-0
                    transition-all
                    duration-500
                  "
                ></div>

                <div className="about-counter-content relative z-10">

                  <h3
                    className="
                      about-counter-number
                      text-[55px]
                      md:text-[70px]
                      font-bold
                      text-white
                      leading-none
                      mb-4
                    "
                  >

                    {expertCount}+

                  </h3>

                  <p
                    className="
                      about-counter-text
                      text-[18px]
                      md:text-[20px]
                      text-[#d0d0d0]
                      group-hover:text-white
                      transition-all
                      duration-300
                      font-medium
                    "
                  >

Years of Service Excellence

                  </p>

                </div>

              </div>

              {/* ITEM 2 */}

              <div
                className="
                  about-counter-item
                  group
                  relative
                  p-8
                  md:p-10
                  border-b
                  md:border-b-0
                  md:border-r
                  border-[#2f2f2f]
                  overflow-hidden
                "
              >

                <div
                  className="
                    about-counter-hover-bg
                    absolute
                    inset-0
                    bg-[#ab0418]
                    translate-y-full
                    group-hover:translate-y-0
                    transition-all
                    duration-500
                  "
                ></div>

                <div className="about-counter-content relative z-10">

                  <h3
                    className="
                      about-counter-number
                      text-[55px]
                      md:text-[70px]
                      font-bold
                      text-white
                      leading-none
                      mb-4
                    "
                  >

                    {projectCount}+

                  </h3>

                  <p
                    className="
                      about-counter-text
                      text-[18px]
                      md:text-[20px]
                      text-[#d0d0d0]
                      group-hover:text-white
                      transition-all
                      duration-300
                      font-medium
                    "
                  >

Total Projects Completed

                  </p>

                </div>

              </div>

              {/* ITEM 3 */}

              <div
                className="
                  about-counter-item
                  group
                  relative
                  p-8
                  md:p-10
                  overflow-hidden
                "
              >

                <div
                  className="
                    about-counter-hover-bg
                    absolute
                    inset-0
                    bg-[#ab0418]
                    translate-y-full
                    group-hover:translate-y-0
                    transition-all
                    duration-500
                  "
                ></div>

                <div className="about-counter-content relative z-10">

                  <h3
                    className="
                      about-counter-number
                      text-[55px]
                      md:text-[70px]
                      font-bold
                      text-white
                      leading-none
                      mb-4
                    "
                  >

                    {clientCount}+

                  </h3>

                  <p
                    className="
                      about-counter-text
                      text-[18px]
                      md:text-[20px]
                      text-[#d0d0d0]
                      group-hover:text-white
                      transition-all
                      duration-300
                      font-medium
                    "
                  >

Team Members

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </LayoutWrapper>

      {/* CUSTOM STYLE */}

      <style>
        {`
          @keyframes spinSlow {

            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(360deg);
            }

          }

          .animate-spin-slow {

            animation: spinSlow 10s linear infinite;

          }
        `}
      </style>

    </section>

  )

}

export default AboutSection
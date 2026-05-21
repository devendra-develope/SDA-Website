// src/components/home/ServicesSection.jsx

import React, {
  useEffect,
  useRef,
  useState,
} from 'react'

import {
  FaChevronDown,
} from 'react-icons/fa'

import LayoutWrapper from '../common/LayoutWrapper'
import SectionLabel from '../common/SectionLabel'

function ServicesSection() {

  /* ====================================
      ACTIVE SERVICE
  ==================================== */

  const [activeService, setActiveService] = useState(0)

  /* ====================================
      SECTION ANIMATION
  ==================================== */

  const sectionRef = useRef(null)

  const [isVisible, setIsVisible] = useState(false)

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
      SERVICES DATA
  ==================================== */

  const services = [

    {
      title: 'Digital Marketing',

      tags: [
        'SEO',
        'SEM',
        'SMM',
        'Performance Marketing',
        'Content Marketing',
        'Affiliate Marketing',
        'Reports & Analytics',
      ],

      description:
      'Strategic digital marketing solutions that help brands increase visibility, generate leads, and drive business growth across multiple online platforms.',
    },

    {
      title: 'Creative Services',

      tags: [
        "Creative Designs",
        "Social Media Designs",
        "Print Designs",
        "3D Video Animation",
        "Video Editing",
        "Video Production",
        "Brand Identity",
      
      ],

      description:
      'We create impactful designs, videos, and brand visuals that help businesses build a strong and memorable identity.',
    
      },

    {
      title: 'Web & Tech',

      tags: [
  "Frontend Development",
  "Backend Development",
  "UI/UX Designing",
  "Website Designing",
  "App Development",
  "E-Commerce Website",
  "Software Solutions",

      ],

      description:
      'We build modern websites, apps, and software solutions with seamless design, performance, and user experience.',

    },

    {
      title: 'Branding Design',

      tags: [
        'Identity',
        'Logo',
        'Brand Kit',
        'Guidelines',
      ],

      description:
        'Build a strong and memorable brand identity with premium creative solutions.',
    },

 

  ]

  return (

    <section
      ref={sectionRef}
      className="
        services-section
        relative
        overflow-hidden
        py-[90px]
        bg-[#f5f3ee]
      "
    >

      {/* ====================================
          BACKGROUND SHAPE
      ==================================== */}

 

      {/* ====================================
          CONTAINER
      ==================================== */}

      <LayoutWrapper>

        <div className="services-container relative z-10">

          {/* ====================================
              SERVICES TOP AREA
          ==================================== */}

          <div
            className="
              services-top-wrapper
              grid
              grid-cols-1
              xl:grid-cols-[380px_1fr]
              gap-16
              mb-20
            "
          >

            {/* ====================================
                LEFT LABEL
            ==================================== */}

            <div
              className={`
                services-top-label-wrapper
                transition-all
                duration-1000
                ${isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-[80px]'
                }
              `}
            >

              {/* TOP LABEL */}

              <SectionLabel
          text="So here's what we do exactly!"
          textColor="#000"
          lineColor="#ab0418"
        />

            </div>

            {/* ====================================
                RIGHT CONTENT
            ==================================== */}

            <div
              className="
                services-heading-content-wrapper
                flex
                flex-col
                gap-10
              "
            >

              {/* TITLE */}

              <div
                className={`
                  services-title-wrapper
                  transition-all
                  duration-[1200ms]
                  delay-200
                  ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-[120px]'
                  }
                `}
              >

                <h2
                  className="
                    services-title
                    text-[36px]
                    sm:text-[48px]
                    md:text-[64px]
                    xl:text-[70px]
                    font-bold
                    leading-[0.95]
                    tracking-[-3px]
                    text-[#17181a]
                  "
                >

We are a full-stack


                  <span
                    className="
                      services-title-light
                      block
                       text-[#ab0418]
                    "
                  >

digital marketing agency.

                  </span>

                </h2>

              </div>

              {/* PARA RIGHT SIDE */}

              <div
                className="
                  services-description-main-wrapper
                  flex
                  justify-end
                "
              >

                <div
                  className={`
                    services-description-wrapper
                    max-w-[430px]
                    transition-all
                    duration-[1200ms]
                    delay-500
                    ${isVisible
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-[120px]'
                    }
                  `}
                >

                  <p
                    className="
                      services-description
                      text-[16px]
                      md:text-[20px]
                      leading-[1.8]
                      text-[#666]
                    "
                  >

That can help you from strategy to sales, and everything in between



                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* ====================================
              SERVICES CONTENT
          ==================================== */}

          <div
            className="
              services-content-wrapper
              grid
              grid-cols-1
              xl:grid-cols-[420px_1fr]
              gap-16
              items-start
            "
          >

            {/* ====================================
                IMAGE
            ==================================== */}

            <div
              className={`
                services-image-wrapper
                overflow-hidden
                transition-all
                duration-[1200ms]
                delay-300
                ${isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-[120px]'
                }
              `}
            >

              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                alt="Services"
                className="
                  services-image
                  w-full
                  h-[260px]
                  md:h-[320px]
                  xl:h-[420px]
                  object-cover
                  rounded-[6px]
                  hover:scale-105
                  transition-all
                  duration-700
                "
              />

            </div>

            {/* ====================================
                ACCORDION
            ==================================== */}

            <div
              className={`
                services-accordion-wrapper
                transition-all
                duration-[1200ms]
                delay-500
                ${isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-[120px]'
                }
              `}
            >

              {services.map((service, index) => (

                <div
                  key={index}
                  className="
                    services-accordion-item
                    border-b
                    border-[#d9d9d9]
                    py-6
                  "
                >

                  {/* HEADER */}

                  <div
                    onClick={() =>
                      setActiveService(
                        activeService === index
                          ? null
                          : index
                      )
                    }
                    className="
                      services-accordion-header
                      flex
                      items-center
                      justify-between
                      gap-5
                      cursor-pointer
                      group
                    "
                  >

                    {/* LEFT */}

                    <div className="services-accordion-left flex items-center gap-4">

                      <span
                        className="
                          services-number
                          text-[20px]
                          md:text-[24px]
                          font-medium
                          text-[#17181a]
                        "
                      >

                        {index + 1}.

                      </span>

                      <h3
                        className="
                          services-item-title
                          text-[24px]
                          md:text-[34px]
                          xl:text-[42px]
                          font-medium
                          text-[#17181a]
                          leading-[1.2]
                          transition-all
                          duration-300
                          group-hover:text-[#ab0418]
                        "
                      >

                        {service.title}

                      </h3>

                    </div>

                    {/* ICON */}

                    <div
                      className={`
                        services-icon-wrapper
                        w-[34px]
                        h-[34px]
                        rounded-full
                        bg-[#ab0418]
                        flex
                        items-center
                        justify-center
                        text-white
                        text-[11px]
                        transition-all
                        duration-500
                        ${
                          activeService === index
                            ? 'rotate-180'
                            : ''
                        }
                      `}
                    >

                      <FaChevronDown />

                    </div>

                  </div>

                  {/* BODY */}

                  <div
                    className={`
                      services-accordion-body
                      grid
                      overflow-hidden
                      transition-all
                      duration-700
                      ease-in-out
                      ${
                        activeService === index
                          ? 'grid-rows-[1fr] opacity-100 pt-6'
                          : 'grid-rows-[0fr] opacity-0'
                      }
                    `}
                  >

                    <div className="overflow-hidden">

                      {/* TAGS */}

                      <div
                        className="
                          services-tags-wrapper
                          flex
                          flex-wrap
                          gap-3
                          mb-5
                          md:pl-10
                        "
                      >

                        {service.tags.map((tag, tagIndex) => (

                          <span
                            key={tagIndex}
                            className="
                              services-tag
                              px-4
                              py-2
                              rounded-full
                              border
                              border-[#d9d9d9]
                              bg-white
                              text-[13px]
                              md:text-[14px]
                              font-medium
                              text-[#17181a]
                              hover:bg-[#ab0418]
                              hover:text-white
                              transition-all
                              duration-300
                            "
                          >

                            {tag}

                          </span>

                        ))}

                      </div>

                      {/* DESCRIPTION */}

                      <p
                        className="
                          services-item-description
                          max-w-[760px]
                          text-[15px]
                          md:text-[18px]
                          leading-[1.8]
                          text-[#666]
                          mb-4
                          md:pl-10
                        "
                      >

                        {service.description}

                      </p>

                      {/* LINK */}

                      <a
                        href="#"
                        className="
                          services-link
                          inline-flex
                          items-center
                          gap-2
                          text-[15px]
                          md:text-[17px]
                          font-bold
                          text-[#17181a]
                          hover:text-[#ab0418]
                          transition-all
                          duration-300
                          md:pl-10
                          group
                        "
                      >

                        Explore More

                        <span
                          className="
                            services-link-icon
                            group-hover:translate-x-1
                            group-hover:-translate-y-1
                            transition-all
                            duration-300
                          "
                        >

                          ↗

                        </span>

                      </a>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </LayoutWrapper>

    </section>

  )

}

export default ServicesSection
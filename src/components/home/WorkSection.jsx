// src/components/home/WorkSection.jsx

import React, {
    useEffect,
    useRef,
    useState,
  } from 'react'
  
  import {
    FaArrowRight,
  } from 'react-icons/fa'
  
  /* ====================================
      LIGHT GALLERY
  ==================================== */
  
  import LightGallery from 'lightgallery/react'
  
  import lgThumbnail from 'lightgallery/plugins/thumbnail'
  import lgZoom from 'lightgallery/plugins/zoom'
  
  import 'lightgallery/css/lightgallery.css'
  import 'lightgallery/css/lg-thumbnail.css'
  import 'lightgallery/css/lg-zoom.css'
  
  /* ====================================
      COMPONENTS
  ==================================== */
  
  import LayoutWrapper from '../common/LayoutWrapper'
  
  function WorkSection() {
  
    /* ====================================
        SECTION VISIBILITY
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
          threshold: 0.15,
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
        WORK DATA
    ==================================== */
  
    const workItems = [
  
      {
        title: 'Branding Design',
  
        image:
          'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
  
        tags: [
          'Web Design',
          'Development',
          'Software',
        ],
  
        height: 'h-[280px] md:h-[430px]',
      },
  
      {
        title: 'UI/UX Design',
  
        image:
          'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
  
        tags: [
          'Creative',
          'Modern',
          'Design',
        ],
  
        height: 'h-[280px] md:h-[430px]',
      },
  
      {
        title: 'Digital Product',
  
        image:
          'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop',
  
        tags: [
          'Product',
          'Marketing',
          'Creative',
        ],
  
        height: 'h-[320px] md:h-[580px]',
      },
  
      {
        title: 'Development',
  
        image:
          'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
  
        tags: [
          'Frontend',
          'React',
          'Creative',
        ],
  
        height: 'h-[280px] md:h-[430px]',
      },
  
      {
        title: 'Creative Studio',
  
        image:
          'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
  
        tags: [
          'Studio',
          'Branding',
          'Visual',
        ],
  
        height: 'h-[280px] md:h-[430px]',
      },
  
    ]
  
    return (
  
      <section
        ref={sectionRef}
        className="
          work-section
          relative
          overflow-hidden
          py-[60px]
          bg-[#f5f3ee]
        "
      >
  
        <LayoutWrapper>
  
          <div className="work-container relative">
  
            {/* ====================================
                BIG TITLE
            ==================================== */}
  
            <div
              className={`
                work-title-wrapper
                flex
                justify-center
                mb-[30px]
                transition-all
                duration-[1200ms]
                ${isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-[100px]'
                }
              `}
            >
  
              <h2
                className="
                  work-main-title
                  relative
                  text-center
                  text-[48px]
                  md:text-[64px]
                  xl:text-[70px]
                  font-black
                  leading-[0.85]
                  tracking-[-6px]
                  text-[#17181a]
                "
              >
  
                Our Work
  
              
  
              </h2>

              
  
            </div>

<div
  className={`flex justify-center mb-[30px] text-center duration-[1400ms] ${
    isVisible
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 translate-y-[100px]'
  }`}
>

                    <p
                  className="
                    max-w-[500px]
                    text-[16px]
                    md:text-[20px]
                    leading-[1.8]
                    text-[#666]
                  "
                >
  
                  Developing and maintaining a consistent visual identity
                  for a brand across various materials and platforms.
  
                </p>
</div>
  
            {/* ====================================
                GALLERY
            ==================================== */}
  
            <LightGallery
              speed={500}
              plugins={[
                lgThumbnail,
                lgZoom,
              ]}
            >
  
              {/* ====================================
                  TOP GRID
              ==================================== */}
  
              <div
                className="
                  work-grid-top
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  gap-8
                  mb-10
                "
              >
  
                {workItems.slice(0, 2).map((item, index) => (
  
                  <a
                    href={item.image}
                    key={index}
                    className={`
                      work-card
                      group
                      relative
                      overflow-hidden
                      block
                      transition-all
                      duration-[1200ms]
                      ${isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-[120px]'
                      }
                    `}
                    style={{
                      transitionDelay: `${index * 150}ms`,
                    }}
                  >
  
                    {/* IMAGE */}
  
                    <div
                      className="
                        work-card-image-wrapper
                        relative
                        overflow-hidden
                      "
                    >
  
                      <img
                        src={item.image}
                        alt={item.title}
                        className={`
                          work-card-image
                          w-full
                          ${item.height}
                          object-cover
                          transition-all
                          duration-[1200ms]
                          group-hover:scale-110
                        `}
                      />
  
                      {/* OVERLAY */}
  
                      <div
                        className="
                          work-card-overlay
                          absolute
                          inset-0
                          bg-black/20
                          opacity-0
                          group-hover:opacity-100
                          transition-all
                          duration-700
                        "
                      ></div>
  
                      {/* HOVER CONTENT */}
  
                      <div
                        className="
                          work-card-hover-content
                          absolute
                          left-0
                          bottom-0
                          w-full
                          p-8
                          translate-y-[120%]
                          group-hover:translate-y-0
                          transition-all
                          duration-700
                        "
                      >
  
                        {/* TITLE */}
  
                        <h3
                          className="
                            work-card-title
                            text-[30px]
                            md:text-[42px]
                            font-bold
                            text-white
                            mb-5
                          "
                        >
  
                          {item.title}
  
                        </h3>
  
                        {/* TAGS */}
  
                        <div
                          className="
                            work-card-tags
                            flex
                            flex-wrap
                            gap-3
                          "
                        >
  
                          {item.tags.map((tag, tagIndex) => (
  
                            <span
                              key={tagIndex}
                              className="
                                px-5
                                py-2
                                rounded-full
                                bg-[#0e2433]
                                text-white
                                text-[14px]
                                font-medium
                              "
                            >
  
                              {tag}
  
                            </span>
  
                          ))}
  
                        </div>
  
                      </div>
  
                    </div>
  
                  </a>
  
                ))}
  
              </div>
  
              {/* ====================================
                  CENTER IMAGE
              ==================================== */}
  
              <a
                href={workItems[2].image}
                className={`
                  work-center-card
                  group
                  relative
                  overflow-hidden
                  block
                  mb-10
                  transition-all
                  duration-[1400ms]
                  ${isVisible
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-[0.9]'
                  }
                `}
              >
  
                <div
                  className="
                    work-card-image-wrapper
                    relative
                    overflow-hidden
                  "
                >
  
                  <img
                    src={workItems[2].image}
                    alt={workItems[2].title}
                    className="
                      work-center-image
                      w-full
                      h-[320px]
                      md:h-[580px]
                      object-cover
                      transition-all
                      duration-[1200ms]
                      group-hover:scale-105
                    "
                  />
  
                  {/* OVERLAY */}
  
                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/20
                      opacity-0
                      group-hover:opacity-100
                      transition-all
                      duration-700
                    "
                  ></div>
  
                  {/* CONTENT */}
  
                  <div
                    className="
                      absolute
                      left-0
                      bottom-0
                      w-full
                      p-8
                      md:p-14
                      translate-y-[120%]
                      group-hover:translate-y-0
                      transition-all
                      duration-700
                    "
                  >
  
                    <h3
                      className="
                        text-[38px]
                        md:text-[60px]
                        font-bold
                        text-white
                        mb-6
                      "
                    >
  
                      {workItems[2].title}
  
                    </h3>
  
                    <div className="flex flex-wrap gap-3">
  
                      {workItems[2].tags.map((tag, tagIndex) => (
  
                        <span
                          key={tagIndex}
                          className="
                            px-5
                            py-2
                            rounded-full
                            bg-[#0e2433]
                            text-white
                            text-[14px]
                            font-medium
                          "
                        >
  
                          {tag}
  
                        </span>
  
                      ))}
  
                    </div>
  
                  </div>
  
                </div>
  
              </a>
  
              {/* ====================================
                  BOTTOM GRID
              ==================================== */}
  
              <div
                className="
                  work-grid-bottom
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  gap-8
                "
              >
  
                {workItems.slice(3, 5).map((item, index) => (
  
                  <a
                    href={item.image}
                    key={index}
                    className={`
                      work-card
                      group
                      relative
                      overflow-hidden
                      block
                      transition-all
                      duration-[1400ms]
                      ${isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-[120px]'
                      }
                    `}
                    style={{
                      transitionDelay: `${index * 150}ms`,
                    }}
                  >
  
                    {/* IMAGE */}
  
                    <div
                      className="
                        work-card-image-wrapper
                        relative
                        overflow-hidden
                      "
                    >
  
                      <img
                        src={item.image}
                        alt={item.title}
                        className={`
                          work-card-image
                          w-full
                          ${item.height}
                          object-cover
                          transition-all
                          duration-[1200ms]
                          group-hover:scale-110
                        `}
                      />
  
                      {/* OVERLAY */}
  
                      <div
                        className="
                          absolute
                          inset-0
                          bg-black/20
                          opacity-0
                          group-hover:opacity-100
                          transition-all
                          duration-700
                        "
                      ></div>
  
                      {/* HOVER CONTENT */}
  
                      <div
                        className="
                          absolute
                          left-0
                          bottom-0
                          w-full
                          p-8
                          translate-y-[120%]
                          group-hover:translate-y-0
                          transition-all
                          duration-700
                        "
                      >
  
                        <h3
                          className="
                            text-[30px]
                            md:text-[42px]
                            font-bold
                            text-white
                            mb-5
                          "
                        >
  
                          {item.title}
  
                        </h3>
  
                        <div className="flex flex-wrap gap-3">
  
                          {item.tags.map((tag, tagIndex) => (
  
                            <span
                              key={tagIndex}
                              className="
                                px-5
                                py-2
                                rounded-full
                                bg-[#0e2433]
                                text-white
                                text-[14px]
                                font-medium
                              "
                            >
  
                              {tag}
  
                            </span>
  
                          ))}
  
                        </div>
  
                      </div>
  
                    </div>
  
                  </a>
  
                ))}
  
              </div>
  
            </LightGallery>
  
            {/* ====================================
                BOTTOM CONTENT
            ==================================== */}
  
            <div
              className="
                work-bottom-content-wrapper
                flex
                flex-col
                lg:flex-row
                items-start
                lg:items-end
                justify-end
                gap-10
                mt-20
              "
            >
  
              {/* LEFT */}
  
           
  
              {/* RIGHT */}
  
              <div>
  
                <button
                  className="
                    group
                    w-[150px]
                    h-[150px]
                    rounded-full
                    border
                    border-[#d9d9d9]
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-3
                    text-[#17181a]
                    hover:bg-[#ab0418]
                    hover:border-[#ab0418]
                    hover:text-white
                    transition-all
                    duration-500
                  "
                >
  
                  <FaArrowRight
                    className="
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      transition-all
                      duration-300
                    "
                  />
  
                  <span
                    className="
                      text-[18px]
                      font-semibold
                      leading-[1.3]
                    "
                  >
  
                    Explore
  
                    <span className="block">
  
                      More
  
                    </span>
  
                  </span>
  
                </button>
  
              </div>
  
            </div>
  
          </div>
  
        </LayoutWrapper>
  
        {/* ====================================
            FULL WIDTH MARQUEE
        ==================================== */}
  
        <div
          className="
            work-marquee-wrapper
            relative
            left-1/2
            right-1/2
            w-screen
            -translate-x-1/2
            mt-20
            bg-[#f3cfd1]
            overflow-hidden
            py-3
          "
        >
  
          <div
            className="
              work-marquee-track
              flex
              items-center
              gap-16
              whitespace-nowrap
              animate-marquee
            "
          >
  
            <span className="text-[28px] font-bold">
  
              ✷ DIGITAL PRODUCT
  
            </span>
  
            <span className="text-[28px] font-bold">
  
              ○ UI/UX DESIGN
  
            </span>
  
            <span className="text-[28px] font-bold">
  
              ✷ DIGITAL STUDIO
  
            </span>
  
            <span className="text-[28px] font-bold">
  
              ○ BRANDING DESIGN
  
            </span>
  
            <span className="text-[28px] font-bold">
  
              ✷ WEB DEVELOPMENT
  
            </span>
  
            <span className="text-[28px] font-bold">
  
              ○ DIGITAL AGENCY
  
            </span>
  
            <span className="text-[28px] font-bold">
  
              ✷ DIGITAL PRODUCT
  
            </span>
  
            <span className="text-[28px] font-bold">
  
              ○ UI/UX DESIGN
  
            </span>
  
          </div>
  
        </div>
  
        {/* ====================================
            CUSTOM STYLE
        ==================================== */}
  
        <style>
          {`
            @keyframes marquee {
  
              0% {
                transform: translateX(0%);
              }
  
              100% {
                transform: translateX(-50%);
              }
  
            }
  
            .animate-marquee {
  
              animation: marquee 18s linear infinite;
  
            }
  
            .lg-backdrop {
  
              background: rgba(0,0,0,0.92);
  
            }
  
            .lg-toolbar {
  
              background: transparent;
  
            }
          `}
        </style>
  
      </section>
  
    )
  
  }
  
  export default WorkSection
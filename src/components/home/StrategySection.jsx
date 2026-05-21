// src/components/home/StrategySection.jsx

import React, {
    useEffect,
    useRef,
    useState,
  } from 'react'
  
  import LayoutWrapper from '../common/LayoutWrapper'
  import SectionLabel from '../common/SectionLabel'
  
  import {
    FaPlus,
  } from 'react-icons/fa'
  
  function StrategySection() {
  
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
        STRATEGY DATA
    ==================================== */
  
    const strategyData = [
  
      {
        step: 'Step-01:',
  
        icon:
          'https://cdn-icons-png.flaticon.com/512/3281/3281289.png',
  
        title: 'Strategy',
  
        description:
          "Analyze the client's industry, competitors, and target audience",
  
        points: [
          'Initial Consultation.',
          'Market Research.',
          'Strategic Planning.',
        ],
      },
  
      {
        step: 'Step-02:',
  
        icon:
          'https://cdn-icons-png.flaticon.com/512/1055/1055687.png',
  
        title: 'Sketch & Design',
  
        description:
          'Define the user experience (UX) and user interface (UI) design.',
  
        points: [
          'Wireframing',
          'Design Mockups.',
          'Implementation.',
        ],
      },
  
      {
        step: 'Step-03:',
  
        icon:
          'https://cdn-icons-png.flaticon.com/512/2721/2721297.png',
  
        title: 'Development',
  
        description:
          'Implement coding, scripting, and programming as needed.',
  
        points: [
          'Design Implementation.',
          'Testing & Fixing.',
          'Product Launch',
        ],
      },
  
    ]
  
    return (
  
      <section
        ref={sectionRef}
        className="
          strategy-section
          relative
          overflow-hidden
          py-[140px]
          bg-[#f5f3ee]
        "
      >
  
        <LayoutWrapper>
  
          {/* ====================================
              STRATEGY HEADER
          ==================================== */}
  
          <div
            className="
              strategy-header
              grid
              grid-cols-1
              xl:grid-cols-[360px_1fr]
              gap-[60px]
              xl:gap-[100px]
              mb-[120px]
            "
          >
  
            {/* ====================================
                LEFT TOP LABEL
            ==================================== */}
  
              <SectionLabel
              text="Experience a ROAS surge"
              textColor="#000"
              lineColor="#ab0418"
            />
  
            {/* ====================================
                RIGHT CONTENT
            ==================================== */}
  
            <div
              className="
                strategy-heading-content
                flex
                flex-col
                gap-[50px]
              "
            >
  
              {/* TITLE */}
  
              <div
                className={`
                  strategy-title-wrapper
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
                    strategy-title
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
  
                  03 STEPS WE
  
                  <span
                    className="
                      block
                    "
                  >
  
                    HAVE
  
                  </span>
  
                  <span
                    className="
                      block
                      font-light
                    "
                  >
  
                    FOLLOWING.
  
                  </span>
  
                </h2>
  
              </div>
  
              {/* DESCRIPTION */}
  
              <div
                className="
                  strategy-description-main-wrapper
                  flex
                  justify-end
                "
              >
  
                <div
                  className={`
                    strategy-description-wrapper
                    max-w-[420px]
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
                      strategy-description
                      text-[18px]
                      md:text-[22px]
                      leading-[1.8]
                      text-[#666]
                    "
                  >
  
                    Offer a wide range of services to help businesses
                    establish and enhance their online presence.
  
                  </p>
  
                </div>
  
              </div>
  
            </div>
  
          </div>
  
          {/* ====================================
              STEPS LINE
          ==================================== */}
  
          <div
            className="
              strategy-steps-line
              hidden
              lg:flex
              items-center
              justify-between
              mb-[90px]
            "
          >
  
            {strategyData.map((item, index) => (
  
              <div
                key={index}
                className="
                  strategy-step-item
                  flex
                  items-center
                  flex-1
                "
              >
  
                {/* STEP */}
  
                <div
                  className="
                    strategy-step-badge
                    px-7
                    py-3
                    rounded-full
                    bg-[#efc72d]
                    text-[#17181a]
                    text-[18px]
                    font-bold
                    whitespace-nowrap
                  "
                >
  
                  {item.step}
  
                </div>
  
                {/* LINE */}
  
                {index !== strategyData.length - 1 && (
  
                  <div
                    className="
                      strategy-step-line
                      flex-1
                      h-[1px]
                      bg-[#d9d9d9]
                      mx-6
                      relative
                    "
                  >
  
                    <span
                      className="
                        absolute
                        right-0
                        top-[-5px]
                        w-[8px]
                        h-[8px]
                        rounded-full
                        bg-[#d9d9d9]
                      "
                    ></span>
  
                  </div>
  
                )}
  
              </div>
  
            ))}
  
          </div>
  
          {/* ====================================
              STRATEGY CARDS
          ==================================== */}
  
          <div
            className="
              strategy-cards-wrapper
              grid
              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-3
              gap-[80px]
            "
          >
  
            {strategyData.map((item, index) => (
  
              <div
                key={index}
                className={`
                  strategy-card
                  transition-all
                  duration-[1200ms]
                  ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-[120px]'
                  }
                `}
                style={{
                  transitionDelay: `${index * 200}ms`,
                }}
              >
  
                {/* ICON */}
  
                <div
                  className="
                    strategy-card-icon
                    mb-10
                  "
                >
  
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="
                      w-[72px]
                      md:w-[90px]
                      h-auto
                      object-contain
                    "
                  />
  
                </div>
  
                {/* TITLE */}
  
                <h3
                  className="
                    strategy-card-title
                    text-[40px]
                    md:text-[54px]
                    font-semibold
                    leading-[1]
                    tracking-[-2px]
                    text-[#17181a]
                    mb-6
                  "
                >
  
                  {item.title}
  
                </h3>
  
                {/* DESCRIPTION */}
  
                <p
                  className="
                    strategy-card-description
                    text-[18px]
                    md:text-[22px]
                    leading-[1.8]
                    text-[#5f5f5f]
                    mb-10
                  "
                >
  
                  {item.description}
  
                </p>
  
                {/* LIST */}
  
                <div
                  className="
                    strategy-card-list
                    flex
                    flex-col
                    gap-5
                  "
                >
  
                  {item.points.map((point, pointIndex) => (
  
                    <div
                      key={pointIndex}
                      className="
                        strategy-card-list-item
                        flex
                        items-center
                        gap-4
                      "
                    >
  
                      <FaPlus
                        className="
                          text-[#7d7d7d]
                          text-[14px]
                        "
                      />
  
                      <span
                        className="
                          text-[18px]
                          md:text-[24px]
                          font-medium
                          text-[#5f5f5f]
                        "
                      >
  
                        {point}
  
                      </span>
  
                    </div>
  
                  ))}
  
                </div>
  
              </div>
  
            ))}
  
          </div>
  
        </LayoutWrapper>
  
      </section>
  
    )
  
  }
  
  export default StrategySection
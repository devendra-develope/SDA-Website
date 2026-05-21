// src/components/home/TestimonialSection.jsx

import React from 'react'

/* ====================================
    SWIPER
==================================== */

import {
  Swiper,
  SwiperSlide,
} from 'swiper/react'

import {
  Navigation,
  Autoplay,
} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

/* ====================================
    ICONS
==================================== */

import {
  FaArrowLeft,
  FaArrowRight,
} from 'react-icons/fa'

/* ====================================
    COMPONENTS
==================================== */

import LayoutWrapper from '../common/LayoutWrapper'
import SectionLabel from '../common/SectionLabel'

function TestimonialSection() {

  /* ====================================
      TESTIMONIAL DATA
  ==================================== */

  const testimonials = [

    {
      id: 1,

      company: 'Great Agency!',

      text:
        'A digital agency can constantly improve customer happiness, continually improve processes, and cultivate a continuous culture by aggressively soliciting, evaluating, and acting upon feedback.',

      name: 'Mark Luiz',

      designation: 'Catch, CEO',
    },

    {
      id: 2,

      company: 'Creative Team!',

      text:
        'We create premium user experiences and scalable digital solutions for modern businesses worldwide with strong branding and modern development.',

      name: 'Sophie Lee',

      designation: 'Founder',
    },

    {
      id: 3,

      company: 'Professional Service!',

      text:
        'Their strategy and design process helped us increase engagement and improve overall brand experience for our company.',

      name: 'John Carter',

      designation: 'Director',
    },

    {
      id: 4,

      company: 'Amazing Experience!',

      text:
        'Working with this creative team was smooth and professional. They transformed our online presence beautifully.',

      name: 'Alex Morgan',

      designation: 'Marketing Head',
    },

    {
      id: 5,

      company: 'Top Quality Work!',

      text:
        'Their creative direction and development quality exceeded expectations. Everything feels premium and modern.',

      name: 'Emma Watson',

      designation: 'Business Owner',
    },

  ]

  return (

    <section
      className="
        testimonial-section
        relative
        overflow-hidden
        py-[60px]
        bg-[#f5f3ee]
      "
    >

      <LayoutWrapper>

        {/* ====================================
            TESTIMONIAL GRID
        ==================================== */}

        <div
          className="
            testimonial-grid
            grid
            grid-cols-1
            xl:grid-cols-[360px_1fr]
            gap-[70px]
            items-start
          "
        >

          {/* ====================================
              LEFT CONTENT
          ==================================== */}

          <div
            className="
              testimonial-left-content
            "
          >

            {/* TOP LABEL */}

                <SectionLabel
          text="Testimonial"
          textColor="#000"
          lineColor="#ab0418"
        />

            {/* TITLE */}

            <div
              className="
                testimonial-title-wrapper
                mb-8
              "
            >

              <h2
                className="
                  testimonial-title
                  text-[48px]
                  md:text-[64px]
                  xl:text-[70px]
                  font-black
                  leading-[1.2]
                  tracking-[-5px]
                  text-[#17181a]
                "
              >

               What

                <span
                  className="
                    block
                    font-light
                  "
                >

                 clients say

                </span>

              </h2>

            </div>

            {/* DESCRIPTION */}

            <div
              className="
                testimonial-description-wrapper
                max-w-[400px]
              "
            >

              <p
                className="
                  testimonial-description
                  text-[18px]
                  md:text-[20px]
                  leading-[1.8]
                  text-[#666]
                "
              >

                Hear what our happy clients say about
                our creative process and premium digital services.

              </p>

            </div>

          </div>

          {/* ====================================
              RIGHT SLIDER
          ==================================== */}

          <div
            className="
              testimonial-slider-main-wrapper
              relative
              min-w-0
            "
          >

            <Swiper
              modules={[
                Navigation,
                Autoplay,
              ]}
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              speed={1200}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: '.testimonial-next-btn',
                prevEl: '.testimonial-prev-btn',
              }}
              className="
                testimonial-swiper-slider
                w-full
              "
            >

              {testimonials.map((item) => (

                <SwiperSlide key={item.id}>

                  <div
                    className="
                      testimonial-slide-card
                      border-b
                      border-[#dcdcdc]
                      pb-12
                    "
                  >

                    {/* COMPANY */}

                    <h5
                      className="
                        testimonial-company-name
                        text-[22px]
                        md:text-[26px]
                        font-semibold
                        text-[#17181a]
                        mb-4
                      "
                    >

                      {item.company}

                    </h5>

                    {/* TEXT */}

                    <p
                      className="
                        testimonial-slide-text
                        text-[18px]
                        md:text-[22px]
                        xl:text-[24px]
                        leading-[1.7]
                        tracking-[-1px]
                        text-[#5f5f5f]
                        mb-4
                      "
                    >

                      {item.text}

                    </p>

                    {/* AUTHOR */}

                    <div
                      className="
                        testimonial-author-wrapper
                        mb-5
                      "
                    >

                      <h4
                        className="
                          testimonial-author-name
                          text-[28px]
                          md:text-[34px]
                          font-bold
                          text-[#17181a]
                          mb-2
                        "
                      >

                        {item.name}

                      </h4>

                      <span
                        className="
                          testimonial-author-designation
                          text-[16px]
                          md:text-[18px]
                          text-[#666]
                        "
                      >

                        {item.designation}

                      </span>

                    </div>

                    {/* BOTTOM */}

                    <div
                      className="
                        testimonial-bottom-wrapper
                        flex
                        items-center
                        justify-between
                        flex-wrap
                        gap-5
                      "
                    >

                      {/* COUNT */}

                      <div
                        className="
                          testimonial-slide-count
                          text-[34px]
                          md:text-[42px]
                          font-bold
                          text-[#17181a]
                        "
                      >

                        0{item.id}

                        <span
                          className="
                            text-[#666]
                            text-[20px]
                            md:text-[24px]
                          "
                        >

                          / 5

                        </span>

                      </div>

                      {/* NAVIGATION */}

                      <div
                        className="
                          testimonial-navigation-wrapper
                          flex
                          items-center
                          gap-4
                        "
                      >

                        <button
                          className="
                            testimonial-prev-btn
                            w-[60px]
                            h-[60px]
                            rounded-full
                            border
                            border-[#dcdcdc]
                            flex
                            items-center
                            justify-center
                            text-[#ab0418]
                            hover:bg-[#ab0418]
                            hover:border-[#ab0418]
                            hover:text-white
                            transition-all
                            duration-500
                          "
                        >

                          <FaArrowLeft />

                        </button>

                        <button
                          className="
                            testimonial-next-btn
                            w-[60px]
                            h-[60px]
                            rounded-full
                            border
                            border-[#dcdcdc]
                            flex
                            items-center
                            justify-center
                            text-[#ab0418]
                            hover:bg-[#ab0418]
                            hover:border-[#ab0418]
                            hover:text-white
                            transition-all
                            duration-500
                          "
                        >

                          <FaArrowRight />

                        </button>

                      </div>

                    </div>

                  </div>

                </SwiperSlide>

              ))}

            </Swiper>

          </div>

        </div>

      </LayoutWrapper>

    </section>

  )

}

export default TestimonialSection
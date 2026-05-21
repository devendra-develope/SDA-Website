// src/components/home/ClientLogoSlider.jsx

import React from 'react'

function ClientLogoSlider() {

  const clientLogos = [

    'https://upload.wikimedia.org/wikipedia/commons/8/8a/Bayer_logo.svg',

    'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg',

    'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',

    'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',

    'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',

    'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',

    'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',

    'https://upload.wikimedia.org/wikipedia/commons/7/75/Google_Logo_2015.svg',

  ]

  return (

    <section className="client-logo-section relative overflow-hidden bg-[#f5f3ee] py-[60px]">

   

      {/* ====================================
          SLIDER
      ==================================== */}

      <div className="client-logo-slider-wrapper">

        <div className="client-logo-slider-track">

          {[...clientLogos, ...clientLogos].map((logo, index) => (

            <div
              key={index}
              className="client-logo-slider-item"
            >

              <img
                src={logo}
                alt="Client Logo"
                className="client-logo-slider-image"
              />

            </div>

          ))}

        </div>

      </div>

     

    </section>

  )
}

export default ClientLogoSlider
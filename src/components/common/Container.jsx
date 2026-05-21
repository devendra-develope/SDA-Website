// src/components/common/Container.jsx

import React from 'react'

function Container({ children, className = '' }) {

  return (

    <div
      className={`
        container-wrapper
        max-w-[1400px]
        mx-auto
        px-5
        md:px-10
        xl:px-16
        ${className}
      `}
    >

      {children}

    </div>

  )

}

export default Container
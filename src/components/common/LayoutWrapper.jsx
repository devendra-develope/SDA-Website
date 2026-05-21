// src/components/common/LayoutWrapper.jsx

import React from 'react'

function LayoutWrapper({ children, className = '' }) {

  return (

    <div
      className={`
        layout-wrapper
        relative
        max-w-[1350px]
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

export default LayoutWrapper
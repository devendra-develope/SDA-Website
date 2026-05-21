import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function SectionLabel({
  text,
  textColor = '#17181a',
  lineColor = '#ab0418',
}) {

  return (

    <div className="flex items-center gap-4 mb-8">

      <h5
        className="
          text-[16px]
          md:text-[20px]
          font-bold
        "
        style={{ color: textColor }}
      >
        {text}
      </h5>

      <div
        className="
          w-[55px]
          h-[2px]
          relative
        "
        style={{ backgroundColor: lineColor }}
      >

        <FaArrowRight
          className="
            absolute
            right-[-4px]
            top-1/2
            -translate-y-1/2
            text-[12px]
          "
          style={{ color: lineColor }}
        />

      </div>

    </div>

  )

}

export default SectionLabel
import React from 'react'

function SectionHeading({
  number,
  title,
  subtitle,
}) {

  return (

    <div className="section-heading-wrapper mb-16">

      {/* Top Row */}
      <div className="section-heading-top flex items-end gap-2 mb-8">

        {/* Number + Line */}
        <div className="flex items-end gap-2 shrink-0">

          <span className="text-[34px] md:text-[42px] font-bold leading-none text-black">
            {number}
          </span>

          <div className="flex items-end">
            <div className="w-[70px] h-[2px] bg-black"></div>
          </div>

        </div>

        {/* Small Title */}
        <h5 className="text-[16px] md:text-[18px] font-semibold text-black leading-none">
          {title}
        </h5>

      </div>

      {/* Main Sub Heading */}
      {subtitle && (

        <h2 className="max-w-[1100px] text-[52px] sm:text-[58px] md:text-[64px] xl:text-[48px] font-extrabold leading-[0.95] text-black">

          {subtitle}

        </h2>

      )}

    </div>

  )
}

export default SectionHeading
import type { SVGProps } from 'react'

export const IconFlagHU = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='21px'
      height='15px'
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      role='img'
      className={`ui-icon-flag ${className ?? ''}`}
      {...props}>
      <title>HU</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='hu-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='hu-linearGradient-2'>
          <stop stopColor='#E03D52' offset='0%' />
          <stop stopColor='#CD2A3F' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='hu-linearGradient-3'>
          <stop stopColor='#5A9165' offset='0%' />
          <stop stopColor='#44704D' offset='100%' />
        </linearGradient>
      </defs>
      <g id='hu-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='hu-HU'>
          <rect
            id='hu-FlagBackground'
            fill='url(#hu-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='hu-Rectangle-2'
            fill='url(#hu-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='5'
          />
          <rect
            id='hu-Rectangle-2'
            fill='url(#hu-linearGradient-3)'
            x='0'
            y='10'
            width='21'
            height='5'
          />
          <rect
            id='hu-Rectangle-2'
            fill='url(#hu-linearGradient-1)'
            x='0'
            y='5'
            width='21'
            height='5'
          />
        </g>
      </g>
    </svg>
  )
}

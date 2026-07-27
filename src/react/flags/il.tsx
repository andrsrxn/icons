import type { SVGProps } from 'react'

export const IconFlagIL = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
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
      <title>IL</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='il-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='il-linearGradient-2'>
          <stop stopColor='#0E46D4' offset='0%' />
          <stop stopColor='#0538B9' offset='100%' />
        </linearGradient>
      </defs>
      <g id='il-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='il-IL'>
          <rect
            id='il-FlagBackground'
            fill='url(#il-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='il-Rectangle-2'
            fill='url(#il-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='3'
          />
          <rect
            id='il-Rectangle-2'
            fill='url(#il-linearGradient-2)'
            x='0'
            y='12'
            width='21'
            height='3'
          />
          <rect
            id='il-Rectangle-2'
            fill='url(#il-linearGradient-1)'
            x='0'
            y='3'
            width='21'
            height='9'
          />
          <path
            d='M7.17451256,7.91015593 L12.3399226,4.81316074 L12.240551,10.8350345 L7.17451256,7.91015593 Z'
            id='il-Star-25'
            stroke='#093EC5'
            strokeWidth='0.5'
            transform='translate(9.875000, 7.832532) rotate(-30.000000) translate(-9.875000, -7.832532) '
          />
          <path
            d='M7.17451263,7.24509219 L12.3399224,4.14809702 L12.240551,10.1699711 L7.17451263,7.24509219 Z'
            id='il-Star-25-Copy'
            stroke='#093EC5'
            strokeWidth='0.5'
            transform='translate(9.875000, 7.167468) scale(1, -1) rotate(-30.000000) translate(-9.875000, -7.167468) '
          />
        </g>
      </g>
    </svg>
  )
}

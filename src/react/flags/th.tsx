import type { SVGProps } from 'react'

export const IconFlagTH = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
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
      <title>TH</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='th-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='th-linearGradient-2'>
          <stop stopColor='#F12532' offset='0%' />
          <stop stopColor='#EB212E' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='th-linearGradient-3'>
          <stop stopColor='#322B6C' offset='0%' />
          <stop stopColor='#241F4E' offset='100%' />
        </linearGradient>
      </defs>
      <g id='th-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='th-TH'>
          <rect
            id='th-FlagBackground'
            fill='url(#th-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='th-Rectangle-2'
            fill='url(#th-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='3'
          />
          <rect
            id='th-Rectangle-2'
            fill='url(#th-linearGradient-2)'
            x='0'
            y='12'
            width='21'
            height='3'
          />
          <rect
            id='th-Rectangle-2'
            fill='url(#th-linearGradient-1)'
            x='0'
            y='3'
            width='21'
            height='9'
          />
          <rect
            id='th-Rectangle-2-Copy-4'
            fill='url(#th-linearGradient-3)'
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

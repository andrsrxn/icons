import type { SVGProps } from 'react'

export const IconFlagSO = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
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
      <title>SO</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='so-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='so-linearGradient-2'>
          <stop stopColor='#5D9FE9' offset='0%' />
          <stop stopColor='#458BDB' offset='100%' />
        </linearGradient>
      </defs>
      <g id='so-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='so-SO'>
          <rect
            id='so-FlagBackground'
            fill='url(#so-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='so-Mask-Copy'
            fill='url(#so-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <polygon
            id='so-Star-8'
            fill='url(#so-linearGradient-1)'
            points='10.5 9.25500007 7.85496636 11.1405765 8.83089575 8.04232485 6.22024568 6.10942353 9.46843684 6.08017512 10.5 3 11.5315632 6.08017512 14.7797543 6.10942353 12.1691043 8.04232485 13.1450336 11.1405765'
          />
        </g>
      </g>
    </svg>
  )
}

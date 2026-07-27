import type { SVGProps } from 'react'

export const IconFlagAX = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
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
      <title>AX</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ax-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ax-linearGradient-2'>
          <stop stopColor='#157CBB' offset='0%' />
          <stop stopColor='#0E6CA5' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ax-linearGradient-3'>
          <stop stopColor='#FFD34D' offset='0%' />
          <stop stopColor='#FECB2F' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ax-linearGradient-4'>
          <stop stopColor='#EB363A' offset='0%' />
          <stop stopColor='#D52B2F' offset='100%' />
        </linearGradient>
      </defs>
      <g id='ax-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='ax-AX'>
          <rect
            id='ax-FlagBackground'
            fill='url(#ax-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='ax-Mask-Copy'
            fill='url(#ax-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <polygon
            id='ax-Rectangle-2'
            fill='url(#ax-linearGradient-3)'
            points='0 9 6 9 6 15 9 15 9 9 21 9 21 6 9 6 9 0 6 0 6 6 0 6'
          />
          <polygon
            id='ax-Rectangle-2'
            fill='url(#ax-linearGradient-4)'
            points='0 8 7 8 7 15 8 15 8 8 21 8 21 7 8 7 8 0 7 0 7 7 0 7'
          />
        </g>
      </g>
    </svg>
  )
}

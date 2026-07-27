import type { SVGProps } from 'react'

export const IconFlagQA = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
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
      <title>QA</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='qa-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='qa-linearGradient-2'>
          <stop stopColor='#A6264C' offset='0%' />
          <stop stopColor='#8C1E3E' offset='100%' />
        </linearGradient>
      </defs>
      <g id='qa-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='qa-QA'>
          <rect
            id='qa-FlagBackground'
            fill='url(#qa-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='qa-Mask-Copy'
            fill='url(#qa-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <polygon
            id='qa-Rectangle-2-Copy'
            fill='url(#qa-linearGradient-1)'
            points='0 15 7.5 15 6 14 7.5 13 6 12 7.5 11 6 10 7.5 9 6 8 7.5 7 6 6 7.5 5 6 4 7.5 3 6 2 7.5 1 6 0 0 0'
          />
        </g>
      </g>
    </svg>
  )
}

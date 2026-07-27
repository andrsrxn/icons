import type { SVGProps } from 'react'

export const IconFlagZA = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
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
      <title>ZA</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='za-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='za-linearGradient-2'>
          <stop stopColor='#06A86E' offset='0%' />
          <stop stopColor='#007A4E' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='za-linearGradient-3'>
          <stop stopColor='#FFBF2E' offset='0%' />
          <stop stopColor='#FFB612' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='za-linearGradient-4'>
          <stop stopColor='#262626' offset='0%' />
          <stop stopColor='#0D0D0D' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='za-linearGradient-5'>
          <stop stopColor='#F44E46' offset='0%' />
          <stop stopColor='#DF3931' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='za-linearGradient-6'>
          <stop stopColor='#072CB4' offset='0%' />
          <stop stopColor='#042396' offset='100%' />
        </linearGradient>
      </defs>
      <g id='za-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='za-ZA'>
          <rect
            id='za-FlagBackground'
            fill='url(#za-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect id='za-Mask' fill='url(#za-linearGradient-2)' x='0' y='0' width='21' height='15' />
          <polygon id='za-Rectangle-83' fill='url(#za-linearGradient-3)' points='0 2 7 7.5 0 13' />
          <polygon
            id='za-Rectangle-83-Copy-5'
            fill='url(#za-linearGradient-4)'
            points='-1 2.25 5.75 7.5 -1 12.75'
          />
          <polygon id='za-Rectangle-83-Copy' fill='#FFFFFF' points='9 6 2 0 21 0 21 6' />
          <polygon
            id='za-Rectangle-83-Copy-3'
            fill='url(#za-linearGradient-5)'
            points='9.25 5 3.25 0 21 0 21 5'
          />
          <polygon id='za-Rectangle-83-Copy-2' fill='#FFFFFF' points='2 15 21 15 21 9 9 9' />
          <polygon
            id='za-Rectangle-83-Copy-4'
            fill='url(#za-linearGradient-6)'
            points='3.25 15 21 15 21 10 9.25 10'
          />
        </g>
      </g>
    </svg>
  )
}

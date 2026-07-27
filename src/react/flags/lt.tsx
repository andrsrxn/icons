import type { SVGProps } from 'react'

export const IconFlagLT = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
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
      <title>LT</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='lt-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='lt-linearGradient-2'>
          <stop stopColor='#118357' offset='0%' />
          <stop stopColor='#0B6A45' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='lt-linearGradient-3'>
          <stop stopColor='#D8343D' offset='0%' />
          <stop stopColor='#C02A32' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='lt-linearGradient-4'>
          <stop stopColor='#FEC34B' offset='0%' />
          <stop stopColor='#FCB931' offset='100%' />
        </linearGradient>
      </defs>
      <g id='lt-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='lt-LT'>
          <rect
            id='lt-FlagBackground'
            fill='url(#lt-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='lt-Rectangle-2'
            fill='url(#lt-linearGradient-2)'
            x='0'
            y='5'
            width='21'
            height='5'
          />
          <rect
            id='lt-Rectangle-2'
            fill='url(#lt-linearGradient-3)'
            x='0'
            y='10'
            width='21'
            height='5'
          />
          <rect
            id='lt-Rectangle-2'
            fill='url(#lt-linearGradient-4)'
            x='0'
            y='0'
            width='21'
            height='5'
          />
        </g>
      </g>
    </svg>
  )
}

import type { SVGProps } from 'react'

export const IconFlagIE = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
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
      <title>IE</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ie-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ie-linearGradient-2'>
          <stop stopColor='#FF8515' offset='0%' />
          <stop stopColor='#FF7A00' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ie-linearGradient-3'>
          <stop stopColor='#07BB59' offset='0%' />
          <stop stopColor='#029C48' offset='100%' />
        </linearGradient>
      </defs>
      <g id='ie-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='ie-IE'>
          <rect
            id='ie-FlagBackground'
            fill='url(#ie-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect id='ie-Mask' fill='url(#ie-linearGradient-2)' x='10' y='0' width='11' height='15' />
          <rect
            id='ie-Rectangle-2'
            fill='url(#ie-linearGradient-3)'
            x='0'
            y='0'
            width='7'
            height='15'
          />
          <rect
            id='ie-Rectangle-2-Copy'
            fill='url(#ie-linearGradient-1)'
            x='7'
            y='0'
            width='7'
            height='15'
          />
        </g>
      </g>
    </svg>
  )
}

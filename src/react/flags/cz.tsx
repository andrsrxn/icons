import type { SVGProps } from 'react'

export const IconFlagCZ = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
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
      <title>CZ</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='cz-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='cz-linearGradient-2'>
          <stop stopColor='#E8252A' offset='0%' />
          <stop stopColor='#D7151A' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='cz-linearGradient-3'>
          <stop stopColor='#17579E' offset='0%' />
          <stop stopColor='#10457F' offset='100%' />
        </linearGradient>
      </defs>
      <g id='cz-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='cz-CZ'>
          <rect
            id='cz-FlagBackground'
            fill='url(#cz-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='cz-Rectangle-2'
            fill='url(#cz-linearGradient-2)'
            x='0'
            y='7'
            width='21'
            height='8'
          />
          <rect
            id='cz-Rectangle-2'
            fill='url(#cz-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='7'
          />
          <polygon id='cz-Rectangle-83' fill='url(#cz-linearGradient-3)' points='0 0 10 7.5 0 15' />
        </g>
      </g>
    </svg>
  )
}

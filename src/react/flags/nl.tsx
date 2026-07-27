import type { SVGProps } from 'react'

export const IconFlagNL = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
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
      <title>NL</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='nl-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='nl-linearGradient-2'>
          <stop stopColor='#CA2B39' offset='0%' />
          <stop stopColor='#AC1F2C' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='nl-linearGradient-3'>
          <stop stopColor='#2C56A2' offset='0%' />
          <stop stopColor='#244889' offset='100%' />
        </linearGradient>
      </defs>
      <g id='nl-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='nl-NL'>
          <rect
            id='nl-FlagBackground'
            fill='url(#nl-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='nl-Rectangle-2'
            fill='url(#nl-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='5'
          />
          <rect
            id='nl-Rectangle-2'
            fill='url(#nl-linearGradient-3)'
            x='0'
            y='10'
            width='21'
            height='5'
          />
          <rect
            id='nl-Rectangle-2'
            fill='url(#nl-linearGradient-1)'
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

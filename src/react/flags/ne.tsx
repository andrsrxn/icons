import type { SVGProps } from 'react'

export const IconFlagNE = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
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
      <title>NE</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ne-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ne-linearGradient-2'>
          <stop stopColor='#F0642F' offset='0%' />
          <stop stopColor='#DF531D' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ne-linearGradient-3'>
          <stop stopColor='#2DCC45' offset='0%' />
          <stop stopColor='#1FAF35' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ne-linearGradient-4'>
          <stop stopColor='#E85C27' offset='0%' />
          <stop stopColor='#DF531D' offset='100%' />
        </linearGradient>
      </defs>
      <g id='ne-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='ne-NE'>
          <rect
            id='ne-FlagBackground'
            fill='url(#ne-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='ne-Rectangle-2'
            fill='url(#ne-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='5'
          />
          <rect
            id='ne-Rectangle-2'
            fill='url(#ne-linearGradient-3)'
            x='0'
            y='10'
            width='21'
            height='5'
          />
          <rect
            id='ne-Rectangle-2-Copy-4'
            fill='url(#ne-linearGradient-1)'
            x='0'
            y='5'
            width='21'
            height='5'
          />
          <circle id='ne-Oval-12' fill='url(#ne-linearGradient-4)' cx='10.5' cy='7.5' r='2' />
        </g>
      </g>
    </svg>
  )
}

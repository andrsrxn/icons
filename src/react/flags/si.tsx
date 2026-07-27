import type { SVGProps } from 'react'

export const IconFlagSI = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
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
      <title>SI</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='si-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='si-linearGradient-2'>
          <stop stopColor='#0C47B7' offset='0%' />
          <stop stopColor='#073DA4' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='si-linearGradient-3'>
          <stop stopColor='#E53B35' offset='0%' />
          <stop stopColor='#D32E28' offset='100%' />
        </linearGradient>
      </defs>
      <g id='si-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='si-SI'>
          <rect
            id='si-FlagBackground'
            fill='url(#si-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='si-Rectangle-2'
            fill='url(#si-linearGradient-2)'
            x='0'
            y='3'
            width='21'
            height='7'
          />
          <rect
            id='si-Rectangle-2'
            fill='url(#si-linearGradient-3)'
            x='0'
            y='10'
            width='21'
            height='5'
          />
          <path
            d='M0,5 L0,0 L21,0 L21,5 L6.9329834,5 L6.9329834,4 C6.9329834,4 6.22775438,3.5 5.5,3.5 C4.77224562,3.5 4,4 4,4 L4,5 L0,5 Z M5.5,7 C4.94771525,7 4.5,6.55228475 4.5,6 C4.5,5.44771525 4.94771525,5 5.5,5 C6.05228475,5 6.5,5.44771525 6.5,6 C6.5,6.55228475 6.05228475,7 5.5,7 Z'
            id='si-Rectangle-2'
            fill='url(#si-linearGradient-1)'
          />
        </g>
      </g>
    </svg>
  )
}

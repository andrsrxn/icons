import type { SVGProps } from 'react'

export const IconFlagSD = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
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
      <title>SD</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='sd-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='sd-linearGradient-2'>
          <stop stopColor='#262626' offset='0%' />
          <stop stopColor='#0D0D0D' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='sd-linearGradient-3'>
          <stop stopColor='#EA1F44' offset='0%' />
          <stop stopColor='#D01739' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='sd-linearGradient-4'>
          <stop stopColor='#12933B' offset='0%' />
          <stop stopColor='#0D722D' offset='100%' />
        </linearGradient>
      </defs>
      <g id='sd-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='sd-SD'>
          <rect
            id='sd-FlagBackground'
            fill='url(#sd-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='sd-Rectangle-2'
            fill='url(#sd-linearGradient-2)'
            x='0'
            y='10'
            width='21'
            height='5'
          />
          <rect
            id='sd-Rectangle-2'
            fill='url(#sd-linearGradient-3)'
            x='0'
            y='0'
            width='21'
            height='5'
          />
          <rect
            id='sd-Rectangle-2'
            fill='url(#sd-linearGradient-1)'
            x='0'
            y='5'
            width='21'
            height='5'
          />
          <polygon id='sd-Rectangle-83' fill='url(#sd-linearGradient-4)' points='0 0 10 7.5 0 15' />
        </g>
      </g>
    </svg>
  )
}

import type { SVGProps } from 'react'

export const IconFlagCF = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
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
      <title>CF</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='cf-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='cf-linearGradient-2'>
          <stop stopColor='#083D96' offset='0%' />
          <stop stopColor='#053380' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='cf-linearGradient-3'>
          <stop stopColor='#37AE39' offset='0%' />
          <stop stopColor='#2E9630' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='cf-linearGradient-4'>
          <stop stopColor='#FFD13F' offset='0%' />
          <stop stopColor='#FFCD2F' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='cf-linearGradient-5'>
          <stop stopColor='#E42346' offset='0%' />
          <stop stopColor='#D01739' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='cf-linearGradient-6'>
          <stop stopColor='#FFD03B' offset='0%' />
          <stop stopColor='#FFCD2F' offset='100%' />
        </linearGradient>
      </defs>
      <g id='cf-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='cf-CF'>
          <rect
            id='cf-FlagBackground'
            fill='url(#cf-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='cf-Rectangle-2'
            fill='url(#cf-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='4'
          />
          <rect
            id='cf-Rectangle-2'
            fill='url(#cf-linearGradient-3)'
            x='0'
            y='7'
            width='21'
            height='4'
          />
          <rect
            id='cf-Rectangle-2'
            fill='url(#cf-linearGradient-4)'
            x='0'
            y='11'
            width='21'
            height='4'
          />
          <rect
            id='cf-Rectangle-2'
            fill='url(#cf-linearGradient-1)'
            x='0'
            y='4'
            width='21'
            height='3'
          />
          <rect
            id='cf-Rectangle-2'
            fill='url(#cf-linearGradient-5)'
            x='8'
            y='0'
            width='5'
            height='15'
          />
          <polygon
            id='cf-Star-8'
            fill='url(#cf-linearGradient-6)'
            points='3.5 2.58500002 2.61832212 3.21352549 2.94363192 2.18077495 2.07341523 1.53647451 3.15614561 1.52672504 3.5 0.5 3.84385439 1.52672504 4.92658477 1.53647451 4.05636808 2.18077495 4.38167788 3.21352549'
          />
        </g>
      </g>
    </svg>
  )
}

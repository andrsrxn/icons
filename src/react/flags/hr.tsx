import type { FlagIcon, FlagIconProps } from '../types'

export const IconFlagHR: FlagIcon = ({ className, ...props }: FlagIconProps) => {
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
      <title>HR</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='hr-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='hr-linearGradient-2'>
          <stop stopColor='#FF202D' offset='0%' />
          <stop stopColor='#FD0D1B' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='hr-linearGradient-3'>
          <stop stopColor='#2027AC' offset='0%' />
          <stop stopColor='#191F94' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='hr-linearGradient-4'>
          <stop stopColor='#FF212E' offset='0%' />
          <stop stopColor='#FD0D1B' offset='100%' />
        </linearGradient>
      </defs>
      <g id='hr-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='hr-HR'>
          <rect
            id='hr-FlagBackground'
            fill='url(#hr-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='hr-Rectangle-2'
            fill='url(#hr-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='5'
          />
          <path
            d='M8,4 L8.5,3.5 L9,4 L9,5 L8,5 L8,4 Z M10,4 L10.5,3.5 L11,4 L11,5 L10,5 L10,4 Z M12,4 L12.5,3.5 L13,4 L13,5 L12,5 L12,4 Z'
            id='hr-Rectangle-675'
            fill='#1895DB'
            opacity='0.5'
          />
          <path
            d='M9,4 L9.5,3.5 L10,4 L10,5 L9,5 L9,4 Z M11,4 L11.5,3.5 L12,4 L12,5 L11,5 L11,4 Z'
            id='hr-Rectangle-675'
            fill='#191F94'
            opacity='0.5'
          />
          <rect
            id='hr-Rectangle-2'
            fill='url(#hr-linearGradient-3)'
            x='0'
            y='10'
            width='21'
            height='5'
          />
          <path
            d='M0,10 L0,5 L21,5 L21,10 L0,10 Z M12,10 L13,10 L12.726593,10.546814 C12.6014491,10.7971017 12.273407,11 12,11 L12,10 Z M10,10 L11,10 L11,11 L10,11 L10,10 Z M8,10 L9,10 L9,11 C8.72385763,11 8.40359497,10.8071899 8.27340698,10.546814 L8,10 Z'
            id='hr-Rectangle-2'
            fill='url(#hr-linearGradient-1)'
          />
          <path
            d='M10,5 L11,5 L11,6 L10,6 L10,5 Z M12,5 L12.5,5 L13,6 L12,6 L12,5 Z M8.5,5 L9,5 L9,6 L8,6 L8.5,5 Z M9,6 L10,6 L10,7 L9,7 L9,6 Z M11,6 L12,6 L12,7 L11,7 L11,6 Z M10,7 L11,7 L11,8 L10,8 L10,7 Z M12,7 L13,7 L13,8 L12,8 L12,7 Z M11,8 L12,8 L12,9 L11,9 L11,8 Z M8,7 L9,7 L9,8 L8,8 L8,7 Z M9,8 L10,8 L10,9 L9,9 L9,8 Z M8,9 L9,9 L9,10 L8,10 L8,9 Z M10,9 L11,9 L11,10 L10,10 L10,9 Z M12,9 L13,9 L13,10 L12,10 L12,9 Z M11,10 L12,10 L12,11 L11,11 L11,10 Z M9,10 L10,10 L10,11 L9,11 L9,10 Z'
            id='hr-Rectangle-657'
            fill='url(#hr-linearGradient-4)'
          />
        </g>
      </g>
    </svg>
  )
}

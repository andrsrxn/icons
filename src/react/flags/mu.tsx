import type { FlagIcon, FlagIconProps } from '../types'

export const IconFlagMU: FlagIcon = ({ className, ...props }: FlagIconProps) => {
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
      <title>MU</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='mu-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='mu-linearGradient-2'>
          <stop stopColor='#1DBB63' offset='0%' />
          <stop stopColor='#17A455' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='mu-linearGradient-3'>
          <stop stopColor='#222B82' offset='0%' />
          <stop stopColor='#1B236C' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='mu-linearGradient-4'>
          <stop stopColor='#FFD741' offset='0%' />
          <stop stopColor='#FFD430' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='mu-linearGradient-5'>
          <stop stopColor='#F4374A' offset='0%' />
          <stop stopColor='#E92C3F' offset='100%' />
        </linearGradient>
      </defs>
      <g id='mu-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='mu-MU'>
          <rect
            id='mu-FlagBackground'
            fill='url(#mu-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='mu-Rectangle-2'
            fill='url(#mu-linearGradient-2)'
            x='0'
            y='12'
            width='21'
            height='3'
          />
          <rect
            id='mu-Rectangle-2'
            fill='url(#mu-linearGradient-3)'
            x='0'
            y='4'
            width='21'
            height='4'
          />
          <rect
            id='mu-Rectangle-2'
            fill='url(#mu-linearGradient-4)'
            x='0'
            y='8'
            width='21'
            height='4'
          />
          <rect
            id='mu-Rectangle-2'
            fill='url(#mu-linearGradient-5)'
            x='0'
            y='0'
            width='21'
            height='4'
          />
        </g>
      </g>
    </svg>
  )
}

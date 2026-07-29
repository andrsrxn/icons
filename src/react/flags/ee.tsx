import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagEE: FlagIcon = ({ className, ...props }: FlagIconProps) => {
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
      <title>EE</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ee-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ee-linearGradient-2'>
          <stop stopColor='#262626' offset='0%' />
          <stop stopColor='#0D0D0D' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ee-linearGradient-3'>
          <stop stopColor='#5DA8F1' offset='0%' />
          <stop stopColor='#4892DA' offset='100%' />
        </linearGradient>
      </defs>
      <g id='ee-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='ee-EE'>
          <rect
            id='ee-FlagBackground'
            fill='url(#ee-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='ee-Rectangle-2'
            fill='url(#ee-linearGradient-2)'
            x='0'
            y='5'
            width='21'
            height='5'
          />
          <rect
            id='ee-Rectangle-2'
            fill='url(#ee-linearGradient-3)'
            x='0'
            y='0'
            width='21'
            height='5'
          />
          <rect
            id='ee-Rectangle-2'
            fill='url(#ee-linearGradient-1)'
            x='0'
            y='10'
            width='21'
            height='5'
          />
        </g>
      </g>
    </svg>
  )
}

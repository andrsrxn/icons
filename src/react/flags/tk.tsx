import type { FlagIcon, FlagIconProps } from '../types'

export const IconFlagTK: FlagIcon = ({ className, ...props }: FlagIconProps) => {
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
      <title>TK</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='tk-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='tk-linearGradient-2'>
          <stop stopColor='#0637C5' offset='0%' />
          <stop stopColor='#002CAA' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='tk-linearGradient-3'>
          <stop stopColor='#FDD33F' offset='0%' />
          <stop stopColor='#FED02F' offset='100%' />
        </linearGradient>
      </defs>
      <g id='tk-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='tk-TK'>
          <rect
            id='tk-FlagBackground'
            fill='url(#tk-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='tk-Mask-Copy'
            fill='url(#tk-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <path
            d='M4,12 L19,12 L19,13 L3,13 L4,12 Z M11.5,6 C14.5,4 18,2 18,2 C18,2 16.3573445,5.07344524 16.5,6.5 C16.6906779,8.40677857 19,11 19,11 L5,11 C5,11 8.5,8 11.5,6 Z'
            id='tk-Combined-Shape'
            fill='url(#tk-linearGradient-3)'
          />
          <polygon
            id='tk-Star-2'
            fill='#FFFFFF'
            points='4 9 3.29289322 9.20710678 3.5 8.5 3.29289322 7.79289322 4 8 4.70710678 7.79289322 4.5 8.5 4.70710678 9.20710678'
          />
          <polygon
            id='tk-Star-2'
            fill='#FFFFFF'
            points='5 2.5 4.29289322 2.70710678 4.5 2 4.29289322 1.29289322 5 1.5 5.70710678 1.29289322 5.5 2 5.70710678 2.70710678'
          />
          <polygon
            id='tk-Star-2'
            fill='#FFFFFF'
            points='7 5.5 6.29289322 5.70710678 6.5 5 6.29289322 4.29289322 7 4.5 7.70710678 4.29289322 7.5 5 7.70710678 5.70710678'
          />
          <polygon
            id='tk-Star-2'
            fill='#FFFFFF'
            points='2 5.5 1.29289322 5.70710678 1.5 5 1.29289322 4.29289322 2 4.5 2.70710678 4.29289322 2.5 5 2.70710678 5.70710678'
          />
        </g>
      </g>
    </svg>
  )
}

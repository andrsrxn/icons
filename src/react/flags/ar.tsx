import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagAR: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  ...props
}: FlagIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      role='img'
      className={`ui-icon-flag ${className ?? ''}`}
      {...props}>
      <title>AR</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ar-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ar-linearGradient-2'>
          <stop stopColor='#88BBE8' offset='0%' />
          <stop stopColor='#76ADDD' offset='100%' />
        </linearGradient>
      </defs>
      <g id='ar-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='ar-AR'>
          <rect
            id='ar-FlagBackground'
            fill='url(#ar-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='ar-Rectangle-2'
            fill='url(#ar-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='5'
          />
          <rect
            id='ar-Rectangle-2'
            fill='url(#ar-linearGradient-2)'
            x='0'
            y='10'
            width='21'
            height='5'
          />
          <rect
            id='ar-Rectangle-2'
            fill='url(#ar-linearGradient-1)'
            x='0'
            y='5'
            width='21'
            height='5'
          />
          <path
            d='M10.5,9.5 C9.3954305,9.5 8.5,8.6045695 8.5,7.5 C8.5,6.3954305 9.3954305,5.5 10.5,5.5 C11.6045695,5.5 12.5,6.3954305 12.5,7.5 C12.5,8.6045695 11.6045695,9.5 10.5,9.5 Z'
            id='ar-Oval-1'
            fill='#DB7A2C'
            fillRule='nonzero'
          />
          <circle id='ar-Oval-1' fill='#F4B32E' cx='10.5' cy='7.5' r='1.5' />
        </g>
      </g>
    </svg>
  )
}

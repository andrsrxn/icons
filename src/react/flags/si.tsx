import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagSI: FlagIcon = ({
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
      <title>SI</title>

      <defs>
        <linearGradient id='si-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='si-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#0c47b7' />
          <stop offset='100%' stopColor='#073da4' />
        </linearGradient>
        <linearGradient id='si-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e53b35' />
          <stop offset='100%' stopColor='#d32e28' />
        </linearGradient>
        <clipPath id='si-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#si-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#si-a)' d='M0 0h21v15H0z' />
          <path fill='url(#si-b)' d='M0 3h21v7H0z' />
          <path fill='url(#si-c)' d='M0 10h21v5H0z' />
          <path
            fill='url(#si-a)'
            d='M0 5V0h21v5H6.933V4s-.705-.5-1.433-.5S4 4 4 4v1zm5.5 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2'
          />
        </g>
      </g>
    </svg>
  )
}

import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagRU: FlagIcon = ({
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
      <title>RU</title>

      <defs>
        <linearGradient id='ru-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='ru-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#0c47b7' />
          <stop offset='100%' stopColor='#073da4' />
        </linearGradient>
        <linearGradient id='ru-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e53b35' />
          <stop offset='100%' stopColor='#d32e28' />
        </linearGradient>
        <clipPath id='ru-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ru-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#ru-a)' d='M0 0h21v15H0z' />
          <path fill='url(#ru-b)' d='M0 5h21v5H0z' />
          <path fill='url(#ru-c)' d='M0 10h21v5H0z' />
          <path fill='url(#ru-a)' d='M0 0h21v5H0z' />
        </g>
      </g>
    </svg>
  )
}

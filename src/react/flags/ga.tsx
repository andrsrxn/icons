import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagGA: FlagIcon = ({
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
      <title>GA</title>

      <defs>
        <linearGradient id='ga-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='ga-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#09b470' />
          <stop offset='100%' stopColor='#019f60' />
        </linearGradient>
        <linearGradient id='ga-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#508cde' />
          <stop offset='100%' stopColor='#3a75c5' />
        </linearGradient>
        <linearGradient id='ga-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffd935' />
          <stop offset='100%' stopColor='#fdd216' />
        </linearGradient>
        <clipPath id='ga-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ga-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#ga-a)' d='M0 0h21v15H0z' />
          <path fill='url(#ga-b)' d='M0 0h21v5H0z' />
          <path fill='url(#ga-c)' d='M0 10h21v5H0z' />
          <path fill='url(#ga-d)' d='M0 5h21v5H0z' />
        </g>
      </g>
    </svg>
  )
}

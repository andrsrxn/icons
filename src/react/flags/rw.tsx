import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagRW: FlagIcon = ({
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
      <title>RW</title>

      <defs>
        <linearGradient id='rw-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='rw-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#2d754d' />
          <stop offset='100%' stopColor='#235f3e' />
        </linearGradient>
        <linearGradient id='rw-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#25b1eb' />
          <stop offset='100%' stopColor='#1aa3dc' />
        </linearGradient>
        <linearGradient id='rw-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fad546' />
          <stop offset='100%' stopColor='#fad12f' />
        </linearGradient>
        <linearGradient id='rw-e' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#edc738' />
          <stop offset='100%' stopColor='#e5be2a' />
        </linearGradient>
        <clipPath id='rw-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#rw-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#rw-a)' d='M0 0h21v15H0z' />
          <path fill='url(#rw-b)' d='M0 11h21v4H0z' />
          <path fill='url(#rw-c)' d='M0 0h21v7H0z' />
          <path fill='url(#rw-d)' d='M0 7h21v4H0z' />
          <path
            fill='url(#rw-e)'
            d='m16 4.5-.765.848.058-1.14-1.14.057L15 3.5l-.848-.765 1.14.058-.057-1.14L16 2.5l.765-.848-.058 1.14 1.14-.057L17 3.5l.848.765-1.14-.058.057 1.14z'
          />
        </g>
      </g>
    </svg>
  )
}

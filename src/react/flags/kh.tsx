import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagKH: FlagIcon = ({
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
      <title>KH</title>

      <defs>
        <linearGradient id='kh-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='kh-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#0f3eb6' />
          <stop offset='100%' stopColor='#09339f' />
        </linearGradient>
        <linearGradient id='kh-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ed1a3c' />
          <stop offset='100%' stopColor='#de0b2d' />
        </linearGradient>
        <clipPath id='kh-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#kh-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#kh-a)' d='M0 0h21v15H0z' />
          <path fill='url(#kh-b)' d='M0 0h21v4H0z' />
          <path fill='url(#kh-b)' d='M0 11h21v4H0z' />
          <path fill='url(#kh-c)' d='M0 4h21v7H0z' />
          <path
            fill='url(#kh-a)'
            d='M7.5 8h1v2h-2zM9 8h3v2H9zm3.5 0h1l1 2h-2zm0-1.492A.51.51 0 0 1 13 6a.5.5 0 0 1 .5.508V7.5h-1zM9 6.545h1v-.547c0-.275.232-.498.5-.498.276 0 .5.222.5.498v.547h1V7.5H9zm-1.5-.037A.51.51 0 0 1 8 6a.5.5 0 0 1 .5.508V7.5h-1z'
          />
        </g>
      </g>
    </svg>
  )
}

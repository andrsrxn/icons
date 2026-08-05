import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagTL: FlagIcon = ({
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
      <title>TL</title>

      <defs>
        <linearGradient id='tl-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='tl-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ff323e' />
          <stop offset='100%' stopColor='#fd0d1b' />
        </linearGradient>
        <linearGradient id='tl-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffcc51' />
          <stop offset='100%' stopColor='#ffc63c' />
        </linearGradient>
        <linearGradient id='tl-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <clipPath id='tl-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#tl-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#tl-a)' d='M0 0h21v15H0z' />
          <path fill='url(#tl-b)' d='M0 0h21v15H0z' />
          <path fill='url(#tl-c)' d='m0 0 13 7.5L0 15z' />
          <path fill='url(#tl-d)' d='m0 0 9 7.5L0 15z' />
          <path
            fill='url(#tl-a)'
            d='M3.92 8.262 2.62 9.19l.48-1.524-1.284-.951L3.413 6.7l.507-1.515.508 1.515 1.598.015-1.284.95.48 1.525z'
            transform='rotate(-30 3.92 7.187)'
          />
        </g>
      </g>
    </svg>
  )
}

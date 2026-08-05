import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagPT: FlagIcon = ({
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
      <title>PT</title>

      <defs>
        <linearGradient id='pt-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='pt-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ff2936' />
          <stop offset='100%' stopColor='#fd0d1b' />
        </linearGradient>
        <linearGradient id='pt-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#128415' />
          <stop offset='100%' stopColor='#0a650c' />
        </linearGradient>
        <linearGradient id='pt-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#faf94f' />
          <stop offset='100%' stopColor='#f8f736' />
        </linearGradient>
        <linearGradient id='pt-e' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#1d50b5' />
          <stop offset='100%' stopColor='#15439d' />
        </linearGradient>
        <clipPath id='pt-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#pt-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#pt-a)' d='M0 0h21v15H0z' />
          <path fill='url(#pt-b)' d='M0 0h21v15H0z' />
          <path fill='url(#pt-c)' d='M0 0h8v15H0z' />
          <path
            fill='url(#pt-d)'
            fillRule='nonzero'
            d='M8 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 1a3 3 0 1 1 0-6 3 3 0 0 1 0 6'
          />
          <path
            fill='url(#pt-a)'
            d='M7 6.256A.25.25 0 0 1 7.245 6h1.51A.25.25 0 0 1 9 6.256V8A.997.997 0 0 1 8 9c-.552 0-1-.443-1-.999z'
          />
          <path fill='url(#pt-e)' d='M8 8c.276 0 .5-.724.5-1a.5.5 0 0 0-1 0c0 .276.224 1 .5 1' />
        </g>
      </g>
    </svg>
  )
}

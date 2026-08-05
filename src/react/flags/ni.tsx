import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagNI: FlagIcon = ({
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
      <title>NI</title>

      <defs>
        <linearGradient id='ni-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='ni-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#1a78d6' />
          <stop offset='100%' stopColor='#106ac4' />
        </linearGradient>
        <clipPath id='ni-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ni-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#ni-a)' d='M0 0h21v15H0z' />
          <path fill='url(#ni-b)' d='M0 0h21v5H0z' />
          <path fill='url(#ni-b)' d='M0 10h21v5H0z' />
          <path fill='url(#ni-a)' d='M0 5h21v5H0z' />
          <path
            fill='#dbcd92'
            fillRule='nonzero'
            d='M10.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 .5a2 2 0 1 1 0-4 2 2 0 0 1 0 4'
          />
          <path fill='#9cddee' d='m10.5 6.5 1 2h-2z' />
        </g>
      </g>
    </svg>
  )
}

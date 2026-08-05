import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagIL: FlagIcon = ({
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
      <title>IL</title>

      <defs>
        <linearGradient id='il-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='il-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#0e46d4' />
          <stop offset='100%' stopColor='#0538b9' />
        </linearGradient>
        <clipPath id='il-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#il-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#il-a)' d='M0 0h21v15H0z' />
          <path fill='url(#il-b)' d='M0 0h21v3H0z' />
          <path fill='url(#il-b)' d='M0 12h21v3H0z' />
          <path fill='url(#il-a)' d='M0 3h21v9H0z' />
          <path stroke='#093ec5' strokeWidth='.5' d='M7.575 9.25 10.5 3.985l2.925 5.265z' />
          <path stroke='#093ec5' strokeWidth='.5' d='m7.575 5.75 2.925 5.265 2.925-5.265z' />
        </g>
      </g>
    </svg>
  )
}

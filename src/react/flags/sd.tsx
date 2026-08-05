import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagSD: FlagIcon = ({
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
      <title>SD</title>

      <defs>
        <linearGradient id='sd-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='sd-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <linearGradient id='sd-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ea1f44' />
          <stop offset='100%' stopColor='#d01739' />
        </linearGradient>
        <linearGradient id='sd-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#12933b' />
          <stop offset='100%' stopColor='#0d722d' />
        </linearGradient>
        <clipPath id='sd-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#sd-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#sd-a)' d='M0 0h21v15H0z' />
          <path fill='url(#sd-b)' d='M0 10h21v5H0z' />
          <path fill='url(#sd-c)' d='M0 0h21v5H0z' />
          <path fill='url(#sd-a)' d='M0 5h21v5H0z' />
          <path fill='url(#sd-d)' d='m0 0 10 7.5L0 15z' />
        </g>
      </g>
    </svg>
  )
}

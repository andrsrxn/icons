import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagCW: FlagIcon = ({
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
      <title>CW</title>

      <defs>
        <linearGradient id='cw-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='cw-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#0543a8' />
          <stop offset='100%' stopColor='#00307d' />
        </linearGradient>
        <linearGradient id='cw-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fcc747' />
          <stop offset='100%' stopColor='#fec539' />
        </linearGradient>
        <clipPath id='cw-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#cw-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#cw-a)' d='M0 0h21v15H0z' />
          <path fill='url(#cw-b)' d='M0 0h21v15H0z' />
          <path fill='url(#cw-c)' d='M0 10h21v2H0z' />
          <path
            fill='url(#cw-a)'
            d='m6.5 6.267-1.176.851.447-1.381-1.173-.855 1.451-.003L6.5 3.5l.45 1.38 1.452.002-1.173.855.447 1.381z'
          />
          <path
            fill='url(#cw-a)'
            d='m3 3.575-.882.639.335-1.036-.88-.642 1.089-.001L3 1.5l.338 1.035 1.089.001-.88.642.335 1.036z'
          />
        </g>
      </g>
    </svg>
  )
}

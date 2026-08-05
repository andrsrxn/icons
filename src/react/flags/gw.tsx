import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagGW: FlagIcon = ({
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
      <title>GW</title>

      <defs>
        <linearGradient id='gw-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='gw-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#1ab558' />
          <stop offset='100%' stopColor='#169e4d' />
        </linearGradient>
        <linearGradient id='gw-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffd952' />
          <stop offset='100%' stopColor='#fcd036' />
        </linearGradient>
        <linearGradient id='gw-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e72b42' />
          <stop offset='100%' stopColor='#cc162c' />
        </linearGradient>
        <linearGradient id='gw-e' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <clipPath id='gw-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#gw-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#gw-a)' d='M0 0h21v15H0z' />
          <path fill='url(#gw-b)' d='M0 7h21v8H0z' />
          <path fill='url(#gw-c)' d='M0 0h21v7H0z' />
          <path fill='url(#gw-d)' d='M0 0h8v15H0z' />
          <path
            fill='url(#gw-e)'
            d='M4 8.459 2.53 9.523l.558-1.727-1.466-1.069 1.814-.003L4 5l.564 1.724 1.814.003-1.466 1.07.557 1.726z'
          />
        </g>
      </g>
    </svg>
  )
}

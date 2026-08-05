import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagSR: FlagIcon = ({
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
      <title>SR</title>

      <defs>
        <linearGradient id='sr-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='sr-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#43924c' />
          <stop offset='100%' stopColor='#3a7e42' />
        </linearGradient>
        <linearGradient id='sr-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#cd153a' />
          <stop offset='100%' stopColor='#b31031' />
        </linearGradient>
        <linearGradient id='sr-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f5d24b' />
          <stop offset='100%' stopColor='#ecc736' />
        </linearGradient>
        <clipPath id='sr-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#sr-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#sr-a)' d='M0 0h21v15H0z' />
          <path fill='url(#sr-b)' d='M0 0h21v3H0z' />
          <path fill='url(#sr-b)' d='M0 12h21v3H0z' />
          <path fill='url(#sr-a)' d='M0 3h21v9H0z' />
          <path fill='url(#sr-c)' d='M0 5h21v5H0z' />
          <path
            fill='url(#sr-d)'
            d='m10.5 8.775-1.47.998.495-1.706-1.403-1.09 1.776-.056.602-1.671.602 1.67 1.776.057-1.403 1.09.494 1.706z'
          />
        </g>
      </g>
    </svg>
  )
}

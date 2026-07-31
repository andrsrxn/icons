import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagLGBT: FlagIcon = ({
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
      <title>LGBT</title>
      <defs>
        <linearGradient id='lgbt-linearGradient-1' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='lgbt-linearGradient-2' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f71e24' />
          <stop offset='100%' stopColor='#fb141b' />
        </linearGradient>
        <linearGradient id='lgbt-linearGradient-3' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fb6c2c' />
          <stop offset='100%' stopColor='#fc6420' />
        </linearGradient>
        <linearGradient id='lgbt-linearGradient-4' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fdfc42' />
          <stop offset='100%' stopColor='#fffd38' />
        </linearGradient>
        <linearGradient id='lgbt-linearGradient-5' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#238f35' />
          <stop offset='100%' stopColor='#1c7e2c' />
        </linearGradient>
        <linearGradient id='lgbt-linearGradient-6' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#0f62fa' />
          <stop offset='100%' stopColor='#0059fc' />
        </linearGradient>
      </defs>
      <g fill='none' fillRule='evenodd' stroke='none' strokeWidth='1'>
        <g>
          <path fill='url(#lgbt-linearGradient-1)' d='M0 0h21v15H0z' />
          <path fill='url(#lgbt-linearGradient-2)' d='M0 0h21v3H0z' />
          <path fill='url(#lgbt-linearGradient-3)' d='M0 3h21v3H0z' />
          <path fill='url(#lgbt-linearGradient-4)' d='M0 6h21v3H0z' />
          <path fill='url(#lgbt-linearGradient-5)' d='M0 9h21v3H0z' />
          <path fill='url(#lgbt-linearGradient-6)' d='M0 12h21v3H0z' />
        </g>
      </g>
    </svg>
  )
}

import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagPA: FlagIcon = ({
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
      <title>PA</title>

      <defs>
        <linearGradient id='pa-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='pa-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e52448' />
          <stop offset='100%' stopColor='#d01739' />
        </linearGradient>
        <linearGradient id='pa-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#1367ae' />
          <stop offset='100%' stopColor='#0a5492' />
        </linearGradient>
        <clipPath id='pa-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#pa-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#pa-a)' d='M0 0h21v15H0z' />
          <path fill='url(#pa-b)' d='M0 0h21v7H0z' />
          <path fill='url(#pa-c)' d='M0 7h21v8H0z' />
          <path fill='url(#pa-a)' d='M0 7V0h10v7zm10 8V7h11v8z' />
          <path
            fill='url(#pa-c)'
            d='m5 4.32-1.176.798.396-1.365-1.122-.871 1.42-.045L5 1.5l.482 1.337 1.42.045-1.122.871.396 1.365z'
          />
          <path
            fill='url(#pa-b)'
            d='m15.5 11.82-1.176.798.396-1.365-1.122-.871 1.42-.045L15.5 9l.482 1.337 1.42.045-1.122.871.396 1.365z'
          />
        </g>
      </g>
    </svg>
  )
}

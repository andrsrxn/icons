import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagCH: FlagIcon = ({
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
      <title>CH</title>

      <defs>
        <linearGradient id='ch-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='ch-b' x1='50%' x2='50%' y1='100%' y2='0%'>
          <stop offset='0%' stopColor='red' />
          <stop offset='100%' stopColor='#ff3131' />
        </linearGradient>
        <clipPath id='ch-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ch-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#ch-a)' d='M0 0h21v15H0z' />
          <path fill='url(#ch-b)' d='M0 0h21v15H0z' />
          <path
            fill='url(#ch-a)'
            d='M9 9H6.256A.255.255 0 0 1 6 8.744V6.256C6 6.115 6.114 6 6.256 6H9V3.256C9 3.115 9.114 3 9.256 3h2.488c.141 0 .256.114.256.256V6h2.744c.141 0 .256.114.256.256v2.488a.255.255 0 0 1-.256.256H12v2.744a.255.255 0 0 1-.256.256H9.256A.255.255 0 0 1 9 11.744z'
          />
        </g>
      </g>
    </svg>
  )
}

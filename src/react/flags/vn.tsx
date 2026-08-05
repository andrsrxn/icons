import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagVN: FlagIcon = ({
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
      <title>VN</title>

      <defs>
        <linearGradient id='vn-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='vn-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ea403f' />
          <stop offset='100%' stopColor='#d82827' />
        </linearGradient>
        <linearGradient id='vn-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fffe4e' />
          <stop offset='100%' stopColor='#fffe38' />
        </linearGradient>
        <clipPath id='vn-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#vn-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#vn-a)' d='M0 0h21v15H0z' />
          <path fill='url(#vn-b)' d='M0 0h21v15H0z' />
          <path
            fill='url(#vn-c)'
            d='m10.5 9.255-2.645 1.886.976-3.099L6.22 6.11l3.247-.029L10.5 3l1.032 3.08 3.248.03-2.61 1.932.975 3.099z'
          />
        </g>
      </g>
    </svg>
  )
}

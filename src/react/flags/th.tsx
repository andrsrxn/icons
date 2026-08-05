import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagTH: FlagIcon = ({
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
      <title>TH</title>

      <defs>
        <linearGradient id='th-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='th-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f12532' />
          <stop offset='100%' stopColor='#eb212e' />
        </linearGradient>
        <linearGradient id='th-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#322b6c' />
          <stop offset='100%' stopColor='#241f4e' />
        </linearGradient>
        <clipPath id='th-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#th-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#th-a)' d='M0 0h21v15H0z' />
          <path fill='url(#th-b)' d='M0 0h21v3H0z' />
          <path fill='url(#th-b)' d='M0 12h21v3H0z' />
          <path fill='url(#th-a)' d='M0 3h21v9H0z' />
          <path fill='url(#th-c)' d='M0 5h21v5H0z' />
        </g>
      </g>
    </svg>
  )
}

import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagLT: FlagIcon = ({
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
      <title>LT</title>

      <defs>
        <linearGradient id='lt-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='lt-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#118357' />
          <stop offset='100%' stopColor='#0b6a45' />
        </linearGradient>
        <linearGradient id='lt-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#d8343d' />
          <stop offset='100%' stopColor='#c02a32' />
        </linearGradient>
        <linearGradient id='lt-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fec34b' />
          <stop offset='100%' stopColor='#fcb931' />
        </linearGradient>
        <clipPath id='lt-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#lt-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#lt-a)' d='M0 0h21v15H0z' />
          <path fill='url(#lt-b)' d='M0 5h21v5H0z' />
          <path fill='url(#lt-c)' d='M0 10h21v5H0z' />
          <path fill='url(#lt-d)' d='M0 0h21v5H0z' />
        </g>
      </g>
    </svg>
  )
}

import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagGM: FlagIcon = ({
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
      <title>GM</title>

      <defs>
        <linearGradient id='gm-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='gm-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#df2237' />
          <stop offset='100%' stopColor='#ce1126' />
        </linearGradient>
        <linearGradient id='gm-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#4b9334' />
          <stop offset='100%' stopColor='#3b7828' />
        </linearGradient>
        <linearGradient id='gm-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#1526a7' />
          <stop offset='100%' stopColor='#0c1b8d' />
        </linearGradient>
        <clipPath id='gm-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#gm-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#gm-a)' d='M0 0h21v15H0z' />
          <path fill='url(#gm-b)' d='M0 0h21v5H0z' />
          <path fill='url(#gm-c)' d='M0 10h21v5H0z' />
          <path fill='url(#gm-a)' d='M0 5h21v5H0z' />
          <path fill='url(#gm-d)' d='M0 6h21v3H0z' />
        </g>
      </g>
    </svg>
  )
}

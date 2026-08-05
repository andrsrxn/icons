import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagYE: FlagIcon = ({
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
      <title>YE</title>

      <defs>
        <linearGradient id='ye-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='ye-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e32138' />
          <stop offset='100%' stopColor='#cc162c' />
        </linearGradient>
        <linearGradient id='ye-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <clipPath id='ye-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ye-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#ye-a)' d='M0 0h21v15H0z' />
          <path fill='url(#ye-b)' d='M0 0h21v5H0z' />
          <path fill='url(#ye-c)' d='M0 10h21v5H0z' />
          <path fill='url(#ye-a)' d='M0 5h21v5H0z' />
        </g>
      </g>
    </svg>
  )
}

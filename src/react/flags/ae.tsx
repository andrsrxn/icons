import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagAE: FlagIcon = ({
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
      <title>AE</title>

      <defs>
        <linearGradient id='ae-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='ae-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#12833b' />
          <stop offset='100%' stopColor='#0d7332' />
        </linearGradient>
        <linearGradient id='ae-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <linearGradient id='ae-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ff323e' />
          <stop offset='100%' stopColor='#fd0d1b' />
        </linearGradient>
        <clipPath id='ae-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ae-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#ae-a)' d='M0 0h21v15H0z' />
          <path fill='url(#ae-b)' d='M6 0h15v5H6z' />
          <path fill='url(#ae-c)' d='M6 10h15v5H6z' />
          <path fill='url(#ae-a)' d='M6 5h15v5H6z' />
          <path fill='url(#ae-d)' d='M0 0h6v15H0z' />
        </g>
      </g>
    </svg>
  )
}

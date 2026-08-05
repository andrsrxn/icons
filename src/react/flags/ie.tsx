import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagIE: FlagIcon = ({
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
      <title>IE</title>

      <defs>
        <linearGradient id='ie-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='ie-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ff8515' />
          <stop offset='100%' stopColor='#ff7a00' />
        </linearGradient>
        <linearGradient id='ie-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#07bb59' />
          <stop offset='100%' stopColor='#029c48' />
        </linearGradient>
        <clipPath id='ie-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ie-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#ie-a)' d='M0 0h21v15H0z' />
          <path fill='url(#ie-b)' d='M10 0h11v15H10z' />
          <path fill='url(#ie-c)' d='M0 0h7v15H0z' />
          <path fill='url(#ie-a)' d='M7 0h7v15H7z' />
        </g>
      </g>
    </svg>
  )
}

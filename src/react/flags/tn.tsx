import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagTN: FlagIcon = ({
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
      <title>TN</title>

      <defs>
        <linearGradient id='tn-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='tn-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e92434' />
          <stop offset='100%' stopColor='#e11324' />
        </linearGradient>
        <clipPath id='tn-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#tn-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#tn-a)' d='M0 0h21v15H0z' />
          <path fill='url(#tn-b)' d='M0 0h21v15H0z' />
          <path
            fill='url(#tn-a)'
            d='M11.858 4.273a3.5 3.5 0 1 0 0 6.453 3.25 3.25 0 0 1 0-6.453M10.5 12a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m1.766-3.622 1.352.505-.775-1.218.898-1.13-1.398.361-.797-1.204-.088 1.441-1.391.386 1.343.53-.063 1.442z'
          />
        </g>
      </g>
    </svg>
  )
}

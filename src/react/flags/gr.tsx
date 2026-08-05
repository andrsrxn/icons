import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagGR: FlagIcon = ({
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
      <title>GR</title>

      <defs>
        <linearGradient id='gr-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='gr-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#1c6dc1' />
          <stop offset='100%' stopColor='#1660ad' />
        </linearGradient>
        <clipPath id='gr-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#gr-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#gr-a)' d='M0 0h21v15H0z' />
          <path
            fill='url(#gr-b)'
            d='M0 0h4v4H0zm6 0h4v4H6zm4 0h11v2H10zm0 4h11v2H10zm0 4h11v2H10zM0 12h21v2H0zm6-6h4v4H6zM0 6h4v4H0z'
          />
        </g>
      </g>
    </svg>
  )
}

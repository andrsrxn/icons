import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagTT: FlagIcon = ({
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
      <title>TT</title>

      <defs>
        <linearGradient id='tt-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='tt-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ed233c' />
          <stop offset='100%' stopColor='#cc162c' />
        </linearGradient>
        <linearGradient id='tt-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <clipPath id='tt-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#tt-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#tt-a)' d='M0 0h21v15H0z' />
          <path fill='url(#tt-b)' d='M-.004.005h21v15h-21z' />
          <path
            fill='url(#tt-a)'
            d='m23-1-7.144-3.06-15.1 17.995L-1.5 16l7.653 3.07L20.977 1.403z'
            transform='matrix(-1 0 0 1 21.5 0)'
          />
          <path
            fill='url(#tt-c)'
            d='M3.09 20.22 21.731-1.997l-3.83-3.214L-.74 17.005z'
            transform='matrix(-1 0 0 1 20.991 0)'
          />
        </g>
      </g>
    </svg>
  )
}

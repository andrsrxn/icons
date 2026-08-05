import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagMH: FlagIcon = ({
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
      <title>MH</title>

      <defs>
        <linearGradient id='mh-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='mh-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#064dae' />
          <stop offset='100%' stopColor='#003d91' />
        </linearGradient>
        <linearGradient id='mh-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f18d36' />
          <stop offset='100%' stopColor='#db761e' />
        </linearGradient>
        <clipPath id='mh-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#mh-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#mh-a)' d='M0 0h21v15H0z' />
          <path fill='url(#mh-b)' d='M0 0h21v15H0z' />
          <path fill='url(#mh-c)' d='M21 0v4L0 15z' />
          <path fill='url(#mh-a)' d='M21 8V4L0 15z' />
          <path
            fill='url(#mh-a)'
            d='M4.839 4.372 4.5 2l-.339 2.372-.911-1.037.468 1.383-1.383-.468 1.037.911L1 5.5l2.372.339-1.037.911 1.383-.468-.468 1.383.911-1.037L4.5 9l.339-2.372.911 1.037-.468-1.383 1.383.468-1.037-.911L8 5.5l-2.372-.339 1.037-.911-1.383.468.468-1.383z'
          />
        </g>
      </g>
    </svg>
  )
}

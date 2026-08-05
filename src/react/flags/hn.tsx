import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagHN: FlagIcon = ({
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
      <title>HN</title>

      <defs>
        <linearGradient id='hn-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='hn-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#0884e6' />
          <stop offset='100%' stopColor='#0074d0' />
        </linearGradient>
        <linearGradient id='hn-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#0e88e9' />
          <stop offset='100%' stopColor='#0074d0' />
        </linearGradient>
        <clipPath id='hn-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#hn-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#hn-a)' d='M0 0h21v15H0z' />
          <path fill='url(#hn-b)' d='M0 0h21v5H0z' />
          <path fill='url(#hn-b)' d='M0 10h21v5H0z' />
          <path fill='url(#hn-a)' d='M0 5h21v5H0z' />
          <path
            fill='url(#hn-c)'
            d='m10.5 8-.707.207L10 7.5l-.207-.707L10.5 7l.707-.207L11 7.5l.207.707z'
          />
          <path
            fill='url(#hn-c)'
            d='m14.5 7-.707.207L14 6.5l-.207-.707L14.5 6l.707-.207L15 6.5l.207.707z'
          />
          <path
            fill='url(#hn-c)'
            d='m14.5 9-.707.207L14 8.5l-.207-.707L14.5 8l.707-.207L15 8.5l.207.707z'
          />
          <path
            fill='url(#hn-c)'
            d='m6.5 9-.707.207L6 8.5l-.207-.707L6.5 8l.707-.207L7 8.5l.207.707z'
          />
          <path
            fill='url(#hn-c)'
            d='m6.5 7-.707.207L6 6.5l-.207-.707L6.5 6l.707-.207L7 6.5l.207.707z'
          />
        </g>
      </g>
    </svg>
  )
}

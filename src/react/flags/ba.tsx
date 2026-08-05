import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagBA: FlagIcon = ({
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
      <title>BA</title>

      <defs>
        <linearGradient id='ba-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='ba-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#0b36b2' />
          <stop offset='100%' stopColor='#042993' />
        </linearGradient>
        <linearGradient id='ba-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffd045' />
          <stop offset='100%' stopColor='#feca2f' />
        </linearGradient>
        <clipPath id='ba-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ba-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#ba-a)' d='M0 0h21v15H0z' />
          <path fill='url(#ba-b)' d='M0 0h21v15H0z' />
          <path fill='url(#ba-c)' d='M17 15V0H6.5z' />
          <path
            fill='url(#ba-a)'
            d='m13 14-.707.207.207-.707-.207-.707L13 13l.707-.207-.207.707.207.707z'
          />
          <path
            fill='url(#ba-a)'
            d='m11 11-.707.207.207-.707-.207-.707L11 10l.707-.207-.207.707.207.707z'
          />
          <path
            fill='url(#ba-a)'
            d='m9 8-.707.207L8.5 7.5l-.207-.707L9 7l.707-.207L9.5 7.5l.207.707z'
          />
          <path
            fill='url(#ba-a)'
            d='m7 5-.707.207L6.5 4.5l-.207-.707L7 4l.707-.207L7.5 4.5l.207.707z'
          />
          <path
            fill='url(#ba-a)'
            d='m5 2-.707.207L4.5 1.5 4.293.793 5 1l.707-.207L5.5 1.5l.207.707z'
          />
        </g>
      </g>
    </svg>
  )
}

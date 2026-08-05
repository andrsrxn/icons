import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagWS: FlagIcon = ({
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
      <title>WS</title>

      <defs>
        <linearGradient id='ws-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='ws-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e31f37' />
          <stop offset='100%' stopColor='#cc162c' />
        </linearGradient>
        <linearGradient id='ws-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#083b9a' />
          <stop offset='100%' stopColor='#042e7d' />
        </linearGradient>
        <clipPath id='ws-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ws-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#ws-a)' d='M0 0h21v15H0z' />
          <path fill='url(#ws-b)' d='M0 0h21v15H0z' />
          <path fill='url(#ws-c)' d='M0 8h11V0H0z' />
          <path
            fill='url(#ws-a)'
            d='m5 7-.707.207L4.5 6.5l-.207-.707L5 6l.707-.207L5.5 6.5l.207.707zm0-5-.707.207L4.5 1.5 4.293.793 5 1l.707-.207L5.5 1.5l.207.707zM3 4.5l-.707.207L2.5 4l-.207-.707L3 3.5l.707-.207L3.5 4l.207.707zM7.5 4l-.707.207L7 3.5l-.207-.707L7.5 3l.707-.207L8 3.5l.207.707zM6.25 5.5a.25.25 0 1 1 0-.5.25.25 0 0 1 0 .5'
          />
        </g>
      </g>
    </svg>
  )
}

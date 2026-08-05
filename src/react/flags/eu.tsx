import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagEU: FlagIcon = ({
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
      <title>EU</title>

      <defs>
        <linearGradient id='eu-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='eu-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#043cae' />
          <stop offset='100%' stopColor='#00339a' />
        </linearGradient>
        <linearGradient id='eu-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffd429' />
          <stop offset='100%' stopColor='#fc0' />
        </linearGradient>
        <clipPath id='eu-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#eu-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#eu-a)' d='M0 0h21v15H0z' />
          <path fill='url(#eu-b)' d='M0 0h21v15H0z' />
          <path
            fill='url(#eu-c)'
            d='m10.5 3-.707.207L10 2.5l-.207-.707L10.5 2l.707-.207L11 2.5l.207.707zm0 10-.707.207L10 12.5l-.207-.707.707.207.707-.207L11 12.5l.207.707zm5-5-.707.207L15 7.5l-.207-.707L15.5 7l.707-.207L16 7.5l.207.707zm-10 0-.707.207L5 7.5l-.207-.707L5.5 7l.707-.207L6 7.5l.207.707zm9.33-2.5-.707.207L14.33 5l-.207-.707.707.207.707-.207L15.33 5l.207.707zm-8.66 5-.707.207L5.67 10l-.207-.707.707.207.707-.207L6.67 10l.207.707zM13 3.67l-.707.207.207-.707-.207-.707.707.207.707-.207-.207.707.207.707zm-5 8.66-.707.207.207-.707-.207-.707.707.207.707-.207-.207.707.207.707zm6.83-1.83-.707.207.207-.707-.207-.707.707.207.707-.207-.207.707.207.707zm-8.66-5-.707.207L5.67 5l-.207-.707.707.207.707-.207L6.67 5l.207.707zM13 12.33l-.707.207.207-.707-.207-.707.707.207.707-.207-.207.707.207.707zM8 3.67l-.707.207.207-.707-.207-.707L8 2.67l.707-.207-.207.707.207.707z'
          />
        </g>
      </g>
    </svg>
  )
}

import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagTD: FlagIcon = ({
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
      <title>TD</title>

      <defs>
        <linearGradient id='td-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='td-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#de1d42' />
          <stop offset='100%' stopColor='#c51335' />
        </linearGradient>
        <linearGradient id='td-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#083780' />
          <stop offset='100%' stopColor='#032862' />
        </linearGradient>
        <linearGradient id='td-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffd147' />
          <stop offset='100%' stopColor='#feca2f' />
        </linearGradient>
        <clipPath id='td-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#td-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#td-a)' d='M0 0h21v15H0z' />
          <path fill='url(#td-b)' d='M10 0h11v15H10z' />
          <path fill='url(#td-c)' d='M0 0h7v15H0z' />
          <path fill='url(#td-d)' d='M7 0h7v15H7z' />
        </g>
      </g>
    </svg>
  )
}

import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagPL: FlagIcon = ({
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
      <title>PL</title>

      <defs>
        <linearGradient id='pl-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='pl-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#eb2a50' />
          <stop offset='100%' stopColor='#da1b40' />
        </linearGradient>
        <clipPath id='pl-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#pl-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#pl-a)' d='M0 0h21v15H0z' />
          <path fill='url(#pl-b)' d='M0 7h21v8H0z' />
          <path fill='url(#pl-a)' d='M0 0h21v7H0z' />
        </g>
      </g>
    </svg>
  )
}

import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagJO: FlagIcon = ({
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
      <title>JO</title>

      <defs>
        <linearGradient id='jo-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='jo-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#199e56' />
          <stop offset='100%' stopColor='#0f7a40' />
        </linearGradient>
        <linearGradient id='jo-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <linearGradient id='jo-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e6223a' />
          <stop offset='100%' stopColor='#cc162c' />
        </linearGradient>
        <clipPath id='jo-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#jo-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#jo-a)' d='M0 0h21v15H0z' />
          <path fill='url(#jo-b)' d='M0 10h21v5H0z' />
          <path fill='url(#jo-c)' d='M0 0h21v5H0z' />
          <path fill='url(#jo-a)' d='M0 5h21v5H0z' />
          <path fill='url(#jo-d)' d='m0 0 10 7.5L0 15z' />
          <path
            fill='url(#jo-a)'
            d='m3.5 8.25-.65.601.064-.883-.876-.134.73-.5-.44-.77.847.26L3.5 6l.325.824.848-.26-.442.77.731.5-.876.134.065.883z'
          />
        </g>
      </g>
    </svg>
  )
}

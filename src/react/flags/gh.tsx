import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagGH: FlagIcon = ({
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
      <title>GH</title>

      <defs>
        <linearGradient id='gh-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='gh-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e71f37' />
          <stop offset='100%' stopColor='#cc162c' />
        </linearGradient>
        <linearGradient id='gh-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#118b56' />
          <stop offset='100%' stopColor='#0b6b41' />
        </linearGradient>
        <linearGradient id='gh-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fdd64c' />
          <stop offset='100%' stopColor='#fcd036' />
        </linearGradient>
        <linearGradient id='gh-e' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <clipPath id='gh-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#gh-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#gh-a)' d='M0 0h21v15H0z' />
          <path fill='url(#gh-b)' d='M0 0h21v5H0z' />
          <path fill='url(#gh-c)' d='M0 10h21v5H0z' />
          <path fill='url(#gh-d)' d='M0 5h21v5H0z' />
          <path
            fill='url(#gh-e)'
            d='M10.5 8.709 9.03 9.773l.558-1.727-1.466-1.069 1.814-.003.564-1.724.564 1.724 1.814.003-1.466 1.07.557 1.726z'
          />
        </g>
      </g>
    </svg>
  )
}

import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagER: FlagIcon = ({
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
      <title>ER</title>

      <defs>
        <linearGradient id='er-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='er-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#29c53f' />
          <stop offset='100%' stopColor='#21ac35' />
        </linearGradient>
        <linearGradient id='er-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#579ded' />
          <stop offset='100%' stopColor='#458bdb' />
        </linearGradient>
        <linearGradient id='er-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f42d56' />
          <stop offset='100%' stopColor='#e9103d' />
        </linearGradient>
        <clipPath id='er-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#er-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#er-a)' d='M0 0h21v15H0z' />
          <path fill='url(#er-b)' d='M0 0h21v7.5H0z' />
          <path fill='url(#er-c)' d='M0 7.5h21v8H0z' />
          <path fill='url(#er-d)' d='m0 15 21-7.5L0 0z' />
          <path
            fill='#ffc63c'
            fillRule='nonzero'
            d='M6.5 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0 1a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7'
          />
          <circle cx='6' cy='6.5' r='1' fill='#ffc63c' />
          <circle cx='7' cy='7' r='1' fill='#ffc63c' />
          <circle cx='6.5' cy='6' r='1' fill='#ffc63c' />
          <circle cx='6' cy='7.5' r='1' fill='#ffc63c' />
          <circle cx='7' cy='8' r='1' fill='#ffc63c' />
          <circle cx='6' cy='8.5' r='1' fill='#ffc63c' />
          <circle cx='7' cy='9' r='1' fill='#ffc63c' />
        </g>
      </g>
    </svg>
  )
}

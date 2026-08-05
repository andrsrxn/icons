import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagSX: FlagIcon = ({
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
      <title>SX</title>

      <defs>
        <linearGradient id='sx-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='sx-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#0740aa' />
          <stop offset='100%' stopColor='#012f85' />
        </linearGradient>
        <linearGradient id='sx-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f02c33' />
          <stop offset='100%' stopColor='#d82027' />
        </linearGradient>
        <linearGradient id='sx-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e72c33' />
          <stop offset='100%' stopColor='#d82027' />
        </linearGradient>
        <linearGradient id='sx-e' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#78c1f0' />
          <stop offset='100%' stopColor='#67b1e0' />
        </linearGradient>
        <linearGradient id='sx-f' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f7e14b' />
          <stop offset='100%' stopColor='#f7df3e' />
        </linearGradient>
        <clipPath id='sx-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#sx-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#sx-a)' d='M0 0h21v15H0z' />
          <path fill='url(#sx-b)' d='M0 7h21v8H0z' />
          <path fill='url(#sx-c)' d='M0 0h21v7H0z' />
          <path fill='url(#sx-a)' d='m0 0 10 7.5L0 15z' />
          <path
            fill='url(#sx-d)'
            fillRule='nonzero'
            d='M1.5 7V5.506A.997.997 0 0 1 2.495 4.5h2.01c.55 0 .995.457.995 1.006V7c0 .845-.384 1.447-1.003 1.798a2.3 2.3 0 0 1-1.03.3 2.3 2.3 0 0 1-.964-.3C1.884 8.447 1.5 7.845 1.5 7'
          />
          <path
            fill='url(#sx-e)'
            d='M2 7V5.506c0-.28.216-.506.495-.506h2.01c.273 0 .495.232.495.506V7c0 1.5-1.5 1.6-1.5 1.6S2 8.5 2 7'
          />
          <path fill='#fff' d='m3 6.5.5-.5.5.5v1H3z' />
          <path
            fill='#f9d835'
            fillRule='nonzero'
            d='M1.001 9.368A3.39 3.39 0 0 0 3.5 10.5c.948 0 1.915-.448 2.521-1.162a.5.5 0 0 0-.762-.647A2.4 2.4 0 0 1 3.5 9.5a2.4 2.4 0 0 1-1.743-.787.5.5 0 1 0-.756.655'
          />
          <circle cx='3.5' cy='4.5' r='1' fill='url(#sx-f)' />
        </g>
      </g>
    </svg>
  )
}

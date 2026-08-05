import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagSZ: FlagIcon = ({
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
      <title>SZ</title>

      <defs>
        <linearGradient id='sz-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='sz-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#486bca' />
          <stop offset='100%' stopColor='#3e5fba' />
        </linearGradient>
        <linearGradient id='sz-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffdf20' />
          <stop offset='100%' stopColor='#ffda00' />
        </linearGradient>
        <linearGradient id='sz-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#cf1615' />
          <stop offset='100%' stopColor='#b20d0c' />
        </linearGradient>
        <linearGradient id='sz-f' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <ellipse id='sz-e' cx='4.5' cy='2.5' rx='4.5' ry='2.5' />
        <clipPath id='sz-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#sz-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#sz-a)' d='M0 0h21v15H0z' />
          <path fill='url(#sz-b)' d='M0 0h21v3H0z' />
          <path fill='url(#sz-b)' d='M0 12h21v3H0z' />
          <path fill='url(#sz-c)' d='M0 3h21v9H0z' />
          <path fill='url(#sz-d)' d='M0 4h21v7H0z' />
          <g transform='translate(6 5)'>
            <mask id='sz-g' fill='#fff'>
              <use xlinkHref='#sz-e' />
            </mask>
            <use xlinkHref='#sz-e' fill='url(#sz-a)' />
            <path
              fill='url(#sz-f)'
              d='M0 0h5v5H1z'
              mask='url(#sz-g)'
              transform='matrix(-1 0 0 1 5 0)'
            />
            <circle cx='5.5' cy='2.5' r='1' fill='#1a1a1a' mask='url(#sz-g)' />
            <circle cx='3.5' cy='2.5' r='1' fill='#f6f6f6' mask='url(#sz-g)' />
          </g>
        </g>
      </g>
    </svg>
  )
}

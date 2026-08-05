import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagUG: FlagIcon = ({
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
      <title>UG</title>

      <defs>
        <linearGradient id='ug-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='ug-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <linearGradient id='ug-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ed1623' />
          <stop offset='100%' stopColor='#d70915' />
        </linearGradient>
        <linearGradient id='ug-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fee044' />
          <stop offset='100%' stopColor='#fcdb32' />
        </linearGradient>
        <clipPath id='ug-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ug-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#ug-a)' d='M0 0h21v15H0z' />
          <path fill='url(#ug-b)' d='M0 0h21v2H0z' />
          <path fill='url(#ug-b)' d='M0 8h21v2H0z' />
          <path fill='url(#ug-c)' d='M0 5h21v3H0z' />
          <path fill='url(#ug-d)' d='M0 2h21v3H0z' />
          <path fill='url(#ug-c)' d='M0 13h21v2H0z' />
          <path fill='url(#ug-d)' d='M0 10h21v3H0z' />
          <circle cx='10.5' cy='7.5' r='3.5' fill='url(#ug-a)' />
          <path
            fill='url(#ug-b)'
            d='M9.68 5.68a.253.253 0 0 1 0-.36l.14-.14c.1-.1.252-.27.338-.362l.122-.099c.122.017.317-.036.442-.012l.119.092c.088.111.113.293.043.433l-.268.536a1.3 1.3 0 0 0-.116.482c0 .138.092.296.232.366l.536.268c.128.064.31.194.406.29l.652.652a.36.36 0 0 1 .058.406l-.268.536c-.064.128-.194.154-.297.051l-.138-.138a.253.253 0 0 0-.362 0l-.138.138A.7.7 0 0 0 11 9.25c0 .138.078.328.18.43l.14.14c.1.1.062.18-.068.18h-1.004c-.137 0-.17-.078-.067-.18l.138-.14c.1-.1.181-.296.181-.43a.253.253 0 0 0-.25-.25.7.7 0 0 0-.43.18l-.14.14c-.1.1-.258.102-.36 0l-.14-.14a.253.253 0 0 1 0-.36l.14-.14c.1-.1.287-.18.432-.18h.496c.139 0 .171-.08.08-.172L9.172 7.172a.245.245 0 0 1 .002-.346l.652-.652a.25.25 0 0 0-.007-.355z'
          />
        </g>
      </g>
    </svg>
  )
}

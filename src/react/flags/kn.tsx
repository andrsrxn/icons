import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagKN: FlagIcon = ({
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
      <title>KN</title>

      <defs>
        <linearGradient id='kn-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='kn-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#1ec160' />
          <stop offset='100%' stopColor='#169e4d' />
        </linearGradient>
        <linearGradient id='kn-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#df2a40' />
          <stop offset='100%' stopColor='#cc162c' />
        </linearGradient>
        <linearGradient id='kn-d' x1='50%' x2='50%' y1='16.742%' y2='82.422%'>
          <stop offset='0%' stopColor='#ffd956' />
          <stop offset='100%' stopColor='#fcd036' />
        </linearGradient>
        <linearGradient id='kn-e' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <clipPath id='kn-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#kn-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#kn-a)' d='M0 0h21v15H0z' />
          <path fill='url(#kn-b)' d='m.001 10 21-10h-21z' />
          <path fill='url(#kn-c)' d='M.001 15h21V5z' />
          <path fill='url(#kn-d)' d='M.59 19 25.182 3.632 20.413-4-4.18 11.368z' />
          <path fill='url(#kn-e)' d='M-.47 17.304 24.122 1.936l-2.65-4.24L-3.12 13.064z' />
          <path
            fill='url(#kn-a)'
            d='m15.233 5.848-.709 1.123-.46-1.246-1.287-.327 1.043-.823-.087-1.325 1.105.738 1.234-.492-.36 1.278.848 1.022z'
          />
          <path
            fill='url(#kn-a)'
            d='m7.233 10.698-.709 1.123-.46-1.246-1.287-.327 1.043-.823L5.733 8.1l1.105.738 1.234-.492-.36 1.278.848 1.022z'
          />
        </g>
      </g>
    </svg>
  )
}

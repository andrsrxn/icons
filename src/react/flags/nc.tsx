import type { FlagIcon } from './types'

export const IconFlagNC: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  title,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
  ...props
}) => {
  const isHidden = ariaHidden === true
  const titleText = title ?? 'NC'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-icon-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='nc-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='nc-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#094cc7' />
          <stop offset='100%' stopColor='#003cab' />
        </linearGradient>
        <linearGradient id='nc-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#2aad55' />
          <stop offset='100%' stopColor='#219447' />
        </linearGradient>
        <linearGradient id='nc-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f65d55' />
          <stop offset='100%' stopColor='#e9443c' />
        </linearGradient>
        <linearGradient id='nc-e' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fae749' />
          <stop offset='100%' stopColor='#fbe533' />
        </linearGradient>
        <linearGradient id='nc-f' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <clipPath id='nc-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#nc-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#nc-a)' d='M0 0h21v15H0z' />
          <path fill='url(#nc-b)' d='M0 0h21v5H0z' />
          <path fill='url(#nc-c)' d='M0 10h21v5H0z' />
          <path fill='url(#nc-d)' d='M0 5h21v5H0z' />
          <circle cx='10.5' cy='7.5' r='3.5' fill='url(#nc-e)' />
          <path
            fill='url(#nc-f)'
            d='M10.092 6.211a.5.5 0 1 0 .514-.2q.072-.036.144-.078c.598-.345.97-.819.833-1.058-.139-.24-.735-.153-1.333.192s-.97.819-.833 1.058c.086.148.347.171.675.086M10.5 10.5c-.828 0-1-.724-1-1s.172-.5 1-.5 1 .224 1 .5-.172 1-1 1m0-1.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0-1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
          />
        </g>
      </g>
    </svg>
  )
}

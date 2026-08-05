import type { FlagIcon } from './types'

export const IconFlagLGBT: FlagIcon = ({
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
  const titleText = title ?? 'LGBT'

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
        <linearGradient id='lgbt-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='lgbt-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f71e24' />
          <stop offset='100%' stopColor='#fb141b' />
        </linearGradient>
        <linearGradient id='lgbt-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fb6c2c' />
          <stop offset='100%' stopColor='#fc6420' />
        </linearGradient>
        <linearGradient id='lgbt-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fdfc42' />
          <stop offset='100%' stopColor='#fffd38' />
        </linearGradient>
        <linearGradient id='lgbt-e' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#238f35' />
          <stop offset='100%' stopColor='#1c7e2c' />
        </linearGradient>
        <linearGradient id='lgbt-f' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#0f62fa' />
          <stop offset='100%' stopColor='#0059fc' />
        </linearGradient>
        <clipPath id='lgbt-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#lgbt-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#lgbt-a)' d='M0 0h21v15H0z' />
          <path fill='url(#lgbt-b)' d='M0 0h21v3H0z' />
          <path fill='url(#lgbt-c)' d='M0 3h21v3H0z' />
          <path fill='url(#lgbt-d)' d='M0 6h21v3H0z' />
          <path fill='url(#lgbt-e)' d='M0 9h21v3H0z' />
          <path fill='url(#lgbt-f)' d='M0 12h21v3H0z' />
        </g>
      </g>
    </svg>
  )
}

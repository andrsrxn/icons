import type { FlagIcon } from './types'

export const IconFlagKM: FlagIcon = ({
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
  const titleText = title ?? 'KM'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-km'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='km-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='km-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffcb49' />
          <stop offset='100%' stopColor='#ffc638' />
        </linearGradient>
        <linearGradient id='km-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#dc1d34' />
          <stop offset='100%' stopColor='#cc162c' />
        </linearGradient>
        <linearGradient id='km-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#4985d4' />
          <stop offset='100%' stopColor='#3d77c2' />
        </linearGradient>
        <linearGradient id='km-e' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#4ba343' />
          <stop offset='100%' stopColor='#408d39' />
        </linearGradient>
        <clipPath id='km-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#km-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#km-a)' d='M0 0h21v15H0z' />
          <path fill='url(#km-b)' d='M0 0h21v4H0z' />
          <path fill='url(#km-c)' d='M0 7h21v4H0z' />
          <path fill='url(#km-d)' d='M0 11h21v4H0z' />
          <path fill='url(#km-a)' d='M0 4h21v3H0z' />
          <path fill='url(#km-e)' d='m0 15 10-7.5L0 0z' />
          <path
            fill='url(#km-a)'
            d='M4.75 4.595a3 3 0 1 0 0 5.811 3.001 3.001 0 0 1 0-5.811M5.5 6a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
          />
        </g>
      </g>
    </svg>
  )
}

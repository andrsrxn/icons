import type { FlagIcon } from './types'

export const IconFlagPY: FlagIcon = ({
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
  const titleText = title ?? 'PY'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-py'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='py-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='py-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e33f39' />
          <stop offset='100%' stopColor='#d32e28' />
        </linearGradient>
        <linearGradient id='py-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#124bba' />
          <stop offset='100%' stopColor='#073da6' />
        </linearGradient>
        <clipPath id='py-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#py-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#py-a)' d='M0 0h21v15H0z' />
          <path fill='url(#py-b)' d='M0 0h21v5H0z' />
          <path fill='url(#py-c)' d='M0 10h21v5H0z' />
          <path fill='url(#py-a)' d='M0 5h21v5H0z' />
          <path
            fill='#398153'
            fillRule='nonzero'
            d='M10.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 .5a2 2 0 1 1 0-4 2 2 0 0 1 0 4'
          />
          <circle cx='10.5' cy='7.5' r='1' fill='#e5cf58' />
        </g>
      </g>
    </svg>
  )
}

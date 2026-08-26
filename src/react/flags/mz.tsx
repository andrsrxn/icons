import type { FlagIcon } from './types'

export const IconFlagMZ: FlagIcon = ({
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
  const titleText = title ?? 'MZ'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-mz'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='mz-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='mz-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffe547' />
          <stop offset='100%' stopColor='#fce032' />
        </linearGradient>
        <linearGradient id='mz-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#118c81' />
          <stop offset='100%' stopColor='#0d7168' />
        </linearGradient>
        <linearGradient id='mz-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <linearGradient id='mz-e' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ef2147' />
          <stop offset='100%' stopColor='#d01739' />
        </linearGradient>
        <linearGradient id='mz-f' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fde444' />
          <stop offset='100%' stopColor='#fce032' />
        </linearGradient>
        <clipPath id='mz-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#mz-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#mz-a)' d='M0 0h21v15H0z' />
          <path fill='url(#mz-b)' d='M0 11h21v4H0z' />
          <path fill='url(#mz-c)' d='M0 0h21v4H0z' />
          <path fill='url(#mz-a)' d='M0 4h21v7H0z' />
          <path fill='url(#mz-d)' d='M0 5h21v5H0z' />
          <path fill='url(#mz-e)' d='m0 0 10 7.5L0 15z' />
          <path
            fill='url(#mz-f)'
            d='M3.5 8.456 2.03 9.523l.561-1.728-1.469-1.068h1.816L3.5 5l.562 1.727h1.816l-1.47 1.068.561 1.728z'
          />
        </g>
      </g>
    </svg>
  )
}

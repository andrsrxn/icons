import type { FlagIcon } from './types'

export const IconFlagPR: FlagIcon = ({
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
  const titleText = title ?? 'PR'

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
        <linearGradient id='pr-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='pr-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fa2222' />
          <stop offset='100%' stopColor='#ed0000' />
        </linearGradient>
        <linearGradient id='pr-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#1d63f9' />
          <stop offset='100%' stopColor='#0650f0' />
        </linearGradient>
        <clipPath id='pr-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#pr-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#pr-a)' d='M0 0h21v15H0z' />
          <path fill='url(#pr-b)' d='M0 0h21v15H0z' />
          <path fill='url(#pr-a)' d='M0 3h21v3H0z' />
          <path fill='url(#pr-a)' d='M0 9h21v3H0z' />
          <path fill='url(#pr-c)' d='m0 0 10 7.5L0 15z' />
          <path
            fill='url(#pr-a)'
            d='M3.5 8.456 2.03 9.523l.561-1.728-1.469-1.068h1.816L3.5 5l.562 1.727h1.816l-1.47 1.068.561 1.728z'
          />
        </g>
      </g>
    </svg>
  )
}

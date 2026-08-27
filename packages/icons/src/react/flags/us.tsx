import type { FlagIcon } from './types'

export const IconFlagUS: FlagIcon = ({
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
  const titleText = title ?? 'US'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-us'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='us-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='us-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#d02f44' />
          <stop offset='100%' stopColor='#b12537' />
        </linearGradient>
        <linearGradient id='us-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#46467f' />
          <stop offset='100%' stopColor='#3c3c6d' />
        </linearGradient>
        <clipPath id='us-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#us-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#us-a)' d='M0 0h21v15H0z' />
          <path
            fill='url(#us-b)'
            d='M0 0h21v1H0zm0 2h21v1H0zm0 2h21v1H0zm0 2h21v1H0zm0 2h21v1H0zm0 2h21v1H0zm0 2h21v1H0zm0 2h21v1H0z'
          />
          <path fill='url(#us-c)' d='M0 0h9v7H0z' />
          <path
            fill='url(#us-a)'
            d='M1.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-5 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m1 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m1 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m1 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
          />
        </g>
      </g>
    </svg>
  )
}

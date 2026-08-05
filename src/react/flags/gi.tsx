import type { FlagIcon } from './types'

export const IconFlagGI: FlagIcon = ({
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
  const titleText = title ?? 'GI'

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
        <linearGradient id='gi-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='gi-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e71924' />
          <stop offset='100%' stopColor='#d6101b' />
        </linearGradient>
        <linearGradient id='gi-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ea1824' />
          <stop offset='100%' stopColor='#d6101b' />
        </linearGradient>
        <linearGradient id='gi-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <linearGradient id='gi-e' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ecce3e' />
          <stop offset='100%' stopColor='#d9bc2d' />
        </linearGradient>
        <clipPath id='gi-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#gi-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#gi-a)' d='M0 0h21v15H0z' />
          <path fill='url(#gi-a)' d='M0 0h21v10H0z' />
          <path fill='url(#gi-b)' d='M0 10h21v5H0z' />
          <path
            fill='url(#gi-c)'
            d='M9 6H8V4.49A.495.495 0 0 0 7.495 4h-.99A.49.49 0 0 0 6 4.49V8L5 9h11l-1-1V4.49a.495.495 0 0 0-.505-.49h-.99a.49.49 0 0 0-.505.49V6h-1V3.49a.49.49 0 0 0-.495-.49h-2.01A.49.49 0 0 0 9 3.49z'
          />
          <path
            fill='url(#gi-d)'
            d='M7 8a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0-2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m3.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M14 8a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0-2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
          />
          <path
            fill='url(#gi-e)'
            d='M10 9.943V12H9v1h2V9.943c.583-.137 1-.508 1-.943 0-.552-.672-1-1.5-1S9 8.448 9 9c0 .435.417.806 1 .943'
          />
        </g>
      </g>
    </svg>
  )
}

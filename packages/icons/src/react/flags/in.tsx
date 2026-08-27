import type { FlagIcon } from './types'

export const IconFlagIN: FlagIcon = ({
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
  const titleText = title ?? 'IN'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-in'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='in-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='in-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffa44a' />
          <stop offset='100%' stopColor='#ff9934' />
        </linearGradient>
        <linearGradient id='in-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#1a9f0b' />
          <stop offset='100%' stopColor='#138806' />
        </linearGradient>
        <clipPath id='in-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#in-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#in-a)' d='M0 0h21v15H0z' />
          <path fill='url(#in-b)' d='M0 0h21v5H0z' />
          <path fill='url(#in-c)' d='M0 10h21v5H0z' />
          <path fill='url(#in-a)' d='M0 5h21v5H0z' />
          <circle cx='10.5' cy='7.5' r='1.5' fill='#181a93' fillOpacity='.15' />
          <path
            fill='#181a93'
            fillRule='nonzero'
            d='M10.5 9.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0-.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3'
          />
          <circle cx='10.5' cy='7.5' r='1' fill='#181a93' />
        </g>
      </g>
    </svg>
  )
}

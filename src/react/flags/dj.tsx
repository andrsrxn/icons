import type { FlagIcon } from './types'

export const IconFlagDJ: FlagIcon = ({
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
  const titleText = title ?? 'DJ'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-dj'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='dj-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='dj-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#1dc837' />
          <stop offset='100%' stopColor='#13ad2b' />
        </linearGradient>
        <linearGradient id='dj-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#82c5f5' />
          <stop offset='100%' stopColor='#6ab3e8' />
        </linearGradient>
        <linearGradient id='dj-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e21c21' />
          <stop offset='100%' stopColor='#d7151a' />
        </linearGradient>
        <clipPath id='dj-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#dj-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#dj-a)' d='M0 0h21v15H0z' />
          <path fill='url(#dj-b)' d='M0 7h21v8H0z' />
          <path fill='url(#dj-c)' d='M0 0h21v7H0z' />
          <path fill='url(#dj-a)' d='m0 0 10 7.5L0 15z' />
          <path
            fill='url(#dj-d)'
            d='M3.5 8.475 2.03 9.523 2.574 7.8l-1.45-1.074 1.804-.016L3.5 5l.573 1.711 1.805.016-1.45 1.074.541 1.722z'
          />
        </g>
      </g>
    </svg>
  )
}

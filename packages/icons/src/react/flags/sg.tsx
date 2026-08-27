import type { FlagIcon } from './types'

export const IconFlagSG: FlagIcon = ({
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
  const titleText = title ?? 'SG'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-sg'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='sg-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='sg-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e12237' />
          <stop offset='100%' stopColor='#ce1126' />
        </linearGradient>
        <clipPath id='sg-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#sg-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#sg-a)' d='M0 0h21v15H0z' />
          <path fill='url(#sg-b)' d='M0 0h21v8H0z' />
          <path fill='url(#sg-a)' d='M0 8h21v7H0z' />
          <path
            fill='url(#sg-a)'
            d='M6.874 1.657a2.5 2.5 0 1 0 0 4.686 3 3 0 1 1 0-4.686M5.5 4a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m1 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m1-2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-2-1.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
          />
        </g>
      </g>
    </svg>
  )
}

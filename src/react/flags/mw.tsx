import type { FlagIcon } from './types'

export const IconFlagMW: FlagIcon = ({
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
  const titleText = title ?? 'MW'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-mw'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='mw-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='mw-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <linearGradient id='mw-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e42038' />
          <stop offset='100%' stopColor='#cc162c' />
        </linearGradient>
        <linearGradient id='mw-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#47b849' />
          <stop offset='100%' stopColor='#399e3b' />
        </linearGradient>
        <clipPath id='mw-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#mw-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#mw-a)' d='M0 0h21v15H0z' />
          <path fill='url(#mw-b)' d='M0 0h21v5H0z' />
          <circle cx='10.5' cy='5.5' r='3.5' fill='url(#mw-c)' />
          <path fill='url(#mw-c)' d='M0 5h21v5H0z' />
          <path fill='url(#mw-d)' d='M0 10h21v5H0z' />
        </g>
      </g>
    </svg>
  )
}

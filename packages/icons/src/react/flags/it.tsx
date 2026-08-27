import type { FlagIcon } from './types'

export const IconFlagIT: FlagIcon = ({
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
  const titleText = title ?? 'IT'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-it'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='it-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='it-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e43d4c' />
          <stop offset='100%' stopColor='#cc2e3c' />
        </linearGradient>
        <linearGradient id='it-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#1bb65d' />
          <stop offset='100%' stopColor='#139149' />
        </linearGradient>
        <clipPath id='it-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#it-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#it-a)' d='M0 0h21v15H0z' />
          <path fill='url(#it-b)' d='M10 0h11v15H10z' />
          <path fill='url(#it-c)' d='M0 0h7v15H0z' />
          <path fill='url(#it-a)' d='M7 0h7v15H7z' />
        </g>
      </g>
    </svg>
  )
}

import type { FlagIcon } from './types'

export const IconFlagMU: FlagIcon = ({
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
  const titleText = title ?? 'MU'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-mu'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='mu-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='mu-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#1dbb63' />
          <stop offset='100%' stopColor='#17a455' />
        </linearGradient>
        <linearGradient id='mu-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#222b82' />
          <stop offset='100%' stopColor='#1b236c' />
        </linearGradient>
        <linearGradient id='mu-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffd741' />
          <stop offset='100%' stopColor='#ffd430' />
        </linearGradient>
        <linearGradient id='mu-e' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f4374a' />
          <stop offset='100%' stopColor='#e92c3f' />
        </linearGradient>
        <clipPath id='mu-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#mu-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#mu-a)' d='M0 0h21v15H0z' />
          <path fill='url(#mu-b)' d='M0 12h21v3H0z' />
          <path fill='url(#mu-c)' d='M0 4h21v4H0z' />
          <path fill='url(#mu-d)' d='M0 8h21v4H0z' />
          <path fill='url(#mu-e)' d='M0 0h21v4H0z' />
        </g>
      </g>
    </svg>
  )
}

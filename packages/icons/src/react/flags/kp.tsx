import type { FlagIcon } from './types'

export const IconFlagKP: FlagIcon = ({
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
  const titleText = title ?? 'KP'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-kp'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='kp-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='kp-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#1461b6' />
          <stop offset='100%' stopColor='#0b52a1' />
        </linearGradient>
        <linearGradient id='kp-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f53846' />
          <stop offset='100%' stopColor='#eb2130' />
        </linearGradient>
        <clipPath id='kp-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#kp-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#kp-a)' d='M0 0h21v15H0z' />
          <path fill='url(#kp-b)' d='M0 0h21v3H0z' />
          <path fill='url(#kp-b)' d='M0 12h21v3H0z' />
          <path fill='url(#kp-a)' d='M0 3h21v9H0z' />
          <path fill='url(#kp-c)' d='M0 4h21v7H0z' />
          <path
            fill='url(#kp-a)'
            d='M7.5 10a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0-1.497 1.47 1.02-.516-1.713 1.424-1.083-1.788-.039L7.5 5l-.59 1.688-1.788.04L6.546 7.81 6.03 9.523z'
          />
        </g>
      </g>
    </svg>
  )
}

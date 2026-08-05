import type { FlagIcon } from './types'

export const IconFlagSS: FlagIcon = ({
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
  const titleText = title ?? 'SS'

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
        <linearGradient id='ss-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='ss-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <linearGradient id='ss-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e22a32' />
          <stop offset='100%' stopColor='#d61c24' />
        </linearGradient>
        <linearGradient id='ss-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#2ca244' />
          <stop offset='100%' stopColor='#218736' />
        </linearGradient>
        <linearGradient id='ss-e' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#185ac6' />
          <stop offset='100%' stopColor='#104cad' />
        </linearGradient>
        <linearGradient id='ss-f' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fde14a' />
          <stop offset='100%' stopColor='#fcdc34' />
        </linearGradient>
        <clipPath id='ss-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ss-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#ss-a)' d='M0 0h21v15H0z' />
          <path fill='url(#ss-b)' d='M0 0h21v4H0z' />
          <path fill='url(#ss-c)' d='M0 5h21v5H0z' />
          <path fill='url(#ss-a)' d='M0 4h21v1H0z' />
          <path fill='url(#ss-d)' d='M0 11h21v4H0z' />
          <path fill='url(#ss-a)' d='M0 10h21v1H0z' />
          <path fill='url(#ss-e)' d='m0 0 10 7.5L0 15z' />
          <path
            fill='url(#ss-f)'
            d='m3.836 7.987-.683 1.28-.205-1.437-1.429-.254 1.304-.639-.2-1.437 1.01 1.042 1.306-.634-.68 1.283 1.007 1.046z'
          />
        </g>
      </g>
    </svg>
  )
}

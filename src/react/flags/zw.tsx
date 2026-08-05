import type { FlagIcon } from './types'

export const IconFlagZW: FlagIcon = ({
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
  const titleText = title ?? 'ZW'

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
        <linearGradient id='zw-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='zw-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#369d0c' />
          <stop offset='100%' stopColor='#319209' />
        </linearGradient>
        <linearGradient id='zw-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <linearGradient id='zw-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffd40e' />
          <stop offset='100%' stopColor='#ffd201' />
        </linearGradient>
        <linearGradient id='zw-e' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f12f1f' />
          <stop offset='100%' stopColor='#de2010' />
        </linearGradient>
        <clipPath id='zw-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#zw-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#zw-a)' d='M0 0h21v15H0z' />
          <path fill='url(#zw-b)' d='M0 0h21v2H0z' />
          <path fill='url(#zw-b)' d='M0 13h21v2H0z' />
          <path fill='url(#zw-b)' d='M0 4h21v2H0z' />
          <path fill='url(#zw-b)' d='M0 9h21v2H0z' />
          <path fill='url(#zw-c)' d='M0 6h21v3H0z' />
          <path fill='url(#zw-d)' d='M0 2h21v2H0z' />
          <path fill='url(#zw-d)' d='M0 11h21v2H0z' />
          <path fill='url(#zw-c)' fillRule='nonzero' d='M-1 15V0h1l10 7.5L0 15z' />
          <path fill='url(#zw-a)' fillRule='nonzero' d='M0 13.75 8.333 7.5 0 1.25z' />
          <path
            fill='url(#zw-e)'
            d='M3 8.475 1.53 9.523 2.074 7.8.623 6.727l1.804-.016L3 5l.573 1.711 1.805.016-1.45 1.074.541 1.722z'
          />
        </g>
      </g>
    </svg>
  )
}

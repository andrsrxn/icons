import type { FlagIcon } from './types'

export const IconFlagEC: FlagIcon = ({
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
  const titleText = title ?? 'EC'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-ec'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='ec-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='ec-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#0748ae' />
          <stop offset='100%' stopColor='#003993' />
        </linearGradient>
        <linearGradient id='ec-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#de2035' />
          <stop offset='100%' stopColor='#ce1126' />
        </linearGradient>
        <linearGradient id='ec-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffd935' />
          <stop offset='100%' stopColor='#fdd216' />
        </linearGradient>
        <linearGradient id='ec-e' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fbdc44' />
          <stop offset='100%' stopColor='#ffdc32' />
        </linearGradient>
        <clipPath id='ec-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ec-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#ec-a)' d='M0 0h21v15H0z' />
          <path fill='url(#ec-b)' d='M0 7h21v4H0z' />
          <path fill='url(#ec-c)' d='M0 11h21v4H0z' />
          <path fill='url(#ec-d)' d='M0 0h21v7H0z' />
          <path fill='url(#ec-e)' d='M9.3 6a2 2 0 1 0 2.4 0L11 8.1h-1z' />
          <path fill='#5fc0dc' d='M10.5 5.5 11 8h-1z' />
          <path
            fill='#3f2821'
            fillRule='nonzero'
            d='M9.677 3.823a.25.25 0 0 0-.256-.06l-1.5.5a.25.25 0 1 0 .158.474l1.353-.451.891.89a.25.25 0 0 0 .354 0l.89-.89 1.354.451a.25.25 0 1 0 .158-.474l-1.5-.5a.25.25 0 0 0-.256.06l-.823.823z'
            opacity='.66'
          />
        </g>
      </g>
    </svg>
  )
}

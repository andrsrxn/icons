import type { FlagIcon } from './types'

export const IconFlagCO: FlagIcon = ({
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
  const titleText = title ?? 'CO'

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
        <linearGradient id='co-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='co-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#0748ae' />
          <stop offset='100%' stopColor='#003993' />
        </linearGradient>
        <linearGradient id='co-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#de2035' />
          <stop offset='100%' stopColor='#ce1126' />
        </linearGradient>
        <linearGradient id='co-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffd935' />
          <stop offset='100%' stopColor='#fdd216' />
        </linearGradient>
        <clipPath id='co-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#co-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#co-a)' d='M0 0h21v15H0z' />
          <path fill='url(#co-b)' d='M0 7h21v4H0z' />
          <path fill='url(#co-c)' d='M0 11h21v4H0z' />
          <path fill='url(#co-d)' d='M0 0h21v7H0z' />
        </g>
      </g>
    </svg>
  )
}

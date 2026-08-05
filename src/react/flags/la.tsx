import type { FlagIcon } from './types'

export const IconFlagLA: FlagIcon = ({
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
  const titleText = title ?? 'LA'

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
        <linearGradient id='la-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='la-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#073a88' />
          <stop offset='100%' stopColor='#032a67' />
        </linearGradient>
        <linearGradient id='la-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e2273e' />
          <stop offset='100%' stopColor='#cc162c' />
        </linearGradient>
        <clipPath id='la-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#la-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#la-a)' d='M0 0h21v15H0z' />
          <path fill='url(#la-b)' d='M0 4h21v7H0z' />
          <path fill='url(#la-c)' d='M0 0h21v4H0z' />
          <path fill='url(#la-c)' d='M0 11h21v4H0z' />
          <circle cx='10.5' cy='7.5' r='2.5' fill='url(#la-a)' />
        </g>
      </g>
    </svg>
  )
}

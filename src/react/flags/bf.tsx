import type { FlagIcon } from './types'

export const IconFlagBF: FlagIcon = ({
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
  const titleText = title ?? 'BF'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-bf'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='bf-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='bf-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#00b051' />
          <stop offset='100%' stopColor='#009f49' />
        </linearGradient>
        <linearGradient id='bf-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fa494b' />
          <stop offset='100%' stopColor='#f02b2d' />
        </linearGradient>
        <clipPath id='bf-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#bf-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#bf-a)' d='M0 0h21v15H0z' />
          <path fill='url(#bf-b)' d='M0 8h21v7H0z' />
          <path fill='url(#bf-c)' d='M0 0h21v8H0z' />
          <path
            fill='#fdd216'
            d='m10.5 9.17-1.763 1.257.65-2.065-1.74-1.29 2.165-.019L10.5 5l.688 2.053 2.165.02-1.74 1.289.65 2.065z'
          />
        </g>
      </g>
    </svg>
  )
}

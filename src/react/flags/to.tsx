import type { FlagIcon } from './types'

export const IconFlagTO: FlagIcon = ({
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
  const titleText = title ?? 'TO'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-to'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='to-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='to-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e20f1b' />
          <stop offset='100%' stopColor='#c00711' />
        </linearGradient>
        <linearGradient id='to-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#df101b' />
          <stop offset='100%' stopColor='#c00711' />
        </linearGradient>
        <clipPath id='to-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#to-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#to-a)' d='M0 0h21v15H0z' />
          <path fill='url(#to-b)' d='M0 0h21v15H0z' />
          <path fill='url(#to-a)' d='M0 0h12v8H0z' />
          <path
            fill='url(#to-c)'
            d='M7 3V1.258C7 1.104 6.89 1 6.755 1h-1.51A.25.25 0 0 0 5 1.258V3H3.258C3.104 3 3 3.11 3 3.245v1.51A.25.25 0 0 0 3.258 5H5v1.742c0 .154.11.258.245.258h1.51A.25.25 0 0 0 7 6.742V5h1.742C8.896 5 9 4.89 9 4.755v-1.51A.25.25 0 0 0 8.742 3z'
          />
        </g>
      </g>
    </svg>
  )
}

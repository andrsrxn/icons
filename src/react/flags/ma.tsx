import type { FlagIcon } from './types'

export const IconFlagMA: FlagIcon = ({
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
  const titleText = title ?? 'MA'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-ma'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='ma-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='ma-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e33b44' />
          <stop offset='100%' stopColor='#c02a32' />
        </linearGradient>
        <clipPath id='ma-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ma-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#ma-a)' d='M0 0h21v15H0z' />
          <path fill='url(#ma-b)' d='M0 0h21v15H0z' />
          <path
            fill='#0a6135'
            fillRule='nonzero'
            d='m10.5 9.255-2.645 1.886.976-3.099L6.22 6.11l3.247-.029L10.5 3l1.032 3.08 3.248.03-2.61 1.932.975 3.099zm0-1.228.794.566-.293-.93.784-.58-.975-.01-.31-.924-.31.925-.975.008.784.58-.293.931z'
          />
        </g>
      </g>
    </svg>
  )
}

import type { FlagIcon } from './types'

export const IconFlagTW: FlagIcon = ({
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
  const titleText = title ?? 'TW'

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
        <linearGradient id='tw-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='tw-b' x1='50%' x2='50%' y1='0%' y2='93.767%'>
          <stop offset='0%' stopColor='#fe3030' />
          <stop offset='100%' stopColor='red' />
        </linearGradient>
        <linearGradient id='tw-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#0909b6' />
          <stop offset='100%' stopColor='#000096' />
        </linearGradient>
        <clipPath id='tw-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#tw-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#tw-a)' d='M0 0h21v15H0z' />
          <path fill='url(#tw-b)' d='M0 0h21v15H0z' />
          <path fill='url(#tw-c)' d='M0 8h11V0H0z' />
          <path
            fill='url(#tw-a)'
            d='m5.5 5.25-.957 1.06.073-1.426-1.426.073L4.25 4l-1.06-.957 1.426.073-.073-1.426.957 1.06.957-1.06-.073 1.426 1.426-.073L6.75 4l1.06.957-1.426-.073.073 1.426z'
          />
        </g>
      </g>
    </svg>
  )
}

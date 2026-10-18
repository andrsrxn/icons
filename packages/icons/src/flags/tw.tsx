import type { FlagIcon } from './types'

export const IconFlagTW: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'TW',
  'aria-hidden': ariaHidden,
  preserveAspectRatio,
  cover,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)
  const isHidden = ariaHidden === true

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='icon-flag-tw'
      role={isHidden || !isLabelled ? undefined : 'img'}
      aria-hidden={isHidden || !isLabelled ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      focusable={isHidden || !isLabelled ? false : undefined}
      preserveAspectRatio={cover ? 'xMidYMid slice' : preserveAspectRatio}
      className={`icon-flag ${className ?? ''}`.trim()}
      {...props}>
      <defs>
        <defs>
          <linearGradient
            id='tw-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='tw-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='14.07'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fe3030' />
            <stop offset='1' stopColor='red' />
          </linearGradient>
          <linearGradient id='tw-d' x1='5.5' x2='5.5' y1='0' y2='8' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0909b6' />
            <stop offset='1' stopColor='#000096' />
          </linearGradient>
          <linearGradient
            id='tw-e'
            x1='5.5'
            x2='5.5'
            y1='1.69'
            y2='6.31'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='tw-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='tw-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#tw-clip)'>
        <g clipPath='url(#tw-a)'>
          <path fill='url(#tw-b)' d='M21 0H0v15h21z' />
          <path fill='url(#tw-c)' d='M21 0H0v15h21z' />
          <path fill='url(#tw-d)' fillRule='evenodd' d='M0 8h11V0H0z' clipRule='evenodd' />
          <path
            fill='url(#tw-e)'
            fillRule='evenodd'
            d='m5.5 5.25-.96 1.06.08-1.43-1.43.08L4.25 4l-1.06-.96 1.43.08-.08-1.43.96 1.06.96-1.06-.08 1.43 1.43-.08L6.75 4l1.06.96-1.43-.08.08 1.43z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}

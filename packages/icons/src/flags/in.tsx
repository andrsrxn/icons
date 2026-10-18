import type { FlagIcon } from './types'

export const IconFlagIN: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'IN',
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
      data-slot='icon-flag-in'
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
            id='in-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='in-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffa44a' />
            <stop offset='1' stopColor='#ff9934' />
          </linearGradient>
          <linearGradient
            id='in-d'
            x1='10.5'
            x2='10.5'
            y1='10'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#1a9f0b' />
            <stop offset='1' stopColor='#138806' />
          </linearGradient>
          <linearGradient
            id='in-e'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='in-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='in-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#in-clip)'>
        <g clipPath='url(#in-a)'>
          <path fill='url(#in-b)' d='M21 0H0v15h21z' />
          <path fill='url(#in-c)' d='M21 0H0v5h21z' />
          <path fill='url(#in-d)' d='M21 10H0v5h21z' />
          <path fill='url(#in-e)' d='M21 5H0v5h21z' />
          <path fill='#181a93' fillOpacity='.15' d='M10.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3' />
          <path
            fill='#181a93'
            d='M10.5 9.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0-.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3'
          />
          <path fill='#181a93' d='M10.5 8.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
        </g>
      </g>
    </svg>
  )
}

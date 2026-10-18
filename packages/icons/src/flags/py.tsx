import type { FlagIcon } from './types'

export const IconFlagPY: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'PY',
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
      data-slot='icon-flag-py'
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
            id='py-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='py-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e33f39' />
            <stop offset='1' stopColor='#d32e28' />
          </linearGradient>
          <linearGradient
            id='py-d'
            x1='10.5'
            x2='10.5'
            y1='10'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#124bba' />
            <stop offset='1' stopColor='#073da6' />
          </linearGradient>
          <linearGradient
            id='py-e'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='py-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='py-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#py-clip)'>
        <g clipPath='url(#py-a)'>
          <path fill='url(#py-b)' d='M21 0H0v15h21z' />
          <path fill='url(#py-c)' d='M21 0H0v5h21z' />
          <path fill='url(#py-d)' d='M21 10H0v5h21z' />
          <path fill='url(#py-e)' d='M21 5H0v5h21z' />
          <path
            fill='#398153'
            d='M10.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 .5a2 2 0 1 1 0-4 2 2 0 0 1 0 4'
          />
          <path fill='#e5cf58' d='M10.5 8.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
        </g>
      </g>
    </svg>
  )
}

import type { FlagIcon } from './types'

export const IconFlagAR: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'AR',
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
      data-slot='icon-flag-ar'
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
            id='ar-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='ar-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#88bbe8' />
            <stop offset='1' stopColor='#76addd' />
          </linearGradient>
          <linearGradient
            id='ar-d'
            x1='10.5'
            x2='10.5'
            y1='10'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#88bbe8' />
            <stop offset='1' stopColor='#76addd' />
          </linearGradient>
          <linearGradient
            id='ar-e'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='ar-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='ar-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ar-clip)'>
        <g clipPath='url(#ar-a)'>
          <path fill='url(#ar-b)' d='M21 0H0v15h21z' />
          <path fill='url(#ar-c)' d='M21 0H0v5h21z' />
          <path fill='url(#ar-d)' d='M21 10H0v5h21z' />
          <path fill='url(#ar-e)' d='M21 5H0v5h21z' />
          <path fill='#db7a2c' d='M10.5 9.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4' />
          <path fill='#f4b32e' d='M10.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3' />
        </g>
      </g>
    </svg>
  )
}

import type { FlagIcon } from './types'

export const IconFlagIL: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'IL',
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
      data-slot='icon-flag-il'
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
            id='il-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='il-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='3'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0e46d4' />
            <stop offset='1' stopColor='#0538b9' />
          </linearGradient>
          <linearGradient
            id='il-d'
            x1='10.5'
            x2='10.5'
            y1='12'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0e46d4' />
            <stop offset='1' stopColor='#0538b9' />
          </linearGradient>
          <linearGradient
            id='il-e'
            x1='10.5'
            x2='10.5'
            y1='3'
            y2='12'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='il-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='il-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#il-clip)'>
        <g clipPath='url(#il-a)'>
          <path fill='url(#il-b)' d='M21 0H0v15h21z' />
          <path fill='url(#il-c)' d='M21 0H0v3h21z' />
          <path fill='url(#il-d)' d='M21 12H0v3h21z' />
          <path fill='url(#il-e)' d='M21 3H0v9h21z' />
          <path stroke='#093ec5' strokeWidth='.5' d='m7.58 9.25 2.92-5.26 2.92 5.26z' />
          <path stroke='#093ec5' strokeWidth='.5' d='m7.58 5.75 2.92 5.26 2.92-5.26z' />
        </g>
      </g>
    </svg>
  )
}

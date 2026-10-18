import type { FlagIcon } from './types'

export const IconFlagLA: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'LA',
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
      data-slot='icon-flag-la'
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
            id='la-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='la-c'
            x1='10.5'
            x2='10.5'
            y1='4'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#073a88' />
            <stop offset='1' stopColor='#032a67' />
          </linearGradient>
          <linearGradient
            id='la-d'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='4'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e2273e' />
            <stop offset='1' stopColor='#cc162c' />
          </linearGradient>
          <linearGradient
            id='la-e'
            x1='10.5'
            x2='10.5'
            y1='11'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e2273e' />
            <stop offset='1' stopColor='#cc162c' />
          </linearGradient>
          <linearGradient
            id='la-f'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='la-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='la-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#la-clip)'>
        <g clipPath='url(#la-a)'>
          <path fill='url(#la-b)' d='M21 0H0v15h21z' />
          <path fill='url(#la-c)' d='M21 4H0v7h21z' />
          <path fill='url(#la-d)' d='M21 0H0v4h21z' />
          <path fill='url(#la-e)' d='M21 11H0v4h21z' />
          <path fill='url(#la-f)' d='M10.5 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5' />
        </g>
      </g>
    </svg>
  )
}

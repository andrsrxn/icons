import type { FlagIcon } from './types'

export const IconFlagMT: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'MT',
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
      data-slot='icon-flag-mt'
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
            id='mt-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='mt-c' x1='16' x2='16' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#de233c' />
            <stop offset='1' stopColor='#cd1931' />
          </linearGradient>
          <linearGradient id='mt-d' x1='5.5' x2='5.5' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='mt-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='mt-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#mt-clip)'>
        <g clipPath='url(#mt-a)'>
          <path fill='url(#mt-b)' d='M21 0H0v15h21z' />
          <path fill='url(#mt-c)' d='M21 0H11v15h10z' />
          <path fill='url(#mt-d)' d='M11 0H0v15h11z' />
          <path fill='#cccccd' d='M4 3V2H3v1H2v1h1v1h1V4h1V3z' />
          <path
            stroke='#7b716a'
            strokeOpacity='.66'
            strokeWidth='.5'
            d='M4.25 2.75h1v1.5h-1v1h-1.5v-1h-1v-1.5h1v-1h1.5z'
          />
          <path fill='#7b716a' d='M3.5 4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
        </g>
      </g>
    </svg>
  )
}

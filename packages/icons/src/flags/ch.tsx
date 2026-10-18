import type { FlagIcon } from './types'

export const IconFlagCH: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'CH',
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
      data-slot='icon-flag-ch'
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
            id='ch-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='ch-c'
            x1='10.5'
            x2='10.5'
            y1='15'
            y2='0'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='red' />
            <stop offset='1' stopColor='#ff3131' />
          </linearGradient>
          <linearGradient
            id='ch-d'
            x1='10.5'
            x2='10.5'
            y1='3'
            y2='12'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='ch-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='ch-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ch-clip)'>
        <g clipPath='url(#ch-a)'>
          <path fill='url(#ch-b)' d='M21 0H0v15h21z' />
          <path fill='url(#ch-c)' d='M21 0H0v15h21z' />
          <path
            fill='url(#ch-d)'
            fillRule='evenodd'
            d='M9 9H6.26A.26.26 0 0 1 6 8.74V6.26q.02-.24.26-.26H9V3.26q.02-.24.26-.26h2.48q.24.02.26.26V6h2.74q.24.02.26.26v2.48q-.02.24-.26.26H12v2.74q-.02.24-.26.26H9.26a.26.26 0 0 1-.26-.26z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}

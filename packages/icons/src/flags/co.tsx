import type { FlagIcon } from './types'

export const IconFlagCO: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'CO',
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
      data-slot='icon-flag-co'
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
            id='co-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='co-c'
            x1='10.5'
            x2='10.5'
            y1='7'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0748ae' />
            <stop offset='1' stopColor='#003993' />
          </linearGradient>
          <linearGradient
            id='co-d'
            x1='10.5'
            x2='10.5'
            y1='11'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#de2035' />
            <stop offset='1' stopColor='#ce1126' />
          </linearGradient>
          <linearGradient
            id='co-e'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='7'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffd935' />
            <stop offset='1' stopColor='#fdd216' />
          </linearGradient>
          <clipPath id='co-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='co-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#co-clip)'>
        <g clipPath='url(#co-a)'>
          <path fill='url(#co-b)' d='M21 0H0v15h21z' />
          <path fill='url(#co-c)' d='M21 7H0v4h21z' />
          <path fill='url(#co-d)' d='M21 11H0v4h21z' />
          <path fill='url(#co-e)' d='M21 0H0v7h21z' />
        </g>
      </g>
    </svg>
  )
}

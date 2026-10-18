import type { FlagIcon } from './types'

export const IconFlagBF: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'BF',
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
      data-slot='icon-flag-bf'
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
            id='bf-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='bf-c'
            x1='10.5'
            x2='10.5'
            y1='8'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#00b051' />
            <stop offset='1' stopColor='#009f49' />
          </linearGradient>
          <linearGradient
            id='bf-d'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='8'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fa494b' />
            <stop offset='1' stopColor='#f02b2d' />
          </linearGradient>
          <clipPath id='bf-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='bf-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#bf-clip)'>
        <g clipPath='url(#bf-a)'>
          <path fill='url(#bf-b)' d='M21 0H0v15h21z' />
          <path fill='url(#bf-c)' d='M21 8H0v7h21z' />
          <path fill='url(#bf-d)' d='M21 0H0v8h21z' />
          <path
            fill='#fdd216'
            fillRule='evenodd'
            d='m10.5 9.17-1.76 1.26.65-2.07-1.74-1.29 2.16-.02L10.5 5l.69 2.05 2.16.02-1.74 1.3.65 2.06z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}

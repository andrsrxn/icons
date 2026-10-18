import type { FlagIcon } from './types'

export const IconFlagPR: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'PR',
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
      data-slot='icon-flag-pr'
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
            id='pr-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='pr-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fa2222' />
            <stop offset='1' stopColor='#ed0000' />
          </linearGradient>
          <linearGradient
            id='pr-d'
            x1='10.5'
            x2='10.5'
            y1='3'
            y2='6'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='pr-e'
            x1='10.5'
            x2='10.5'
            y1='9'
            y2='12'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='pr-f' x1='5' x2='5' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#1d63f9' />
            <stop offset='1' stopColor='#0650f0' />
          </linearGradient>
          <linearGradient
            id='pr-g'
            x1='3.5'
            x2='3.5'
            y1='5'
            y2='9.52'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='pr-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='pr-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#pr-clip)'>
        <g clipPath='url(#pr-a)'>
          <path fill='url(#pr-b)' d='M21 0H0v15h21z' />
          <path fill='url(#pr-c)' d='M21 0H0v15h21z' />
          <path fill='url(#pr-d)' d='M21 3H0v3h21z' />
          <path fill='url(#pr-e)' d='M21 9H0v3h21z' />
          <path fill='url(#pr-f)' fillRule='evenodd' d='m0 0 10 7.5L0 15z' clipRule='evenodd' />
          <path
            fill='url(#pr-g)'
            fillRule='evenodd'
            d='M3.5 8.46 2.03 9.52 2.6 7.8 1.12 6.73h1.82L3.5 5l.56 1.73h1.82L4.4 7.8l.56 1.72z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}

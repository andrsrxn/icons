import type { FlagIcon } from './types'

export const IconFlagPT: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'PT',
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
      data-slot='icon-flag-pt'
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
            id='pt-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='pt-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ff2936' />
            <stop offset='1' stopColor='#fd0d1b' />
          </linearGradient>
          <linearGradient id='pt-d' x1='4' x2='4' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#128415' />
            <stop offset='1' stopColor='#0a650c' />
          </linearGradient>
          <linearGradient id='pt-e' x1='8' x2='8' y1='4.5' y2='10.5' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#faf94f' />
            <stop offset='1' stopColor='#f8f736' />
          </linearGradient>
          <linearGradient id='pt-f' x1='8' x2='8' y1='6' y2='9' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='pt-g' x1='8' x2='8' y1='6.5' y2='8' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#1d50b5' />
            <stop offset='1' stopColor='#15439d' />
          </linearGradient>
          <clipPath id='pt-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='pt-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#pt-clip)'>
        <g clipPath='url(#pt-a)'>
          <path fill='url(#pt-b)' d='M21 0H0v15h21z' />
          <path fill='url(#pt-c)' d='M21 0H0v15h21z' />
          <path fill='url(#pt-d)' d='M8 0H0v15h8z' />
          <path
            fill='url(#pt-e)'
            d='M8 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 1a3 3 0 1 1 0-6 3 3 0 0 1 0 6'
          />
          <path
            fill='url(#pt-f)'
            fillRule='evenodd'
            d='M7 6.26q.01-.24.25-.26h1.5q.23.02.25.26V8a1 1 0 0 1-1 1 1 1 0 0 1-1-1z'
            clipRule='evenodd'
          />
          <path
            fill='url(#pt-g)'
            fillRule='evenodd'
            d='M8 8c.28 0 .5-.72.5-1a.5.5 0 0 0-1 0c0 .28.22 1 .5 1'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}

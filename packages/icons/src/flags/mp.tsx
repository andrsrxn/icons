import type { FlagIcon } from './types'

export const IconFlagMP: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'MP',
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
      data-slot='icon-flag-mp'
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
            id='mp-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='mp-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#1e8bd6' />
            <stop offset='1' stopColor='#1074ba' />
          </linearGradient>
          <linearGradient
            id='mp-d'
            x1='10.5'
            x2='10.5'
            y1='2.5'
            y2='12.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='mp-e'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='13'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#a9a7a9' />
            <stop offset='1' stopColor='#8c8a8c' />
          </linearGradient>
          <linearGradient
            id='mp-f'
            x1='10.5'
            x2='10.5'
            y1='4.65'
            y2='10.98'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='mp-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='mp-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#mp-clip)'>
        <g clipPath='url(#mp-a)'>
          <path fill='url(#mp-b)' d='M21 0H0v15h21z' />
          <path fill='url(#mp-c)' d='M21 0H0v15h21z' />
          <path
            fill='url(#mp-d)'
            d='M10.5 12.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10m0-1a4 4 0 1 1 0-8 4 4 0 0 1 0 8'
          />
          <path
            fill='url(#mp-e)'
            fillRule='evenodd'
            d='M8.94 6c.03-.55.5-1 1.06-1h1c.55 0 1.03.45 1.06 1l.38 6c.03.55-.38 1-.95 1H9.51a.94.94 0 0 1-.95-1z'
            clipRule='evenodd'
          />
          <path
            fill='url(#mp-f)'
            fillRule='evenodd'
            d='m10.5 9.51-2.06 1.47.76-2.4-2.03-1.51 2.53-.02.8-2.4.8 2.4 2.53.02-2.03 1.5.76 2.41z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}

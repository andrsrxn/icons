import type { FlagIcon } from './types'

export const IconFlagDZ: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'DZ',
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
      data-slot='icon-flag-dz'
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
            id='dz-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='dz-c' x1='5.5' x2='5.5' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#048345' />
            <stop offset='1' stopColor='#04753e' />
          </linearGradient>
          <linearGradient id='dz-d' x1='16' x2='16' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='dz-e'
            x1='13'
            x2='13'
            y1='5.5'
            y2='9.12'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e81b42' />
            <stop offset='1' stopColor='#d20f34' />
          </linearGradient>
          <linearGradient
            id='dz-f'
            x1='9.63'
            x2='9.63'
            y1='3'
            y2='12'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e81b42' />
            <stop offset='1' stopColor='#d20f34' />
          </linearGradient>
          <clipPath id='dz-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='dz-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#dz-clip)'>
        <g clipPath='url(#dz-a)'>
          <path fill='url(#dz-b)' d='M21 0H0v15h21z' />
          <path fill='url(#dz-c)' d='M11 0H0v15h11z' />
          <path fill='url(#dz-d)' d='M21 0H11v15h10z' />
          <path
            fill='url(#dz-e)'
            fillRule='evenodd'
            d='m13 8.28-1.18.84.44-1.38-1.16-.86 1.44-.01L13 5.5l.46 1.37 1.44.01-1.16.86.44 1.38z'
            clipRule='evenodd'
          />
          <path
            fill='url(#dz-f)'
            fillRule='evenodd'
            d='M13.26 4.21A4.2 4.2 0 0 0 10.31 3 4.4 4.4 0 0 0 6 7.5a4.4 4.4 0 0 0 4.31 4.5 4.2 4.2 0 0 0 2.95-1.21q-.8.39-1.77.4c-2.17 0-3.92-1.66-3.92-3.69s1.75-3.68 3.92-3.68q.97 0 1.77.4'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}

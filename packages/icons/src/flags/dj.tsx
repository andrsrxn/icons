import type { FlagIcon } from './types'

export const IconFlagDJ: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'DJ',
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
      data-slot='icon-flag-dj'
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
            id='dj-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='dj-c'
            x1='10.5'
            x2='10.5'
            y1='7'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#1dc837' />
            <stop offset='1' stopColor='#13ad2b' />
          </linearGradient>
          <linearGradient
            id='dj-d'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='7'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#82c5f5' />
            <stop offset='1' stopColor='#6ab3e8' />
          </linearGradient>
          <linearGradient id='dj-e' x1='5' x2='5' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='dj-f'
            x1='3.5'
            x2='3.5'
            y1='5'
            y2='9.52'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e21c21' />
            <stop offset='1' stopColor='#d7151a' />
          </linearGradient>
          <clipPath id='dj-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='dj-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#dj-clip)'>
        <g clipPath='url(#dj-a)'>
          <path fill='url(#dj-b)' d='M21 0H0v15h21z' />
          <path fill='url(#dj-c)' d='M21 7H0v8h21z' />
          <path fill='url(#dj-d)' d='M21 0H0v7h21z' />
          <path fill='url(#dj-e)' fillRule='evenodd' d='m0 0 10 7.5L0 15z' clipRule='evenodd' />
          <path
            fill='url(#dj-f)'
            fillRule='evenodd'
            d='M3.5 8.48 2.03 9.52l.54-1.72-1.45-1.07 1.8-.02L3.5 5l.57 1.71 1.8.02L4.44 7.8l.54 1.72z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}

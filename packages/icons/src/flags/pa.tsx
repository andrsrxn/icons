import type { FlagIcon } from './types'

export const IconFlagPA: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'PA',
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
      data-slot='icon-flag-pa'
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
            id='pa-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='pa-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='7'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e52448' />
            <stop offset='1' stopColor='#d01739' />
          </linearGradient>
          <linearGradient
            id='pa-d'
            x1='10.5'
            x2='10.5'
            y1='7'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#1367ae' />
            <stop offset='1' stopColor='#0a5492' />
          </linearGradient>
          <linearGradient
            id='pa-e'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='pa-f' x1='5' x2='5' y1='1.5' y2='5.12' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#1367ae' />
            <stop offset='1' stopColor='#0a5492' />
          </linearGradient>
          <linearGradient
            id='pa-g'
            x1='15.5'
            x2='15.5'
            y1='9'
            y2='12.62'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e52448' />
            <stop offset='1' stopColor='#d01739' />
          </linearGradient>
          <clipPath id='pa-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='pa-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#pa-clip)'>
        <g clipPath='url(#pa-a)'>
          <path fill='url(#pa-b)' d='M21 0H0v15h21z' />
          <path fill='url(#pa-c)' d='M21 0H0v7h21z' />
          <path fill='url(#pa-d)' d='M21 7H0v8h21z' />
          <path
            fill='url(#pa-e)'
            fillRule='evenodd'
            d='M0 7V0h10v7zm10 8V7h11v8z'
            clipRule='evenodd'
          />
          <path
            fill='url(#pa-f)'
            fillRule='evenodd'
            d='m5 4.32-1.18.8.4-1.37-1.12-.87 1.42-.04L5 1.5l.48 1.34 1.42.04-1.12.87.4 1.37z'
            clipRule='evenodd'
          />
          <path
            fill='url(#pa-g)'
            fillRule='evenodd'
            d='m15.5 11.82-1.18.8.4-1.37-1.12-.87 1.42-.04L15.5 9l.48 1.34 1.42.04-1.12.87.4 1.37z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}

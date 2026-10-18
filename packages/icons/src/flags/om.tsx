import type { FlagIcon } from './types'

export const IconFlagOM: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'OM',
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
      data-slot='icon-flag-om'
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
            id='om-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='om-c'
            x1='10.5'
            x2='10.5'
            y1='10'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#138e16' />
            <stop offset='1' stopColor='#0f7f12' />
          </linearGradient>
          <linearGradient
            id='om-d'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ed2b35' />
            <stop offset='1' stopColor='#d91b25' />
          </linearGradient>
          <linearGradient
            id='om-e'
            x1='3.5'
            x2='3.5'
            y1='1'
            y2='4.8'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='om-f' x1='14' x2='14' y1='0' y2='5' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='om-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='om-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#om-clip)'>
        <g clipPath='url(#om-a)'>
          <path fill='url(#om-b)' d='M21 0H0v15h21z' />
          <path fill='url(#om-c)' d='M21 10H0v5h21z' />
          <path
            fill='url(#om-d)'
            fillRule='evenodd'
            d='M0 15h7v-5h14V5H7V0H0z'
            clipRule='evenodd'
          />
          <path
            fill='url(#om-e)'
            fillRule='evenodd'
            d='M3.5 3.53 2.63 4.8l.45-1.47-1.53.12 1.43-.57-1.04-1.13 1.33.77L3.5 1l.23 1.52 1.33-.77-1.04 1.13 1.43.57-1.53-.12.45 1.47z'
            clipRule='evenodd'
          />
          <path fill='url(#om-f)' d='M21 0H7v5h14z' />
        </g>
      </g>
    </svg>
  )
}

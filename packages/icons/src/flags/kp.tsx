import type { FlagIcon } from './types'

export const IconFlagKP: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'KP',
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
      data-slot='icon-flag-kp'
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
            id='kp-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='kp-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='3'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#1461b6' />
            <stop offset='1' stopColor='#0b52a1' />
          </linearGradient>
          <linearGradient
            id='kp-d'
            x1='10.5'
            x2='10.5'
            y1='12'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#1461b6' />
            <stop offset='1' stopColor='#0b52a1' />
          </linearGradient>
          <linearGradient
            id='kp-e'
            x1='10.5'
            x2='10.5'
            y1='3'
            y2='12'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='kp-f'
            x1='10.5'
            x2='10.5'
            y1='4'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f53846' />
            <stop offset='1' stopColor='#eb2130' />
          </linearGradient>
          <linearGradient id='kp-g' x1='7.5' x2='7.5' y1='5' y2='10' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='kp-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='kp-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#kp-clip)'>
        <g clipPath='url(#kp-a)'>
          <path fill='url(#kp-b)' d='M21 0H0v15h21z' />
          <path fill='url(#kp-c)' d='M21 0H0v3h21z' />
          <path fill='url(#kp-d)' d='M21 12H0v3h21z' />
          <path fill='url(#kp-e)' d='M21 3H0v9h21z' />
          <path fill='url(#kp-f)' d='M21 4H0v7h21z' />
          <path
            fill='url(#kp-g)'
            fillRule='evenodd'
            d='M7.5 10a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0-1.5 1.47 1.02-.52-1.71 1.43-1.08-1.79-.04L7.5 5l-.59 1.69-1.79.04L6.55 7.8l-.52 1.71z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}

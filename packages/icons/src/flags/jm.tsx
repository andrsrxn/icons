import type { FlagIcon } from './types'

export const IconFlagJM: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'JM',
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
      data-slot='icon-flag-jm'
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
            id='jm-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='jm-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#1dbe4f' />
            <stop offset='1' stopColor='#159b3f' />
          </linearGradient>
          <linearGradient id='jm-d' x1='4.5' x2='4.5' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <linearGradient
            id='jm-e'
            x1='16.5'
            x2='16.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <linearGradient
            id='jm-f'
            x1='10.5'
            x2='10.5'
            y1='-1.44'
            y2='16.43'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffd646' />
            <stop offset='1' stopColor='#fed02f' />
          </linearGradient>
          <clipPath id='jm-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='jm-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#jm-clip)'>
        <g clipPath='url(#jm-a)'>
          <path fill='url(#jm-b)' d='M21 0H0v15h21z' />
          <path fill='url(#jm-c)' d='M21 0H0v15h21z' />
          <path fill='url(#jm-d)' fillRule='evenodd' d='m0 0 9 7.5L0 15z' clipRule='evenodd' />
          <path fill='url(#jm-e)' fillRule='evenodd' d='m21 0-9 7.5 9 7.5z' clipRule='evenodd' />
          <path
            fill='url(#jm-f)'
            fillRule='evenodd'
            d='M10.5 6.3-.96-1.45-2.08.22 8.72 7.5l-10.8 7.28 1.12 1.65L10.5 8.7l11.46 7.73 1.12-1.65-10.8-7.28L23.09.22l-1.12-1.66z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}

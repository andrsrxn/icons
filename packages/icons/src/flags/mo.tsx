import type { FlagIcon } from './types'

export const IconFlagMO: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'MO',
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
      data-slot='icon-flag-mo'
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
            id='mo-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='mo-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#079d7b' />
            <stop offset='1' stopColor='#01795e' />
          </linearGradient>
          <linearGradient
            id='mo-d'
            x1='10.51'
            x2='10.51'
            y1='4'
            y2='12'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='mo-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='mo-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#mo-clip)'>
        <g clipPath='url(#mo-a)'>
          <path fill='url(#mo-b)' d='M21 0H0v15h21z' />
          <path fill='url(#mo-c)' d='M21 0H0v15h21z' />
          <path
            fill='url(#mo-d)'
            fillRule='evenodd'
            d='m8.45 8.9.42.1H6.5q.18.54.47 1h7.06q.3-.46.47-1h-2.4l.43-.1c-.45.02-1.2.1-2.03.1-.85 0-1.6-.08-2.05-.1m-.42-.12c-1.12-.38-1.88-.99-1.76-1.44.13-.5 1.32-.62 2.66-.26l.2.06q-.04-.3-.04-.64c0-1.38.63-2.5 1.41-2.5s1.41 1.12 1.41 2.5q0 .33-.04.63l.23-.06c1.34-.36 2.53-.24 2.66.26.12.45-.66 1.07-1.8 1.44-.2-.59-1.22-.77-2.46-.77s-2.27.18-2.47.78M13.17 11a4.1 4.1 0 0 1-5.34 0z'
            clipRule='evenodd'
          />
          <path
            fill='#fcd117'
            fillRule='evenodd'
            d='M10.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-4 2.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m8 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M13 4a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M8 4a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}

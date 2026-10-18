import type { FlagIcon } from './types'

export const IconFlagMH: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'MH',
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
      data-slot='icon-flag-mh'
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
            id='mh-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='mh-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#064dae' />
            <stop offset='1' stopColor='#003d91' />
          </linearGradient>
          <linearGradient
            id='mh-d'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f18d36' />
            <stop offset='1' stopColor='#db761e' />
          </linearGradient>
          <linearGradient
            id='mh-e'
            x1='10.5'
            x2='10.5'
            y1='4'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='mh-f' x1='4.5' x2='4.5' y1='2' y2='9' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='mh-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='mh-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#mh-clip)'>
        <g clipPath='url(#mh-a)'>
          <path fill='url(#mh-b)' d='M21 0H0v15h21z' />
          <path fill='url(#mh-c)' d='M21 0H0v15h21z' />
          <path fill='url(#mh-d)' fillRule='evenodd' d='M21 0v4L0 15z' clipRule='evenodd' />
          <path fill='url(#mh-e)' fillRule='evenodd' d='M21 8V4L0 15z' clipRule='evenodd' />
          <path
            fill='url(#mh-f)'
            fillRule='evenodd'
            d='M4.84 4.37 4.5 2l-.34 2.37-.91-1.04.47 1.39-1.39-.47 1.04.91L1 5.5l2.37.34-1.04.91 1.39-.47-.47 1.39.91-1.04L4.5 9l.34-2.37.91 1.04-.47-1.39 1.39.47-1.04-.91L8 5.5l-2.37-.34 1.04-.91-1.39.47.47-1.39z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}

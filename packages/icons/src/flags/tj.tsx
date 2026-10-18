import type { FlagIcon } from './types'

export const IconFlagTJ: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'TJ',
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
      data-slot='icon-flag-tj'
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
            id='tj-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='tj-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#d9101c' />
            <stop offset='1' stopColor='#ca0814' />
          </linearGradient>
          <linearGradient
            id='tj-d'
            x1='10.5'
            x2='10.5'
            y1='10'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0f7811' />
            <stop offset='1' stopColor='#0a650c' />
          </linearGradient>
          <linearGradient
            id='tj-e'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='tj-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='tj-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#tj-clip)'>
        <g clipPath='url(#tj-a)'>
          <path fill='url(#tj-b)' d='M21 0H0v15h21z' />
          <path fill='url(#tj-c)' d='M21 0H0v5h21z' />
          <path fill='url(#tj-d)' d='M21 10H0v5h21z' />
          <path fill='url(#tj-e)' d='M21 5H0v5h21z' />
          <path
            fill='#fad14e'
            fillRule='evenodd'
            d='M10.07 8 10 7.5a.5.5 0 0 1 1 0q0 .15-.07.5h.57c.28 0 .5.23.5.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5c0-.28.22-.5.5-.5zM9.5 7a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-6 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}

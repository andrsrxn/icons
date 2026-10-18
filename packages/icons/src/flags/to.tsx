import type { FlagIcon } from './types'

export const IconFlagTO: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'TO',
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
      data-slot='icon-flag-to'
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
            id='to-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='to-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e20f1b' />
            <stop offset='1' stopColor='#c00711' />
          </linearGradient>
          <linearGradient id='to-d' x1='6' x2='6' y1='0' y2='8' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='to-e' x1='6' x2='6' y1='1' y2='7' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#df101b' />
            <stop offset='1' stopColor='#c00711' />
          </linearGradient>
          <clipPath id='to-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='to-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#to-clip)'>
        <g clipPath='url(#to-a)'>
          <path fill='url(#to-b)' d='M21 0H0v15h21z' />
          <path fill='url(#to-c)' d='M21 0H0v15h21z' />
          <path fill='url(#to-d)' d='M12 0H0v8h12z' />
          <path
            fill='url(#to-e)'
            fillRule='evenodd'
            d='M7 3V1.26C7 1.1 6.89 1 6.75 1h-1.5a.25.25 0 0 0-.25.26V3H3.26C3.1 3 3 3.11 3 3.25v1.5c0 .14.12.25.26.25H5v1.74c0 .16.11.26.25.26h1.5C6.9 7 7 6.88 7 6.74V5h1.74C8.9 5 9 4.89 9 4.75v-1.5A.25.25 0 0 0 8.74 3z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}

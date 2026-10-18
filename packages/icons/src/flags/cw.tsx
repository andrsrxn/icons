import type { FlagIcon } from './types'

export const IconFlagCW: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'CW',
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
      data-slot='icon-flag-cw'
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
            id='cw-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='cw-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0543a8' />
            <stop offset='1' stopColor='#00307d' />
          </linearGradient>
          <linearGradient
            id='cw-d'
            x1='10.5'
            x2='10.5'
            y1='10'
            y2='12'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fcc747' />
            <stop offset='1' stopColor='#fec539' />
          </linearGradient>
          <linearGradient
            id='cw-e'
            x1='6.5'
            x2='6.5'
            y1='3.5'
            y2='7.12'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='cw-f' x1='3' x2='3' y1='1.5' y2='4.21' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='cw-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='cw-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#cw-clip)'>
        <g clipPath='url(#cw-a)'>
          <path fill='url(#cw-b)' d='M21 0H0v15h21z' />
          <path fill='url(#cw-c)' d='M21 0H0v15h21z' />
          <path fill='url(#cw-d)' d='M21 10H0v2h21z' />
          <path
            fill='url(#cw-e)'
            fillRule='evenodd'
            d='m6.5 6.27-1.18.85.45-1.38-1.17-.86h1.45L6.5 3.5l.45 1.38H8.4l-1.17.86.45 1.38z'
            clipRule='evenodd'
          />
          <path
            fill='url(#cw-f)'
            fillRule='evenodd'
            d='m3 3.58-.88.63.33-1.03-.88-.64h1.1L3 1.5l.34 1.03h1.09l-.88.65.33 1.03z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}

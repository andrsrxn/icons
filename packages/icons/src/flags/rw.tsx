import type { FlagIcon } from './types'

export const IconFlagRW: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'RW',
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
      data-slot='icon-flag-rw'
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
            id='rw-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='rw-c'
            x1='10.5'
            x2='10.5'
            y1='11'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#2d754d' />
            <stop offset='1' stopColor='#235f3e' />
          </linearGradient>
          <linearGradient
            id='rw-d'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='7'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#25b1eb' />
            <stop offset='1' stopColor='#1aa3dc' />
          </linearGradient>
          <linearGradient
            id='rw-e'
            x1='10.5'
            x2='10.5'
            y1='7'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fad546' />
            <stop offset='1' stopColor='#fad12f' />
          </linearGradient>
          <linearGradient
            id='rw-f'
            x1='16'
            x2='16'
            y1='1.65'
            y2='5.35'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#edc738' />
            <stop offset='1' stopColor='#e5be2a' />
          </linearGradient>
          <clipPath id='rw-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='rw-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#rw-clip)'>
        <g clipPath='url(#rw-a)'>
          <path fill='url(#rw-b)' d='M21 0H0v15h21z' />
          <path fill='url(#rw-c)' d='M21 11H0v4h21z' />
          <path fill='url(#rw-d)' d='M21 0H0v7h21z' />
          <path fill='url(#rw-e)' d='M21 7H0v4h21z' />
          <path
            fill='url(#rw-f)'
            fillRule='evenodd'
            d='m16 4.5-.77.85.06-1.14-1.14.06.85-.77-.85-.77 1.14.06-.06-1.14.77.85.77-.85-.06 1.14 1.14-.06-.85.77.85.77-1.14-.06.06 1.14z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}

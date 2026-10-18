import type { FlagIcon } from './types'

export const IconFlagSG: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'SG',
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
      data-slot='icon-flag-sg'
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
            id='sg-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='sg-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='8'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e12237' />
            <stop offset='1' stopColor='#ce1126' />
          </linearGradient>
          <linearGradient
            id='sg-d'
            x1='10.5'
            x2='10.5'
            y1='8'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='sg-e' x1='6' x2='6' y1='1' y2='7' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='sg-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='sg-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#sg-clip)'>
        <g clipPath='url(#sg-a)'>
          <path fill='url(#sg-b)' d='M21 0H0v15h21z' />
          <path fill='url(#sg-c)' d='M21 0H0v8h21z' />
          <path fill='url(#sg-d)' d='M21 8H0v7h21z' />
          <path
            fill='url(#sg-e)'
            fillRule='evenodd'
            d='M6.87 1.66a2.5 2.5 0 1 0 0 4.68 3 3 0 1 1 0-4.69M5.5 4a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m1 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m1-2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-2-1.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}

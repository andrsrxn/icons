import type { FlagIcon } from './types'

export const IconFlagBJ: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'BJ',
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
      data-slot='icon-flag-bj'
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
            id='bj-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='bj-c'
            x1='10.5'
            x2='10.5'
            y1='7'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f12641' />
            <stop offset='1' stopColor='#e71834' />
          </linearGradient>
          <linearGradient
            id='bj-d'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='7'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffd648' />
            <stop offset='1' stopColor='#fcd036' />
          </linearGradient>
          <linearGradient id='bj-e' x1='4' x2='4' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#17a668' />
            <stop offset='1' stopColor='#118653' />
          </linearGradient>
          <clipPath id='bj-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='bj-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#bj-clip)'>
        <g clipPath='url(#bj-a)'>
          <path fill='url(#bj-b)' d='M21 0H0v15h21z' />
          <path fill='url(#bj-c)' d='M21 7H0v8h21z' />
          <path fill='url(#bj-d)' d='M21 0H0v7h21z' />
          <path fill='url(#bj-e)' d='M8 0H0v15h8z' />
        </g>
      </g>
    </svg>
  )
}

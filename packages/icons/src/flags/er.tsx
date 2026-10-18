import type { FlagIcon } from './types'

export const IconFlagER: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'ER',
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
      data-slot='icon-flag-er'
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
            id='er-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='er-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='7.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#29c53f' />
            <stop offset='1' stopColor='#21ac35' />
          </linearGradient>
          <linearGradient
            id='er-d'
            x1='10.5'
            x2='10.5'
            y1='7.5'
            y2='15.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#579ded' />
            <stop offset='1' stopColor='#458bdb' />
          </linearGradient>
          <linearGradient
            id='er-e'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f42d56' />
            <stop offset='1' stopColor='#e9103d' />
          </linearGradient>
          <clipPath id='er-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='er-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#er-clip)'>
        <g clipPath='url(#er-a)'>
          <path fill='url(#er-b)' d='M21 0H0v15h21z' />
          <path fill='url(#er-c)' d='M21 0H0v7.5h21z' />
          <path fill='url(#er-d)' d='M21 7.5H0v8h21z' />
          <path fill='url(#er-e)' fillRule='evenodd' d='m0 15 21-7.5L0 0z' clipRule='evenodd' />
          <path
            fill='#ffc63c'
            d='M6.5 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0 1a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7'
          />
          <path fill='#ffc63c' d='M6 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
          <path fill='#ffc63c' d='M7 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
          <path fill='#ffc63c' d='M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
          <path fill='#ffc63c' d='M6 8.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
          <path fill='#ffc63c' d='M7 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
          <path fill='#ffc63c' d='M6 9.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
          <path fill='#ffc63c' d='M7 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
        </g>
      </g>
    </svg>
  )
}

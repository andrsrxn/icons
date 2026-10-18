import type { FlagIcon } from './types'

export const IconFlagNI: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'NI',
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
      data-slot='icon-flag-ni'
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
            id='ni-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='ni-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#1a78d6' />
            <stop offset='1' stopColor='#106ac4' />
          </linearGradient>
          <linearGradient
            id='ni-d'
            x1='10.5'
            x2='10.5'
            y1='10'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#1a78d6' />
            <stop offset='1' stopColor='#106ac4' />
          </linearGradient>
          <linearGradient
            id='ni-e'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='ni-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='ni-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ni-clip)'>
        <g clipPath='url(#ni-a)'>
          <path fill='url(#ni-b)' d='M21 0H0v15h21z' />
          <path fill='url(#ni-c)' d='M21 0H0v5h21z' />
          <path fill='url(#ni-d)' d='M21 10H0v5h21z' />
          <path fill='url(#ni-e)' d='M21 5H0v5h21z' />
          <path
            fill='#dbcd92'
            d='M10.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 .5a2 2 0 1 1 0-4 2 2 0 0 1 0 4'
          />
          <path fill='#9cddee' fillRule='evenodd' d='m10.5 6.5 1 2h-2z' clipRule='evenodd' />
        </g>
      </g>
    </svg>
  )
}

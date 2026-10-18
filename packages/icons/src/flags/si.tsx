import type { FlagIcon } from './types'

export const IconFlagSI: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'SI',
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
      data-slot='icon-flag-si'
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
            id='si-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='si-c'
            x1='10.5'
            x2='10.5'
            y1='3'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0c47b7' />
            <stop offset='1' stopColor='#073da4' />
          </linearGradient>
          <linearGradient
            id='si-d'
            x1='10.5'
            x2='10.5'
            y1='10'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e53b35' />
            <stop offset='1' stopColor='#d32e28' />
          </linearGradient>
          <linearGradient
            id='si-e'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='7'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='si-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='si-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#si-clip)'>
        <g clipPath='url(#si-a)'>
          <path fill='url(#si-b)' d='M21 0H0v15h21z' />
          <path fill='url(#si-c)' d='M21 3H0v7h21z' />
          <path fill='url(#si-d)' d='M21 10H0v5h21z' />
          <path
            fill='url(#si-e)'
            fillRule='evenodd'
            d='M0 5V0h21v5H6.93V4s-.7-.5-1.43-.5S4 4 4 4v1zm5.5 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}

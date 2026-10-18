import type { FlagIcon } from './types'

export const IconFlagSM: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'SM',
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
      data-slot='icon-flag-sm'
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
            id='sm-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='sm-c'
            x1='10.5'
            x2='10.5'
            y1='7'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#7cccf5' />
            <stop offset='1' stopColor='#62b7e3' />
          </linearGradient>
          <linearGradient
            id='sm-d'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='7'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='sm-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='sm-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#sm-clip)'>
        <g clipPath='url(#sm-a)'>
          <path fill='url(#sm-b)' d='M21 0H0v15h21z' />
          <path fill='url(#sm-c)' d='M21 7H0v8h21z' />
          <path fill='url(#sm-d)' d='M21 0H0v7h21z' />
          <path
            fill='#445f42'
            d='M8 7c0 .9.48 1.72 1.25 2.16a.5.5 0 0 0 .5-.86A1.5 1.5 0 0 1 9 7a.5.5 0 0 0-1 0m3.85 2.1A2.5 2.5 0 0 0 13 7a.5.5 0 0 0-1 0c0 .52-.26 1-.7 1.26a.5.5 0 0 0 .55.85'
          />
          <path
            fill='#d89f3d'
            d='M10.5 8c.55 0 1-.67 1-1.5s-.45-1.5-1-1.5-1 .67-1 1.5.45 1.5 1 1.5'
          />
        </g>
      </g>
    </svg>
  )
}

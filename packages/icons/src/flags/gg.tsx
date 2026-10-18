import type { FlagIcon } from './types'

export const IconFlagGG: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'GG',
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
      data-slot='icon-flag-gg'
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
            id='gg-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='gg-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f33349' />
            <stop offset='1' stopColor='#e51d34' />
          </linearGradient>
          <linearGradient
            id='gg-d'
            x1='10.5'
            x2='10.5'
            y1='2'
            y2='13'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fce24c' />
            <stop offset='1' stopColor='#f9dc38' />
          </linearGradient>
          <clipPath id='gg-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='gg-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#gg-clip)'>
        <g clipPath='url(#gg-a)'>
          <path fill='url(#gg-b)' d='M21 0H0v15h21z' />
          <path
            fill='url(#gg-c)'
            fillRule='evenodd'
            d='M9 6H0v3h9v6h3V9h9V6h-9V0H9z'
            clipRule='evenodd'
          />
          <path
            fill='url(#gg-d)'
            fillRule='evenodd'
            d='M10 8v4l-.5 1h2l-.5-1V8h4l1 .5v-2L15 7h-4V3l.5-1h-2l.5 1v4H6l-1-.5v2L6 8z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}

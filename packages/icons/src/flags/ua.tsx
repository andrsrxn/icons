import type { FlagIcon } from './types'

export const IconFlagUA: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'UA',
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
      data-slot='icon-flag-ua'
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
            id='ua-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='ua-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='8'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#156dd1' />
            <stop offset='1' stopColor='#0d5eb9' />
          </linearGradient>
          <linearGradient
            id='ua-d'
            x1='10.5'
            x2='10.5'
            y1='8'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffd948' />
            <stop offset='1' stopColor='#ffd430' />
          </linearGradient>
          <clipPath id='ua-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='ua-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ua-clip)'>
        <g clipPath='url(#ua-a)'>
          <path fill='url(#ua-b)' d='M21 0H0v15h21z' />
          <path fill='url(#ua-c)' d='M21 0H0v8h21z' />
          <path fill='url(#ua-d)' d='M21 8H0v7h21z' />
        </g>
      </g>
    </svg>
  )
}

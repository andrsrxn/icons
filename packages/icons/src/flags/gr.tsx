import type { FlagIcon } from './types'

export const IconFlagGR: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'GR',
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
      data-slot='icon-flag-gr'
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
            id='gr-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='gr-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='14'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#1c6dc1' />
            <stop offset='1' stopColor='#1660ad' />
          </linearGradient>
          <clipPath id='gr-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='gr-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#gr-clip)'>
        <g clipPath='url(#gr-a)'>
          <path fill='url(#gr-b)' d='M21 0H0v15h21z' />
          <path
            fill='url(#gr-c)'
            fillRule='evenodd'
            d='M0 0h4v4H0zm6 0h4v4H6zm4 0h11v2H10zm0 4h11v2H10zm0 4h11v2H10zM0 12h21v2H0zm6-6h4v4H6zM0 6h4v4H0z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}

import type { FlagIcon } from './types'

export const IconFlagGN: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'GN',
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
      data-slot='icon-flag-gn'
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
            id='gn-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='gn-c'
            x1='15.5'
            x2='15.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#1dbe5e' />
            <stop offset='1' stopColor='#169e4d' />
          </linearGradient>
          <linearGradient id='gn-d' x1='3.5' x2='3.5' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e72b42' />
            <stop offset='1' stopColor='#cc162c' />
          </linearGradient>
          <linearGradient
            id='gn-e'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffd952' />
            <stop offset='1' stopColor='#fcd036' />
          </linearGradient>
          <clipPath id='gn-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='gn-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#gn-clip)'>
        <g clipPath='url(#gn-a)'>
          <path fill='url(#gn-b)' d='M21 0H0v15h21z' />
          <path fill='url(#gn-c)' d='M21 0H10v15h11z' />
          <path fill='url(#gn-d)' d='M7 0H0v15h7z' />
          <path fill='url(#gn-e)' d='M14 0H7v15h7z' />
        </g>
      </g>
    </svg>
  )
}

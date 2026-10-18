import type { FlagIcon } from './types'

export const IconFlagMU: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'MU',
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
      data-slot='icon-flag-mu'
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
            id='mu-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='mu-c'
            x1='10.5'
            x2='10.5'
            y1='12'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#1dbb63' />
            <stop offset='1' stopColor='#17a455' />
          </linearGradient>
          <linearGradient
            id='mu-d'
            x1='10.5'
            x2='10.5'
            y1='4'
            y2='8'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#222b82' />
            <stop offset='1' stopColor='#1b236c' />
          </linearGradient>
          <linearGradient
            id='mu-e'
            x1='10.5'
            x2='10.5'
            y1='8'
            y2='12'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffd741' />
            <stop offset='1' stopColor='#ffd430' />
          </linearGradient>
          <linearGradient
            id='mu-f'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='4'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f4374a' />
            <stop offset='1' stopColor='#e92c3f' />
          </linearGradient>
          <clipPath id='mu-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='mu-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#mu-clip)'>
        <g clipPath='url(#mu-a)'>
          <path fill='url(#mu-b)' d='M21 0H0v15h21z' />
          <path fill='url(#mu-c)' d='M21 12H0v3h21z' />
          <path fill='url(#mu-d)' d='M21 4H0v4h21z' />
          <path fill='url(#mu-e)' d='M21 8H0v4h21z' />
          <path fill='url(#mu-f)' d='M21 0H0v4h21z' />
        </g>
      </g>
    </svg>
  )
}

import type { FlagIcon } from './types'

export const IconFlagPW: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'PW',
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
      data-slot='icon-flag-pw'
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
            id='pw-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='pw-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#65c6ee' />
            <stop offset='1' stopColor='#4faed5' />
          </linearGradient>
          <linearGradient id='pw-d' x1='9.5' x2='9.5' y1='3' y2='12' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffe044' />
            <stop offset='1' stopColor='#ffdd32' />
          </linearGradient>
          <clipPath id='pw-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='pw-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#pw-clip)'>
        <g clipPath='url(#pw-a)'>
          <path fill='url(#pw-b)' d='M21 0H0v15h21z' />
          <path fill='url(#pw-c)' d='M21 0H0v15h21z' />
          <path fill='url(#pw-d)' d='M9.5 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9' />
        </g>
      </g>
    </svg>
  )
}

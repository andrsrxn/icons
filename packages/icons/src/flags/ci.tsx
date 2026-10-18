import type { FlagIcon } from './types'

export const IconFlagCI: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'CI',
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
      data-slot='icon-flag-ci'
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
            id='ci-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='ci-c'
            x1='15.5'
            x2='15.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#1dc87d' />
            <stop offset='1' stopColor='#169e62' />
          </linearGradient>
          <linearGradient id='ci-d' x1='3.5' x2='3.5' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f89242' />
            <stop offset='1' stopColor='#f67f22' />
          </linearGradient>
          <linearGradient
            id='ci-e'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='ci-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='ci-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ci-clip)'>
        <g clipPath='url(#ci-a)'>
          <path fill='url(#ci-b)' d='M21 0H0v15h21z' />
          <path fill='url(#ci-c)' d='M21 0H10v15h11z' />
          <path fill='url(#ci-d)' d='M7 0H0v15h7z' />
          <path fill='url(#ci-e)' d='M14 0H7v15h7z' />
        </g>
      </g>
    </svg>
  )
}

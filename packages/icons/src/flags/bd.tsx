import type { FlagIcon } from './types'

export const IconFlagBD: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'BD',
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
      data-slot='icon-flag-bd'
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
            id='bd-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='bd-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#128363' />
            <stop offset='1' stopColor='#0c6a4f' />
          </linearGradient>
          <linearGradient id='bd-d' x1='9.5' x2='9.5' y1='3' y2='12' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f23c53' />
            <stop offset='1' stopColor='#f22e46' />
          </linearGradient>
          <clipPath id='bd-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='bd-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#bd-clip)'>
        <g clipPath='url(#bd-a)'>
          <path fill='url(#bd-b)' d='M21 0H0v15h21z' />
          <path fill='url(#bd-c)' d='M21 0H0v15h21z' />
          <path fill='url(#bd-d)' d='M9.5 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9' />
        </g>
      </g>
    </svg>
  )
}

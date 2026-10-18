import type { FlagIcon } from './types'

export const IconFlagAE: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'AE',
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
      data-slot='icon-flag-ae'
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
            id='ae-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='ae-c'
            x1='13.5'
            x2='13.5'
            y1='0'
            y2='5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#12833b' />
            <stop offset='1' stopColor='#0d7332' />
          </linearGradient>
          <linearGradient
            id='ae-d'
            x1='13.5'
            x2='13.5'
            y1='10'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <linearGradient
            id='ae-e'
            x1='13.5'
            x2='13.5'
            y1='5'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='ae-f' x1='3' x2='3' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ff323e' />
            <stop offset='1' stopColor='#fd0d1b' />
          </linearGradient>
          <clipPath id='ae-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='ae-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ae-clip)'>
        <g clipPath='url(#ae-a)'>
          <path fill='url(#ae-b)' d='M21 0H0v15h21z' />
          <path fill='url(#ae-c)' d='M21 0H6v5h15z' />
          <path fill='url(#ae-d)' d='M21 10H6v5h15z' />
          <path fill='url(#ae-e)' d='M21 5H6v5h15z' />
          <path fill='url(#ae-f)' d='M6 0H0v15h6z' />
        </g>
      </g>
    </svg>
  )
}

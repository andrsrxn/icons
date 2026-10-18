import type { FlagIcon } from './types'

export const IconFlagNE: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'NE',
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
      data-slot='icon-flag-ne'
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
            id='ne-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='ne-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f0642f' />
            <stop offset='1' stopColor='#df531d' />
          </linearGradient>
          <linearGradient
            id='ne-d'
            x1='10.5'
            x2='10.5'
            y1='10'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#2dcc45' />
            <stop offset='1' stopColor='#1faf35' />
          </linearGradient>
          <linearGradient
            id='ne-e'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='ne-f'
            x1='10.5'
            x2='10.5'
            y1='5.5'
            y2='9.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e85c27' />
            <stop offset='1' stopColor='#df531d' />
          </linearGradient>
          <clipPath id='ne-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='ne-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ne-clip)'>
        <g clipPath='url(#ne-a)'>
          <path fill='url(#ne-b)' d='M21 0H0v15h21z' />
          <path fill='url(#ne-c)' d='M21 0H0v5h21z' />
          <path fill='url(#ne-d)' d='M21 10H0v5h21z' />
          <path fill='url(#ne-e)' d='M21 5H0v5h21z' />
          <path fill='url(#ne-f)' d='M10.5 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4' />
        </g>
      </g>
    </svg>
  )
}

import type { FlagIcon } from './types'

export const IconFlagAO: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'AO',
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
      data-slot='icon-flag-ao'
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
            id='ao-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='ao-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ff323e' />
            <stop offset='1' stopColor='#fd0d1b' />
          </linearGradient>
          <linearGradient
            id='ao-d'
            x1='10.5'
            x2='10.5'
            y1='8'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <linearGradient
            id='ao-e'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='8'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#dd2137' />
            <stop offset='1' stopColor='#cc162c' />
          </linearGradient>
          <linearGradient
            id='ao-f'
            x1='10.7'
            x2='10.7'
            y1='4.26'
            y2='10.18'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f8d84b' />
            <stop offset='1' stopColor='#f9d536' />
          </linearGradient>
          <clipPath id='ao-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='ao-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ao-clip)'>
        <g clipPath='url(#ao-a)'>
          <path fill='url(#ao-b)' d='M21 0H0v15h21z' />
          <path fill='url(#ao-c)' d='M21 0H0v15h21z' />
          <path fill='url(#ao-d)' d='M21 8H0v7h21z' />
          <path fill='url(#ao-e)' d='M21 0H0v8h21z' />
          <path
            fill='url(#ao-f)'
            d='m10.63 8.85-1.4-.93a.5.5 0 0 1 .55-.84l1.53 1.03a2 2 0 0 0-1.25-2.87.5.5 0 0 1 .26-.96 3 3 0 0 1 1.83 4.38l.63.42a.5.5 0 1 1-.56.84l-.71-.48a3 3 0 0 1-2.74.63.5.5 0 1 1 .25-.96 2 2 0 0 0 1.61-.26M9.5 6.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
          />
        </g>
      </g>
    </svg>
  )
}

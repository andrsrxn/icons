import type { FlagIcon } from './types'

export const IconFlagGH: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'GH',
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
      data-slot='icon-flag-gh'
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
            id='gh-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='gh-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e71f37' />
            <stop offset='1' stopColor='#cc162c' />
          </linearGradient>
          <linearGradient
            id='gh-d'
            x1='10.5'
            x2='10.5'
            y1='10'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#118b56' />
            <stop offset='1' stopColor='#0b6b41' />
          </linearGradient>
          <linearGradient
            id='gh-e'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fdd64c' />
            <stop offset='1' stopColor='#fcd036' />
          </linearGradient>
          <linearGradient
            id='gh-f'
            x1='10.5'
            x2='10.5'
            y1='5.25'
            y2='9.77'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <clipPath id='gh-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='gh-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#gh-clip)'>
        <g clipPath='url(#gh-a)'>
          <path fill='url(#gh-b)' d='M21 0H0v15h21z' />
          <path fill='url(#gh-c)' d='M21 0H0v5h21z' />
          <path fill='url(#gh-d)' d='M21 10H0v5h21z' />
          <path fill='url(#gh-e)' d='M21 5H0v5h21z' />
          <path
            fill='url(#gh-f)'
            fillRule='evenodd'
            d='M10.5 8.7 9.03 9.78l.56-1.72-1.47-1.07h1.82l.56-1.73.56 1.72h1.82L11.4 8.06l.56 1.72z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}

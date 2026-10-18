import type { FlagIcon } from './types'

export const IconFlagKH: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'KH',
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
      data-slot='icon-flag-kh'
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
            id='kh-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='kh-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='4'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0f3eb6' />
            <stop offset='1' stopColor='#09339f' />
          </linearGradient>
          <linearGradient
            id='kh-d'
            x1='10.5'
            x2='10.5'
            y1='11'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0f3eb6' />
            <stop offset='1' stopColor='#09339f' />
          </linearGradient>
          <linearGradient
            id='kh-e'
            x1='10.5'
            x2='10.5'
            y1='4'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ed1a3c' />
            <stop offset='1' stopColor='#de0b2d' />
          </linearGradient>
          <linearGradient
            id='kh-f'
            x1='10.5'
            x2='10.5'
            y1='5.5'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='kh-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='kh-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#kh-clip)'>
        <g clipPath='url(#kh-a)'>
          <path fill='url(#kh-b)' d='M21 0H0v15h21z' />
          <path fill='url(#kh-c)' d='M21 0H0v4h21z' />
          <path fill='url(#kh-d)' d='M21 11H0v4h21z' />
          <path fill='url(#kh-e)' d='M21 4H0v7h21z' />
          <path
            fill='url(#kh-f)'
            fillRule='evenodd'
            d='M7.5 8h1v2h-2zM9 8h3v2H9zm3.5 0h1l1 2h-2zm0-1.5c0-.27.23-.5.5-.5.28 0 .5.22.5.5v1h-1zM9 6.56h1V6c0-.28.23-.5.5-.5.28 0 .5.22.5.5v.55h1v.95H9zM7.5 6.5c0-.28.23-.51.5-.51.28 0 .5.22.5.5v1h-1z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}

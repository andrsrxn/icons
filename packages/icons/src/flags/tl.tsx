import type { FlagIcon } from './types'

export const IconFlagTL: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'TL',
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
      data-slot='icon-flag-tl'
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
            id='tl-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='tl-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ff323e' />
            <stop offset='1' stopColor='#fd0d1b' />
          </linearGradient>
          <linearGradient id='tl-d' x1='6.5' x2='6.5' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffcc51' />
            <stop offset='1' stopColor='#ffc63c' />
          </linearGradient>
          <linearGradient id='tl-e' x1='4.5' x2='4.5' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <linearGradient
            id='tl-f'
            x1='2.92'
            x2='4.92'
            y1='5.45'
            y2='8.92'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='tl-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='tl-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#tl-clip)'>
        <g clipPath='url(#tl-a)'>
          <path fill='url(#tl-b)' d='M21 0H0v15h21z' />
          <path fill='url(#tl-c)' d='M21 0H0v15h21z' />
          <path fill='url(#tl-d)' fillRule='evenodd' d='m0 0 13 7.5L0 15z' clipRule='evenodd' />
          <path fill='url(#tl-e)' fillRule='evenodd' d='m0 0 9 7.5L0 15z' clipRule='evenodd' />
          <path
            fill='url(#tl-f)'
            fillRule='evenodd'
            d='m4.46 8.12-.67 1.45-.34-1.56-1.59-.18 1.38-.81-.32-1.57 1.2 1.06 1.39-.78-.64 1.46 1.18 1.08z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}

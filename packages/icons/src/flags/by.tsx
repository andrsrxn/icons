import type { FlagIcon } from './types'

export const IconFlagBY: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'BY',
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
      data-slot='icon-flag-by'
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
            id='by-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='by-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e54252' />
            <stop offset='1' stopColor='#c63442' />
          </linearGradient>
          <linearGradient
            id='by-d'
            x1='10.5'
            x2='10.5'
            y1='10'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#5cbe6b' />
            <stop offset='1' stopColor='#4ea55b' />
          </linearGradient>
          <linearGradient id='by-e' x1='1.5' x2='1.5' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='by-f'
            x1='-.5'
            x2='-.5'
            y1='1.5'
            y2='13.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e54252' />
            <stop offset='1' stopColor='#c63442' />
          </linearGradient>
          <linearGradient id='by-g' x1='1.5' x2='1.5' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e54252' />
            <stop offset='1' stopColor='#c63442' />
          </linearGradient>
          <clipPath id='by-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='by-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#by-clip)'>
        <g clipPath='url(#by-a)'>
          <path fill='url(#by-b)' d='M21 0H0v15h21z' />
          <path fill='url(#by-c)' d='M21 0H0v10h21z' />
          <path fill='url(#by-d)' d='M21 10H0v5h21z' />
          <path
            fill='url(#by-e)'
            fillRule='evenodd'
            d='M3 12.75V15H0V0h3v2.25L2.5 3l.5.75v1.5L2.5 6l.5.75v1.5L2.5 9l.5.75v1.5l-.5.75z'
            clipRule='evenodd'
          />
          <path
            fill='url(#by-f)'
            fillRule='evenodd'
            d='m-1.5 3 1-1.5L.5 3l-1 1.5zm0 3 1-1.5L.5 6l-1 1.5zm0 3 1-1.5L.5 9l-1 1.5zm0 3 1-1.5 1 1.5-1 1.5z'
            clipRule='evenodd'
          />
          <path
            fill='url(#by-g)'
            fillRule='evenodd'
            d='m.5 1.5 1-1.5 1 1.5-1 1.5zm0 3 1-1.5 1 1.5-1 1.5zm0 3 1-1.5 1 1.5-1 1.5zm0 3 1-1.5 1 1.5-1 1.5zm0 3 1-1.5 1 1.5-1 1.5z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}

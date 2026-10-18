import type { FlagIcon } from './types'

export const IconFlagAW: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'AW',
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
      data-slot='icon-flag-aw'
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
            id='aw-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='aw-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#5098ea' />
            <stop offset='1' stopColor='#458bdb' />
          </linearGradient>
          <linearGradient
            id='aw-d'
            x1='4.5'
            x2='4.5'
            y1='1.5'
            y2='7.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='aw-e' x1='4.5' x2='4.5' y1='2' y2='7' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e82045' />
            <stop offset='1' stopColor='#d01739' />
          </linearGradient>
          <clipPath id='aw-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='aw-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#aw-clip)'>
        <g clipPath='url(#aw-a)'>
          <path fill='url(#aw-b)' d='M21 0H0v15h21z' />
          <path fill='url(#aw-c)' d='M21 0H0v15h21z' />
          <path
            fill='url(#aw-d)'
            d='M1.8 4.96a.5.5 0 0 1 0-.92l1.57-.67.67-1.57a.5.5 0 0 1 .92 0l.67 1.57 1.57.67c.4.17.4.75 0 .92l-1.57.67-.67 1.57a.5.5 0 0 1-.92 0l-.67-1.57z'
          />
          <path
            fill='url(#aw-e)'
            fillRule='evenodd'
            d='M3.75 5.25 2 4.5l1.75-.75L4.5 2l.75 1.75L7 4.5l-1.75.75L4.5 7z'
            clipRule='evenodd'
          />
          <path fill='#f9d536' d='M21 11H0v1h21zm0-2H0v1h21z' />
        </g>
      </g>
    </svg>
  )
}
